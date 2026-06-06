import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Car, HelpCircle } from "lucide-react";

const ContactPage = () => {
  const breadcrumbSchema =
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nafplio-car-rental.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Page",
        "item": "https://nafplio-car-rental.com/contact"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Contact Us",
    "description": "Nafplio Car Rental Editors is the independent comparison team behind nafplio-car-rental.com, and the team does not handle bookings, deposits, or vehicle",
    "url": "https://nafplio-car-rental.com/contact",
    "datePublished": "2026-04-26",
    "dateModified": "2026-04-26",
    "publisher": {
      "@type": "Organization",
      "name": "Nafplio Car Rental",
      "url": "https://nafplio-car-rental.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nafplio-car-rental.com/favicon-512x512.png"
      }
    },
    "mainEntityOfPage": "https://nafplio-car-rental.com/contact",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="Contact — Nafplio Car Rental Editors"
        description="Nafplio Car Rental Editors is the independent comparison team behind nafplio-car-rental.com, and the team does not handle bookings, deposits, or vehicle"
        canonical="https://nafplio-car-rental.com/contact"
      />

      <Breadcrumbs items={[{ label: "Contact Page" }]} />

      <HeroSection
        title="Contact Us"
        subtitle={<><p className="text-white drop-shadow-md">Editorial contact for the independent Nafplio Car Rental comparison site. We do not handle bookings, deposits, or vehicle handovers. For rental confirmations, contact the agency directly; for editorial corrections, email info@nafplio-car-rental.com — we typically respond within 2–3 business days.</p></>}
        image="/9.webp"
        imageAlt="Car rental in Nafplio"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Editorial Contact"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Nafplio Car Rental Editors uses `info@nafplio-car-rental.com` for press, listing, and data-correction requests, and the editorial inbox is the correct channel for citation updates or agency profile changes. Use one of these subject lines: “data correction”, “press”, “agency listing”, or “general”; the team typically closes straightforward requests in 2–3 business days, but booking changes must stay with the rental agency on your voucher.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Useful Local Numbers in Nafplio"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The table below lists official contact points that can help with roadside, police, or transport questions in Nafplio, Argolis, and the wider Peloponnese.</p>
          <DataTable headers={["Service", "Number", "Notes"]} rows={[["General Emergency", "112", "Pan-European emergency line"], ["Police (non-emergency)", "100", "National police line in Greece"], ["Tourist Police", "+30 27520 98726", "Nafplio office serving visitors in the city center"], ["Fire", "199", "Hellenic Fire Service"], ["Ambulance", "166", "EKAB ambulance service"], ["KTEL Argolidas", "+30 27520 27323 / 27423", "Syngrou 8, Nafplio"], ["Traffic Police", "ttournafpliou@astynomia.gr", "Tmima Trochaias Tourismou Nafpliou"]]} />
          <InfoBox><p>💡 <strong>Tip:</strong> Keep KTEL Argolidas at Syngrou 8 saved in your phone if you plan to use regional buses from Nafplio to Argos, Mycenae, or Epidaurus, because the office on Syngrou 8 can confirm departures and ticketing details.</p></InfoBox>
      </Section>

      <ImageDivider image="/2.webp" alt="Nafplio car rental" />

      <Section
        icon={<HelpCircle className="w-6 h-6" />}
        title="For Booking-Specific Questions"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Nafplio rental customers should contact the agency named on the voucher, because the agency controls deposits, preauthorisation, excess/deductible terms, and the statutory third-party liability coverage required under Greek law and Bank of Greece Act 195/3. If you rented from Staikos Rent a Car (rentacarnafplio.gr) with owner Christos Bouchoutsos, Bounos Car Rental, Makris Car Rental since 1986, Alma Car Rental, Base Rent a Car, Euro Rent a Car since 1986, Imperial Car Rental, Hermes Travel, Stamou Car Rental, Aspida Car Rental, G.A. Car Rental with owner Mr Gavriil, or Ride &amp; Drive, the agency’s own contract governs CDW, SCDW, FDW, WUG, and any zero excess or full coverage promise.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If your BAC exceeds the legal limit, insurers can refuse cover even when you purchased CDW, SCDW, FDW, WUG, or a zero excess package, because Greek traffic rules under the Hellenic Police and K.O.K. apply to the driver before the rental policy pays out. The current code places phone-use penalties in Article 17 and alcohol penalties in Article 46, so verify the current wording with the Hellenic Police or kodiko.gr before you drive.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">For public transport alternatives, KTEL Argolidas connects Nafplio with Argos, Korinthos, and Athens, and route planning often runs through the Korinthos interchange, Isthmos, Elefsina, Attiki Odos, Olympia Odos, Moreas A7, Spathovouni, or the EO Argous–Nafpliou depending on your pickup point and final destination. If you are comparing pre-booking options, see our <a href="/driving-in-nafplio/" className="text-primary underline hover:text-accent">Nafplio driving rules summary</a> and <a href="/nafplio-airport-car-rental/" className="text-primary underline hover:text-accent">Athens airport to Nafplio drive guide</a>.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> For a self-drive day trip, the Nafplio–Mycenae run is short enough for a morning visit, while Epidaurus, Tiryns, Karathona, Tolo, Porto Heli, and Nemea each work as separate half-day or full-day excursions from a rental base in Nafplio, Argolis.</p></InfoBox>
      </Section>

      <div className="flex justify-center py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition">
          Compare Car Rental Deals
        </a>
      </div>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="For Site-Wide Issues"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">If you spot a broken link, price mismatch, or outdated fact on nafplio-car-rental.com, send the URL and the correction to `info@nafplio-car-rental.com` with “data correction” in the subject line. The editorial team aims to verify most reports within seven days, and the team may cross-check details against ELSTAT, the Hellenic Ministry of Culture at odysseus.culture.gr, the Bank of Greece, Δήμος Ναυπλιέων, or Tmima Trochaias Tourismou Nafpliou when the issue affects legal or routing guidance.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> When you report a local detail, include the exact place name such as Palamidi Fortress, Bourtzi, Akronafplia, Karathona Beach, Asklipiou Avenue, Akti Miaouli, Bouboulinas, or Syngrou 8 so the editors can verify the location quickly and avoid confusion with nearby Argolic Gulf or Peloponnese references.</p></InfoBox>
      </Section>

      <div className="flex justify-center py-16 mt-8">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default ContactPage;
