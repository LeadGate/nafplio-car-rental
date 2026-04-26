"""Post-build patcher for Nafplio Car Rental.

Run AFTER `npm run build` and BEFORE deploy. Patches:
- per-route <title>, <meta description>, <link canonical>, og:*, twitter:*
- FAQPage JSON-LD on /nafplio-car-rental-faq route
- Article JSON-LD on guide routes (driving / parking / day-trips / airport / about)
- Removes prerender.mjs's slug-derived defaults
"""
import json
import re
from pathlib import Path

DIST = Path('dist')
DOMAIN = 'nafplio-car-rental.com'
SITE_URL = f'https://{DOMAIN}'
BRAND = 'Nafplio Car Rental'

# Per-route SEO map
ROUTES = {
    '/': {
        'title': 'Nafplio Car Rental — Compare Local Prices',
        'desc': 'Independent comparison of car rentals in Nafplio (First Capital of Greece). Local agencies, Athens airport pickup, 2026 toll table €4.60–€7.55, and the new Greek K.O.K.',
        'image': '/3.webp',
    },
    '/nafplio-airport-car-rental': {
        'title': 'Athens Airport (ATH) to Nafplio Drive Guide',
        'desc': 'Athens Airport to Nafplio is 169 km / 2h 05m, tolls €4.60–€7.55. Full route with Elefsina, Isthmos and Spathovouni, plus the KTEL Argolidas bus alternative from Syngrou 8.',
        'image': '/3.webp',
        'article': True,
    },
    '/driving-in-nafplio': {
        'title': 'Driving in Argolis 2026 — Greek K.O.K. Rules',
        'desc': 'Greek traffic code update: Law 5209/2025 in force 13 September 2025. Urban speed 30 km/h, BAC 0.50 g/L voids insurance, mobile-phone fine €350 + 30-day suspension.',
        'image': '/4.webp',
        'article': True,
    },
    '/nafplio-old-town-parking': {
        'title': 'Nafplio Old Town Parking & Plate Removal',
        'desc': 'Park in the free Akti Miaouli port lot — never inside Nafplio Old Town. Plate removal documented October 2024 turns a one-day rental into a 10-day rental.',
        'image': '/5.webp',
        'article': True,
    },
    '/day-trips-from-nafplio': {
        'title': 'Mycenae & Epidaurus by Car from Nafplio',
        'desc': 'Mycenae 21 km / 29 min, Epidaurus 26 km / 31 min, Tiryns 4 km / 10 min. 2026 ticket prices, free on-site parking, two-day vs single-day routing.',
        'image': '/6.webp',
        'article': True,
    },
    '/nafplio-car-rental-faq': {
        'title': 'Nafplio Car Rental FAQ — Pickup, Insurance & Parking',
        'desc': 'Twelve practical answers about renting a car in Nafplio: IDP rules, deposit holds, automatic transmission, insurance, parking and the new 2026 K.O.K.',
        'image': '/7.webp',
    },
    '/about': {
        'title': 'About — How We Research Nafplio Car Rentals',
        'desc': 'How this independent Nafplio Car Rental comparison is built — ELSTAT, Bank of Greece, Hellenic Ministry of Culture, Olympia Odos and Moreas 2026 toll tables, Law 5209/2025.',
        'image': '/8.webp',
        'article': True,
    },
    '/contact': {
        'title': 'Contact — Nafplio Car Rental Editors',
        'desc': 'Editorial contact for the independent Nafplio Car Rental comparison site. We do not handle bookings or deposits — local Argolis agencies and emergency contacts inside.',
        'image': '/9.webp',
    },
    '/privacy': {
        'title': 'Privacy Policy',
        'desc': 'Privacy policy for nafplio-car-rental.com — what data we collect, affiliate disclosure, contact for data corrections.',
        'image': '/og-image.png',
    },
}

AUTHOR_PERSON = {
    "@type": "Person",
    "@id": f"{SITE_URL}/about#author",
    "name": "Sarmat",
    "url": f"{SITE_URL}/about",
    "jobTitle": f"Editor, {BRAND}",
}


def parse_faq_items(faq_tsx_path: Path):
    """Parse FAQ items from FAQ.tsx — returns list of {question, answer}."""
    txt = faq_tsx_path.read_text(encoding='utf-8')
    pat = re.compile(r'\{\s*question:\s*"([^"]+)",\s*answer:\s*"((?:[^"\\]|\\.)+)"\s*\}', re.DOTALL)
    out = []
    for m in pat.finditer(txt):
        q = m.group(1)
        a = m.group(2).replace('\\"', '"').replace('\\n', ' ').strip()
        # Strip HTML tags from answer for schema
        a_plain = re.sub(r'<[^>]+>', '', a)
        out.append({'question': q, 'answer': a_plain[:500]})
    return out


def build_faq_schema(items):
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": item['question'],
                "acceptedAnswer": {"@type": "Answer", "text": item['answer']},
            }
            for item in items
        ],
    }


