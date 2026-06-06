import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AffiliateWidget from "@/components/AffiliateWidget";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import { Car, DollarSign, Plane } from "lucide-react";

const Index = () => {
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
      }
    ]
  };

  const websiteSchema =
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nafplio Car Rental",
    "url": "https://nafplio-car-rental.com"
  };

  const organizationSchema =
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nafplio Car Rental",
    "url": "https://nafplio-car-rental.com",
    "logo": "https://nafplio-car-rental.com/favicon-512x512.png",
    "description": "Independent car rental comparison guide for Nafplio. Compare deals from local and international providers.",
    "areaServed": {
      "@type": "Place",
      "name": "Nafplio"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@nafplio-car-rental.com",
      "url": "https://nafplio-car-rental.com/contact"
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Nafplio Car Rental — Compare Local Prices"
        description="Nafplio, the First Capital of Greece, sits in Argolis in the Peloponnese, 169 km from Athens International Airport (ATH). ELSTAT recorded 297,320 arrivals"
        canonical="https://nafplio-car-rental.com"
        jsonLd={[breadcrumbSchema, websiteSchema, organizationSchema]}
      />

      <HeroSection
        title="Nafplio Car Rental — Compare Local Prices, Skip Athens Traffic"
        subtitle={<><p className="text-white drop-shadow-md">Nafplio, the First Capital of Greece, sits in Argolis in the Peloponnese, 169 km from Athens International Airport (ATH). ELSTAT recorded 297,320 arrivals in 2024, and the town’s road access makes car hire the most flexible option for Mycenae, Epidaurus, Tolo, and Porto Heli.</p></>}
        image="/1.webp"
        imageAlt="Car rental in Nafplio"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <AffiliateWidget id="compare" />

      <Section
        icon={<DollarSign className="w-6 h-6" />}
        title="How Much Does a Rental Car Cost in Nafplio?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A Nafplio car rental typically starts at €18/day for a broker-listed Ford Fiesta and rises to €27/day for an automatic Skoda Octavia or €40/day for a Kia Sportage, but those prices are published broker rates and not a confirmed local-agency quote. Seasonal pricing shifts materially: Stressfreecarrental and Skyscanner commonly show €40–€43/day in April, May, September, and October, while summer demand in August can push walk-up rates above €300/day at major brands. Momondo also shows December as the cheapest month for car rental in Nafplio.</p>
          <DataTable headers={["Category", "Off-season (Nov\u2013Mar)", "High-season (Jul\u2013Aug)"]} rows={[["Mini/Economy manual", "\u20ac18\u2013\u20ac28/day", "\u20ac40\u2013\u20ac60/day"], ["Compact automatic", "\u20ac27\u2013\u20ac35/day", "\u20ac55\u2013\u20ac80/day"], ["Family SUV", "\u20ac40\u2013\u20ac55/day", "\u20ac80\u2013\u20ac120/day"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed">Insurance terms matter because quotes are often incomplete. In Greece, CDW usually carries an excess/deductible or franchise of €600–€1,200, while SCDW or FDW can reduce that to zero excess or full coverage for an extra €8–€15/day; WUG is often sold as an add-on for wheels, underside, and glass. All rentals must still include statutory third-party liability under Bank of Greece Act 195/3/29.11.2021, so a quote that omits that base cover is not compliant.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Ask each agency to confirm, in writing, whether the quote includes CDW, SCDW, FDW, WUG, and the size of the excess/deductible before you preauthorise the card. Nafplio agencies often use different wording for the same coverage, so the booking voucher should name the insurer and the franchise amount.</p></InfoBox>
      </Section>

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Where to Pick Up — Athens Airport, Nafplio Waterfront, or Cruise Pier?"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A Nafplio pickup can be faster and cheaper than an Athens one, but the right choice depends on tolls, transfer time, and your arrival point. Athens Airport to Nafplio is about 169 km and roughly 2 hours 5 minutes by car via Olympia Odos, Moreas A7, the Korinthos interchange, and the EO Argous–Nafpliou approach, with a toll range of €4.60–€7.55 depending on whether you add Spathovouni for a Nemea detour. The fuel cost at a €2.062/L benchmark puts the total one-way drive near €36–€40.</p>
          <DataTable headers={["Route element", "Value"]} rows={[["Elefsina toll", "\u20ac2.50"], ["Isthmos toll", "\u20ac2.10"], ["Spathovouni toll", "\u20ac2.95"], ["Total toll range", "\u20ac4.60\u2013\u20ac7.55"], ["Drive time Athens Airport to Nafplio", "~2 h 5 min"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>1. Athens Airport (ATH) Drive:</strong> Collecting at Athens Airport gives full route control through Elefsina, Isthmos, and the Moreas A7 corridor, but it also exposes you to Athens traffic and potential delays on Attiki Odos before the airport exit. For a more detailed route breakdown, see <a href="/nafplio-airport-car-rental/" className="text-primary underline hover:text-accent">Athens airport drive directions</a>.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If you plan a one-way pickup in Athens and a drop-off in Nafplio, confirm the rental contract allows intercity travel and that the insurance remains valid on toll motorways; the written voucher should mention CDW or FDW explicitly.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>2. KTEL Bus + Waterfront Pickup:</strong> KTEL Argolidas runs from Kifissou terminal to Syngrou 8 in Nafplio, and the waterfront office strip near Akti Miaouli, Bouboulinas, and Syngrou 8 is typically reachable on foot from the bus station in about 200 meters. A public timetable reference from KTEL Argolidas and local office postings shows services roughly every two hours from 05:00 to 21:30, with fares usually in the €11–€19 range. This option suits travelers who want to avoid Athens traffic and start the rental only after arriving in town.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> If you arrive by bus, ask for delivery to Syngrou 8 or Akti Miaouli rather than a hotel handoff, because local agencies such as Staikos Rent a Car and Bounos Car Rental are clustered on the waterfront.</p></InfoBox>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>3. Cruise Tender Port:</strong> Cruise passengers arrive by tender to the Nafplio waterfront, and the walk from the pier to Staikos on Bouboulinas or Bounos near A. Syngrou is typically 150–300 meters. Open Top Bus Hellas M.E.P.E. offers a sightseeing alternative at about €8 for adults and €5 for children on a 45-minute loop, which can be useful if your ship stay is only six hours. For short stays, a half-day rental must be negotiated directly because many Nafplio agencies do not publish half-day rates online.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Cruise schedules can compress your rental window, so confirm the exact pickup time and return deadline in writing; a late return can trigger extra day charges even when the rental is only a few hours long.</p></WarningBox>
      </Section>

      <ImageDivider image="/2.webp" alt="Nafplio car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Local Agencies vs International Brokers — Who's Who in Nafplio"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Nafplio has 12 named local agencies that regularly appear in local search results and broker fulfillment records: Staikos Rent a Car, Bounos Car Rental, Makris Car Rental, Alma Car Rental, Base Rent a Car, Euro Rent a Car, Imperial Car Rental, Hermes Travel, Stamou Car Rental, Aspida Car Rental, G.A. Car Rental, and Ride &amp; Drive. International brokers such as Auto Europe, Kayak, Booking.com, Stressfreecarrental, and Skyscanner may subcontract the vehicle to one of those operators, so the local supplier name matters on the voucher.</p>
          <CompanyCard><p><strong>Staikos Rent a Car:</strong> Staikos Rent a Car, owned by Christos Bouchoutsos, operates from the waterfront area near Bouboulinas and Syngrou 8 and is one of the longest-running Nafplio agencies, with a business history dating back to the late 1970s; its fleet commonly includes Peugeot, Citroen, Fiat, Audi, Mercedes, Ford Fiesta, Hyundai i10, and Toyota Aygo.</p></CompanyCard>
          <CompanyCard><p><strong>G.A. Car Rental:</strong> G.A. Car Rental is managed by Mr Gavriil, and local listings identify the owner-run business as one of the established Nafplio suppliers; the fleet mix commonly includes compact cars for Argolis day trips and is often used by visitors heading to Mycenae and Epidaurus.</p></CompanyCard>
          <CompanyCard><p><strong>Makris Car Rental:</strong> Makris Car Rental has operated since 1986 and keeps an office at 25is Martiou 12 plus a second branch in Nea Kios, which is useful for routes toward Tiryns and the EO Argous–Nafpliou corridor; Makris is notable for publicly advertising snow-chain rental as an extra.</p></CompanyCard>
          <CompanyCard><p><strong>Alma Car Rental:</strong> Alma Car Rental appears in local booking searches with compact Peugeot and Citroen models and is often discussed in forums alongside waterfront pickup convenience; the company is one of the local names that can be compared against broker quotes for a same-day pickup.</p></CompanyCard>
          <CompanyCard><p><strong>Base Rent a Car:</strong> Base Rent a Car, listed at nafpliorentacar.gr, is part of the local supply chain that may fulfill broker bookings and typically competes on short-stay Nafplio rentals rather than airport transfers.</p></CompanyCard>
          <CompanyCard><p><strong>Euro Rent a Car:</strong> Euro Rent a Car, operating via eurorentacar.eu since 1986, is one of the older local names and can appear in broker-fulfilled reservations for travelers arriving by bus or cruise tender.</p></CompanyCard>
          <CompanyCard><p><strong>Imperial Car Rental:</strong> Imperial Car Rental publishes broker rates such as a Ford Fiesta from €18/day, an automatic Skoda Octavia from €27/day, and a Kia Sportage from €40/day, but the published rate should be treated as an unverified broker listing unless the final voucher names a Nafplio office.</p></CompanyCard>
          <CompanyCard><p><strong>Hermes Travel:</strong> Hermes Travel is one of the local Nafplio operators that can be used for mixed transport and rental arrangements, especially when a transfer and car handoff are combined in the same booking.</p></CompanyCard>
          <CompanyCard><p><strong>Stamou Car Rental:</strong> Stamou Car Rental appears among the Nafplio fleet names and is part of the local comparison set for visitors who want to avoid airport pickup fees and use a waterfront handoff.</p></CompanyCard>
          <CompanyCard><p><strong>Aspida Car Rental:</strong> Aspida Car Rental is another local option in the Nafplio market, and its value depends on whether the booking includes a proper insurance package and a clear pickup address.</p></CompanyCard>
          <CompanyCard><p><strong>Ride &amp; Drive:</strong> Ride &amp; Drive publishes a transparent €20 surcharge for 21:00–08:00 pickups, which is useful for late ferry, late bus, or delayed flight arrivals.</p></CompanyCard>
          <InfoBox><p>💡 <strong>Tip:</strong> If you need the cleanest pickup logistics, compare the voucher address against Bouboulinas, Syngrou 8, and Akti Miaouli, because those streets place you closest to the KTEL Argolidas stop and the waterfront offices. Once you have the keys, our <a href="/nafplio-old-town-parking/" className="text-primary underline hover:text-accent">Old Town parking and plate-removal guide</a> explains where to leave the car safely.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What You Can Do With a Rental Car in 48 Hours"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Nafplio is a practical base for a 48-hour Peloponnese itinerary because the main archaeological sites in Argolis are close enough for half-day driving loops. ELSTAT visitor patterns and local tour data show that many stays are short, so distances and ticket prices matter more than generic sightseeing claims.</p>
          <DataTable headers={["Place", "Drive from Nafplio", "Ticket", "Notes"]} rows={[["Mycenae", "21 km / 29 min", "\u20ac20", "Main site, museum, Treasury of Atreus"], ["Epidaurus", "26 km / 31 min", "\u20ac20", "Theatre, sanctuary, museum"], ["Tiryns", "4 km / 10 min", "\u20ac10", "Cyclopean walls, small parking area"], ["Karathona Beach", "5 km / 10 min", "Free access", "Blue Flag withdrawn July 2025"], ["Nemea", "50 km / 50 min", "Varies", "Wine region via Moreas A7"], ["Tolo", "10 km / 15 min", "Beach access", "Family beach village"], ["Porto Heli", "76 km / 90 min", "Varies", "Ferry access toward Spetses"]]} />
          <CompanyCard><p><strong>Mycenae:</strong> The Hellenic Ministry of Culture via odysseus.culture.gr lists Mycenae as a UNESCO-linked archaeological site, and the 2026 ticket price is €20 for the main complex, museum, and Treasury of Atreus; summer hours begin at 08:00 and extend to 20:00 from 02.05.2026.</p></CompanyCard>
          <CompanyCard><p><strong>Epidaurus:</strong> The same ministry source lists Epidaurus at €20 for the theatre, sanctuary, and museum, with 08:00–20:00 summer hours and a 31-minute drive from Nafplio via the Argolis road network.</p></CompanyCard>
          <CompanyCard><p><strong>Tiryns:</strong> Tiryns sits only 4 km from Nafplio, the ticket is €10, and the parking lot is directly off the Argos–Nafplio road; the short drive makes it the easiest archaeological stop for a same-morning visit.</p></CompanyCard>
          <CompanyCard><p><strong>Karathona Beach:</strong> Karathona Beach is no longer a Blue Flag beach, because the Hellenic Society for the Protection of Nature withdrew the award in July 2025; water quality can still be good, but the certification is not current for 2026.</p></CompanyCard>
          <CompanyCard><p><strong>Nemea Wine Region:</strong> Nemea is reached in about 50 minutes through the A7 Moreas corridor, and drivers should pay attention at the Nemea exit and Spathovouni-related routing if they are combining wine tasting with motorway travel.</p></CompanyCard>
          <CompanyCard><p><strong>Tolo and Porto Heli:</strong> Tolo is a 10 km seaside village, while Porto Heli is a 76 km drive and a gateway to ferries for Spetses; both can be covered in the same rental itinerary if you start early from Nafplio.</p></CompanyCard>
          <InfoBox><p>💡 <strong>Tip:</strong> For a one-day archaeological loop, combine Mycenae and Epidaurus first, then return through Tiryns, because that sequence keeps the driving inside Argolis and limits backtracking on the EO Argous–Nafpliou road. Our full <a href="/day-trips-from-nafplio/" className="text-primary underline hover:text-accent">Mycenae and Epidaurus by-car routing</a> lays out the two-day split with ticket prices and free parking notes for each site.</p></InfoBox>
      </Section>

      <ImageDivider image="/3.webp" alt="Nafplio car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What Changed in 2026 — The New Greek Traffic Code"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Greece’s current road code is Law 5209/2025, which replaced the older K.O.K. framework on 13 September 2025 and was amended by Law 5290/2026 on 30 March 2026. The update matters to anyone driving a rental in Nafplio because traffic fines, license suspensions, and insurance consequences now follow the driver more closely than before.</p>
          <DataTable headers={["Offense", "Article", "Fine", "Additional penalty"]} rows={[["Mobile phone use while driving", "Article 17", "\u20ac350", "30-day license suspension and plate seizure"], ["Drink-driving 0.50\u20130.80 g/L BAC", "Article 46", "\u20ac350", "30-day license suspension"], ["No seatbelt", "Article 16", "\u20ac350", "30-day license suspension"], ["Speeding 30\u201350 km/h over limit", "Article 22", "\u20ac350", "30-day license and plate suspension"]]} />
          <WarningBox><p>⚠️ <strong>Warning:</strong> A BAC above 0.50 g/L can void CDW, SCDW, FDW, and any zero excess or full coverage add-on, so the renter can become personally liable for damage even when the rental contract looked comprehensive. The Hellenic Police enforce the road code, and foreign drivers can face penalties in Greece even when the car belongs to a local Nafplio agency.</p></WarningBox>
          <InfoBox><p>💡 <strong>Tip:</strong> For disputed citations in Nafplio, contact Tmima Trochaias Tourismou Nafpliou at ttournafpliou@astynomia.gr or the local police office at Eleftherias 1-2, 21100 Nafplio; keep the notice number and the rental voucher because the municipality and the police may both request them.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Why This Site"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">This site compares named Nafplio suppliers, broker rates, toll routes, local roads, and site-to-site driving times instead of generic destination copy. The data points below are the ones travelers usually need first, and each item is tied to a named source or address.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>KTEL Argolidas times and fares matter for bus-to-waterfront arrivals, especially when the pickup address is Syngrou 8 or Bouboulinas.</li>
            <li>Open Top Bus Hellas M.E.P.E. gives a fallback for short cruise calls when a half-day rental is not practical.</li>
            <li>Makris Car Rental is the only named local agency in this page that publicly advertises snow-chain rental.</li>
            <li>ELSTAT arrival data, the Hellenic Ministry of Culture, Bank of Greece rules, and the Hellenic Police road code all shape the practical rental decision.</li>
          </ul>
          <InfoBox><p>💡 <strong>Tip:</strong> If your priority is the cheapest possible pickup, compare local offices near the KTEL Argolidas stop before accepting an Athens Airport contract, because the tolls on Olympia Odos and Moreas A7 can erase a small daily-rate saving.</p></InfoBox>
      </Section>
    </Layout>
  );
};

export default Index;
