"""Build llms.txt, llms-full.txt, improved robots.txt, clean _redirects."""
import re
from pathlib import Path

CONTENT_DIR = Path('../vault/inbox/niches/Greece/Nafplio/Copywriting')
PUBLIC = Path('public')
DOMAIN = 'nafplio-car-rental.com'
BRAND = 'Nafplio Car Rental'

ROUTES = [
    ('/', 'Homepage', '01-homepage-nafplio-car-rental-overview-gpt-edit.md.txt',
     'Independent comparison of car rentals in Nafplio, the First Capital of Greece. Local agencies, Athens airport pickup, 2026 toll table €4.60–€7.55, KTEL bus alternative, and the new Greek K.O.K. fines.'),
    ('/nafplio-airport-car-rental', 'Athens Airport (ATH) to Nafplio', '02-athens-airport-gpt-edit.md.txt',
     'Step-by-step guide to driving 169 km from Athens International Airport to Nafplio in 2h05m, with confirmed 2026 toll plazas (Elefsina €2.50, Isthmos €2.10, Spathovouni €2.95) and the KTEL Argolidas bus alternative from Syngrou 8.'),
    ('/driving-in-nafplio', 'Greek Traffic Code 2026 + Argolis', '03-greek-traffic-code-2026-argolis-driving-gpt-edit.md.txt',
     'Complete summary of Law 5209/2025, the new Greek Code of Road Conduct in force from 13 September 2025. Urban speed 30 km/h, BAC 0.50 g/L voids insurance, mobile-phone €350+30-day suspension, BAC tables, automated enforcement.'),
    ('/nafplio-old-town-parking', 'Nafplio Old Town Parking', '04-nafplio-old-town-parking-plate-removal-gpt-edit.md.txt',
     'Where to park a rental car in Nafplio: free Akti Miaouli port lot, Palamidi top lot, never inside the resident-only Old Town. Documented October 2024 plate-removal sweep that turns one-day rentals into 10-day forced extensions.'),
    ('/day-trips-from-nafplio', 'Mycenae & Epidaurus by Car', '05-mycenae-epidaurus-day-trip-routing-gpt-edit.md.txt',
     'Verified 2026 distances and ticket prices for the Argolis UNESCO loop: Mycenae 21 km / 29 min / €20, Epidaurus 26 km / 31 min / €20, Tiryns 4 km / 10 min / €10. Two-day vs single-day routing, free on-site parking at every site.'),
    ('/nafplio-car-rental-faq', 'FAQ', '06-nafplio-car-rental-faq-gpt-edit.md.txt',
     'Twelve practical answers about renting a car in Nafplio: IDP rules for AU/CA/GIB/UK/US drivers, deposit holds, automatic transmission availability, port-lot safety, fuel benchmarks, and the new 2026 K.O.K. fines.'),
    ('/about', 'About', '07-about-page-gpt-edit.md.txt',
     'How this independent Nafplio Car Rental comparison is built — sourced from ELSTAT, Bank of Greece Act 195/3, Hellenic Ministry of Culture (odysseus.culture.gr), Olympia Odos and Moreas 2026 toll tables, and Law 5209/2025.'),
    ('/contact', 'Contact', '08-contact-page-gpt-edit.md.txt',
     'Editorial contact for the independent Nafplio Car Rental comparison site, plus useful local emergency numbers, KTEL Argolidas terminal contact and the dedicated Tourist Traffic Police email.'),
]

# llms.txt
llms_lines = [
    f'# {BRAND}', '',
    f'> Independent comparison site for car rentals in Nafplio (Náfplio), the First Capital of Greece in the Argolis prefecture, Peloponnese. Built around 12 named local agencies, the official 2026 Olympia Odos and Moreas toll tables, the Hellenic Ministry of Culture archaeological-site data, and Law 5209/2025 (the new Greek Code of Road Conduct in force from 13 September 2025).',
    '', '## Pages', ''
]
for slug, name, _, desc in ROUTES:
    url = f'https://{DOMAIN}{slug}' if slug != '/' else f'https://{DOMAIN}/'
    llms_lines.append(f'- [{name}]({url}): {desc}')