def build_article_schema(slug, route_data):
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": route_data['title'],
        "description": route_data['desc'],
        "url": f"{SITE_URL}{slug}",
        "image": f"{SITE_URL}{route_data['image']}",
        "datePublished": "2026-04-26",
        "dateModified": "2026-04-26",
        "author": AUTHOR_PERSON,
        "publisher": {
            "@type": "Organization",
            "name": BRAND,
            "url": SITE_URL,
            "logo": {"@type": "ImageObject", "url": f"{SITE_URL}/favicon-512x512.png"},
        },
        "mainEntityOfPage": {"@type": "WebPage", "@id": f"{SITE_URL}{slug}"},
    }


def patch_html(html: str, slug: str, route: dict, extra_jsonld_blocks: list[str]) -> str:
    title_full = f"{route['title']} | {BRAND}" if slug != '/' else BRAND
    desc = route['desc']
    canonical = f"{SITE_URL}{slug if slug != '/' else ''}"
    if not canonical.endswith('/') and slug == '/':
        canonical = SITE_URL
    image_abs = f"{SITE_URL}{route['image']}"

    # 1) <title>
    html = re.sub(r'<title>[^<]*</title>', f'<title>{title_full}</title>', html, count=1)

    # 2) <meta name="description">
    if re.search(r'<meta\s+name="description"', html):
        html = re.sub(
            r'<meta\s+name="description"\s+content="[^"]*"\s*/?>',
            f'<meta name="description" content="{desc}" />',
            html, count=1
        )
    else:
        html = html.replace('</title>', f'</title>\n    <meta name="description" content="{desc}" />', 1)

    # 3) <link rel="canonical">
    html = re.sub(r'<link\s+rel="canonical"[^>]*/?>', '', html)
    html = html.replace(
        '</title>',
        f'</title>\n    <link rel="canonical" href="{canonical}" />',
        1
    )

    # 4) Strip stale OG/Twitter then add fresh
    html = re.sub(r'\s*<meta\s+property="og:[^"]+"[^>]*/?>', '', html)
    html = re.sub(r'\s*<meta\s+name="twitter:[^"]+"[^>]*/?>', '', html)

    og_block = f'''
    <meta property="og:type" content="{'article' if route.get('article') else 'website'}" />
    <meta property="og:title" content="{route['title']}" />
    <meta property="og:description" content="{desc}" />
    <meta property="og:url" content="{canonical}" />
    <meta property="og:image" content="{image_abs}" />
    <meta property="og:site_name" content="{BRAND}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{route['title']}" />
    <meta name="twitter:description" content="{desc}" />
    <meta name="twitter:image" content="{image_abs}" />'''
    html = html.replace('</head>', f'{og_block}\n</head>', 1)

    # 5) Inject extra JSON-LD blocks before </head>
    for block in extra_jsonld_blocks:
        html = html.replace(
            '</head>',
            f'    <script type="application/ld+json">{json.dumps(block, ensure_ascii=False)}</script>\n  </head>',
            1
        )

    return html


def main():
    if not DIST.exists():
        print('ERROR: dist/ not found — run npm run build first')
        return

    faq_items = parse_faq_items(Path('src/pages/FAQ.tsx'))
    print(f'Parsed {len(faq_items)} FAQ items')

    for slug, route in ROUTES.items():
        # Find dist HTML file
        if slug == '/':
            html_path = DIST / 'index.html'
        else:
            html_path = DIST / slug.lstrip('/') / 'index.html'

        if not html_path.exists():
            print(f'  SKIP (not found): {slug} -> {html_path}')
            continue

        html = html_path.read_text(encoding='utf-8')
        extra = []

        # FAQPage schema
        if slug == '/nafplio-car-rental-faq' and faq_items:
            extra.append(build_faq_schema(faq_items))

        # Article schema for guide routes
        if route.get('article'):
            extra.append(build_article_schema(slug, route))

        new_html = patch_html(html, slug, route, extra)
        html_path.write_text(new_html, encoding='utf-8')
        schema_note = '+'.join([s.get('@type', '?') for s in extra]) if extra else 'no-schema'
        print(f'  patched {slug:42s} ({schema_note})')

    # Author Person schema on About page
    about_path = DIST / 'about' / 'index.html'
    if about_path.exists():
        html = about_path.read_text(encoding='utf-8')
        person = {
            **AUTHOR_PERSON,
            "knowsAbout": [
                "Nafplio car rental",
                "Argolis driving",
                "Greek traffic code 2026",
                "Mycenae and Epidaurus archaeological sites",
                "Athens to Nafplio toll routes",
            ],
            "worksFor": {
                "@type": "Organization",
                "name": BRAND,
                "url": SITE_URL,
            },
        }
        html = html.replace(
            '</head>',
            f'    <script type="application/ld+json">{json.dumps(person, ensure_ascii=False)}</script>\n  </head>',
            1
        )
        about_path.write_text(html, encoding='utf-8')
        print('  patched About page with author Person schema')

    print('\nDone.')


if __name__ == '__main__':
    main()
