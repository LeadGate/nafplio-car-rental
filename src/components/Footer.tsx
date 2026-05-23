import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Athens Airport", path: "/nafplio-airport-car-rental" },
  { label: "Driving Rules", path: "/driving-in-nafplio" },
  { label: "Parking", path: "/nafplio-old-town-parking" },
  { label: "Day Trips", path: "/day-trips-from-nafplio" },
  { label: "FAQ", path: "/nafplio-car-rental-faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
];

const Footer = () => (
  <footer className="py-12" style={{ backgroundColor: "hsl(var(--footer-bg))", color: "hsl(var(--footer-foreground))" }}>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Left — Brand */}
        <div>
          <Link to="/" className="text-xl font-bold no-underline" style={{ color: "hsl(var(--footer-foreground))" }}>
            Nafplio Car Rental
          </Link>
          <p className="text-sm mt-3 opacity-70">
            <a href="mailto:info@nafplio-car-rental.com" className="no-underline hover:opacity-100 transition-opacity" style={{ color: "hsl(var(--footer-foreground))" }}>
              info@nafplio-car-rental.com
            </a>
          </p>
        </div>

        {/* Center — Quick Links */}
        <div>
          <h3 className="uppercase tracking-wider mb-4 font-semibold" style={{ color: "hsl(var(--footer-foreground))", fontSize: "13px" }}>Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm no-underline opacity-70 hover:opacity-100" style={{ color: "hsl(var(--footer-foreground))" }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Partners */}
        <div>
          <h3 className="uppercase tracking-wider mb-4 font-semibold" style={{ color: "hsl(var(--footer-foreground))", fontSize: "13px" }}>Trusted Partners & Resources</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://nafplio.gr/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100" style={{ color: "hsl(var(--footer-foreground))" }}>
                Δήμος Ναυπλιέων (Municipality)
              </a>
            </li>
            <li>
              <a href="https://ktelargolida.gr/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100" style={{ color: "hsl(var(--footer-foreground))" }}>
                KTEL Argolidas (Bus)
              </a>
            </li>
            <li>
              <a href="https://www.olympiaodos.gr/en/tolls/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100" style={{ color: "hsl(var(--footer-foreground))" }}>
                Olympia Odos Tolls
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar — order top-to-bottom: disclosure, last-updated, copyright (ABSOLUTE LAST per rule #131) */}
      <div className="border-t pt-6 text-center text-xs opacity-60" style={{ borderColor: "hsl(var(--footer-foreground) / 0.2)" }}>
        <p className="m-0 opacity-70">
          Affiliate disclosure: This site contains affiliate links. When you book through our links, we may earn a small commission at no extra cost to you.
        </p>
        <p className="mt-2 opacity-50 text-xs">Last updated: May 2026</p>
        <p className="mt-3 m-0">
          &copy; {new Date().getFullYear()} nafplio-car-rental.com &middot; All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