llms_lines += [
    '',
    f'- [Full content](https://{DOMAIN}/llms-full.txt): Concatenated markdown of every page (~14,000 words) for AI systems that cannot render JavaScript.',
    '', '## Key Data Points', '',
    '- Athens Airport (ATH) to Nafplio: 169 km, 2 h 05 m, tolls €4.60–€7.55 (Olympia Odos Elefsina €2.50 + Isthmos €2.10, optional Moreas Spathovouni €2.95).',
    '- Greek fuel April 2026: €2.062/L Euro 95 national average; Argolis range €1.986–€2.149.',
    '- KTEL Argolidas Athens (Kifissou) → Nafplio (Syngrou 8): every 2h from 05:00 to 21:30, journey 2h10m, ticket €11–€19.',
    '- UNESCO ticket prices 2026: Mycenae €20, Epidaurus €20, Tiryns €10 (Hellenic Ministry of Culture, hhticket.gr).',
    '- Karathona Beach: Blue Flag certification withdrawn July 2025 by the Hellenic Society for the Protection of Nature.',
    '- Greek Code of Road Conduct: Law 5209/2025 (ΦΕΚ Α 100, 13 June 2025), in force from 13 September 2025.',
    '- Urban speed limit (Article 20): 30 km/h unless local signage explicitly raises it.',
    '- BAC limit (Article 46): 0.50 g/L blood. Exceeding voids both statutory third-party liability AND any CDW/FDW.',
    '- Mobile phone while driving (Article 17): €350 + 30-day license suspension + 30-day plate seizure.',
    '- Insurance minimums (Bank of Greece Act 195/3 of 29 November 2021): €1,300,000 per victim bodily injury, €1,300,000 per accident material damage.',
    '- Tourist Traffic Police Nafplio: ttournafpliou@astynomia.gr, Eleftherias 1-2, 21100 Nafplio.',
    '- Verified plate-removal sweep October 2024 (Argolikeseidiseis.gr) — converts a one-day rental into a 10-day forced rental.',
    '', '## Usage Policy', '',
    f'Content on this site may be cited and quoted with attribution to {DOMAIN}. The site is built for AI-search citation; please use the canonical URL when referencing facts.', '',
]
PUBLIC.joinpath('llms.txt').write_text('\n'.join(llms_lines), encoding='utf-8')
print('wrote public/llms.txt')

# llms-full.txt
full = [f'# {BRAND} — Full Content Reference', '']
for slug, name, fname, _ in ROUTES:
    fp = CONTENT_DIR / fname
    if not fp.exists():
        print(f'  warn: missing {fp}'); continue
    body = fp.read_text(encoding='utf-8')
    body = re.sub(r'\n#+\s+(Change Log|Coverage Report|If you need further)\b[\s\S]*', '', body)
    body = re.sub(r'\*\*E-E-A-T signal:\*\*[^-]*---', '', body)
    body = re.sub(r'^#\s+Improved page copy\s*\n+', '', body, flags=re.M)
    full.append(f'\n---\n\n# {name}\n\nURL: https://{DOMAIN}{slug}\n')
    full.append(body)
PUBLIC.joinpath('llms-full.txt').write_text('\n'.join(full), encoding='utf-8')
total_words = sum(len(s.split()) for s in full)
print(f'wrote public/llms-full.txt ({total_words} words)')

# robots.txt
ai_bots = [
    'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai',
    'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'GoogleOther',
    'Applebot', 'Applebot-Extended', 'CCBot', 'cohere-ai', 'Bytespider',
    'Diffbot', 'Amazonbot',
]
robots = ['User-agent: *', 'Allow: /', 'Disallow: /admin/', '',
          '# AI search and assistant crawlers — explicitly allowed']
for bot in ai_bots:
    robots += ['', f'User-agent: {bot}', 'Allow: /']
robots += ['', f'Sitemap: https://{DOMAIN}/sitemap.xml', '']
PUBLIC.joinpath('robots.txt').write_text('\n'.join(robots), encoding='utf-8')
print('wrote public/robots.txt')

PUBLIC.joinpath('_redirects').write_text('/* /index.html 200\n/404.html /404.html 404\n', encoding='utf-8')
print('wrote public/_redirects (cleaned)')

print('\nDone.')
