import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Car } from "lucide-react";

const AboutPage = () => {
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
        "name": "About",
        "item": "https://nafplio-car-rental.com/about"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How We Built This Nafplio Rental Comparison",
    "description": "How this independent Nafplio Car Rental comparison is built — sourced from ELSTAT, Bank of Greece Act 195/3, the Hellenic Ministry of Culture, the 2026 Olympia Odos and Moreas toll tables, and Law 5209/2025.",
    "url": "https://nafplio-car-rental.com/about",
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
    "mainEntityOfPage": "https://nafplio-car-rental.com/about",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="About — How We Research Nafplio Car Rentals"
        description="How this independent Nafplio Car Rental comparison is built — sourced from ELSTAT, Bank of Greece Act 195/3, the Hellenic Ministry of Culture, the 2026 Olympia Odos and Moreas toll tables, and Law 5209/2025."
        canonical="https://nafplio-car-rental.com/about"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      <Breadcrumbs items={[{ label: "About" }]} />

      <HeroSection
        title="How We Built This Nafplio Rental Comparison"
        subtitle={<><p className="text-white drop-shadow-md">An independent comparison resource for car rentals in Nafplio, the First Capital of Greece in Argolis, Peloponnese. We are not a rental agency — we use official sources, on-the-ground checks, and broker disclosures to compare the local market against international booking platforms.</p></>}
        image="/8.webp"
        imageAlt="Car rental in Nafplio"
      />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Who We Are"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>nafplio-car-rental.com is an independent car rental booking guide</strong> for Nafplio. <strong>nafplio-car-rental.com does not own vehicles, operate a rental office, hold deposits, or issue rental contracts.</strong> All bookings, supplier conditions, deposits, insurance terms and final prices are handled by the booking partner or rental supplier shown in the booking widget.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">This site is published by a small remote editorial team, and the primary editor is Sarmat. Our research uses Greek-language sources such as anagnostis.org, argolikeseidiseis.gr, and kodiko.gr, plus official institutions such as ELSTAT and the Δήμος Ναυπλιέων when a statistic needs municipal confirmation.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The editorial process is not desk-only — we drove the Athens-to-Nafplio corridor during the latest travel season to verify toll plazas and parking access near Akti Miaouli. We do not accept agency payments for ranking priority, and the published order is reviewed quarterly with source notes for each agency mention.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> A high review score is not proof of compliance, because Greek road and insurance rules can still apply after an accident. Under Bank of Greece Act 195/3 and Law 5209/2025, an insurer may examine statutory-third-party liability, excess/deductible, and preauthorisation conditions before approving a claim.</p></WarningBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="How We Research"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">We build each comparison from named data sources, and every paragraph below is self-contained so readers can verify one subject at a time.</p>
          <DataTable headers={["Topic", "Source(s)", "Update Cadence"]} rows={[["Tourism statistics", "ELSTAT 2024 bulletin + argolikeseidiseis.gr (12 Oct 2025)", "Annual"], ["Toll figures", "Olympia Odos + Moreas official tables", "Annual, effective 1 January"], ["Traffic code", "Law 5209/2025 + Law 5290/2026 on kodiko.gr", "When amended"], ["Site tickets and hours", "odysseus.culture.gr", "Seasonal / annual reset"], ["Insurance minimums", "Bank of Greece Executive Committee Act 195/3/29.11.2021", "When revised"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed">ELSTAT and argolikeseidiseis.gr place Argolis at the top of the Peloponnese prefecture table with 441,291 arrivals, while the Δήμος Ναυπλιέων recorded 297,320 arrivals and 703,580 overnights. The average stay of 2.2 nights helps explain why Nafplio agencies keep short-stay fleet options such as Ford Fiesta, Hyundai i10, and Toyota Aygo in regular rotation.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The official toll sources matter because the Athens route price changes by interchange, and the corrected range is €4.60 via Elefsina and Isthmos or €7.55 when Spathovouni is included on the Moreas-Nemea route. Olympia Odos, Moreas A7, Elefsina, Isthmos, Korinthos interchange, Attiki Odos, and EO Argous–Nafpliou are all relevant route names for readers planning a pickup in Nafplio.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The cultural-ticket section uses odysseus.culture.gr because archaeological access affects day-trip budgets to Mycenae, Epidaurus, and Tiryns. The same planning logic applies to Palamidi Fortress, Bourtzi, and Akronafplia, where official hours and ticket changes can alter the value of a car rental itinerary.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Our insurance notes reflect Bank of Greece Act 195/3 — we treat terms such as CDW, SCDW, FDW, WUG, franchise, zero excess, full coverage, and excess/deductible as contract language rather than marketing language. Rental desks in Nafplio may also request a preauthorisation on the card, and the final settlement can depend on the rental agency's own terms even when statutory-third-party liability is included.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> When comparing agencies, ask whether a quoted rate includes CDW, SCDW, or FDW — some desks advertise a low daily base and then add a higher franchise or deductibles at pickup. A printed voucher and the agency's written terms are more useful than a verbal promise.</p></InfoBox>
      </Section>

      <ImageDivider image="/2.webp" alt="Nafplio car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What We Cover"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Nafplio Car Rental tracks the cost and logistics that affect a rental in Argolis, and the table below shows the main comparison inputs.</p>
          <DataTable headers={["Topic", "Source(s)", "Update Cadence"]} rows={[["Tolls Athens \u2192 Nafplio", "Olympia Odos + Moreas official tables", "Annual (1 January)"], ["Greek traffic fines", "Law 5209/2025 + \u03a6\u0395\u039a amendments", "When parliament publishes"], ["UNESCO ticket prices", "odysseus.culture.gr", "Annual (May reset)"], ["Local agency landscape", "Direct outreach + forum verification", "Quarterly"], ["Fuel benchmark", "fuelprices.gr / fuelo.net", "Monthly"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed">Nafplio Car Rental also uses route and geography terms that matter for extraction and comparison, including Argolic Gulf, Karathona, Tolo, Porto Heli, Nemea, Asklipiou Avenue, Bouboulinas, Syngrou 8, and Akti Miaouli. For a step-by-step route breakdown, see <a href="/nafplio-airport-car-rental" className="text-primary underline hover:text-accent">the Athens airport drive guide</a> and <a href="/driving-in-nafplio" className="text-primary underline hover:text-accent">the Nafplio driving rules and fines guide</a>.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The local fleet mix influences comparison value, and Nafplio Car Rental tracks published or observed models such as Peugeot, Citroen, Fiat, Audi, Mercedes, Nissan, Fiat Panda, Skoda Octavia automatic, Opel Insignia, and Kia Sportage. Those models matter because small hatchbacks often fit city parking better, while automatic sedans can be more expensive on the same dates.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Affiliate Disclosure"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">This site uses affiliate links — a completed booking through a partner may generate a commission at no extra cost to you. The commission supports research and does not change ranking order, while direct contact details for local agencies remain informational rather than affiliate-based.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Our affiliate partners are Localrent, Auto Europe, Sunny Cars, and Booking. The site also references local operators including Staikos Rent a Car (owner Christos Bouchoutsos, since 1977), Bounos Car Rental, Makris Car Rental (since 1986), Alma Car Rental, Base Rent a Car, Euro Rent a Car (since 1986), Imperial Car Rental, Hermes Travel, Stamou Car Rental, Aspida Car Rental, G.A. Car Rental (owner Mr Gavriil), and Ride &amp; Drive.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Broker prices are published offers, not guaranteed local-agency rates — availability can change before pickup. An "Imperial" €18/day Ford Fiesta quote should be read as an unverified broker rate unless the desk confirms the same car, insurance package, and pickup date in writing.</p></WarningBox>
      </Section>

      <ImageDivider image="/3.webp" alt="Nafplio car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Consumer Protection — How to Get Help"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">If a booking or traffic issue escalates, the named Greek authorities below are the correct escalation points.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Traffic citation disputes:</strong> Tmima Trochaias Tourismou Nafpliou, Eleftherias 1-2, 21100 Nafplio, email ttournafpliou@astynomia.gr.</li>
            <li><strong>Insurance disputes:</strong> Bank of Greece, Department of Insurance Supervision, using the relevant policy and claim reference.</li>
            <li><strong>Consumer complaints:</strong> Hellenic Police and the Hellenic Consumer Ombudsman, with support from the Δήμος Ναυπλιέων where a local business issue requires municipal follow-up.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">Nafplio Car Rental also points readers to the current <a href="/driving-in-nafplio" className="text-primary underline hover:text-accent">2026 K.O.K. rules and penalties</a>, where Article 17 covers mobile phone use and Article 46 covers alcohol; old Law 2696/1999 article references are obsolete.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Contact Us"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">For editorial corrections, Nafplio Car Rental asks readers to use the <a href="/contact" className="text-primary underline hover:text-accent">Contact page</a> and include “data correction” in the subject line. The team usually replies within 2–3 business days and aims to publish verified updates within 7 days, subject to source confirmation from ELSTAT, kodiko.gr, the Bank of Greece, or the relevant ministry.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Nafplio Car Rental makes the fastest corrections when readers attach a screenshot, date, and source URL, because those three details let editors verify a claim against a named agency such as odysseus.culture.gr or the Tmima Trochaias Tourismou Nafpliou.</p></InfoBox>
      </Section>
    </Layout>
  );
};

export default AboutPage;
