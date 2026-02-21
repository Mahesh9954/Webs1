import { Phone, MapPin, Mail, Star, ArrowUp, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'contact' },
];

const services = [
  'AC Repair & Maintenance',
  'Heating System Repair',
  'HVAC Diagnostics',
  'New System Installation',
  'Indoor Air Quality',
  '24/7 Emergency Service',
];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Back to Top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-lg">Coronado Best</div>
                <div className="text-orange-400 font-semibold text-xs tracking-[0.15em]">HVAC SERVICE</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Coronado's #1 rated HVAC service provider. Delivering expert heating and cooling solutions
              with a perfect 5.0 star rating.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-slate-400 text-sm ml-2">5.0 / 5.0 (67+ reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-sm text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:6192028284" className="flex items-center gap-2.5 text-slate-400 hover:text-orange-400 transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (619) 202-8284
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Coronado, CA
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@coronadobesthvac.com
              </li>
            </ul>

            {/* CTA */}
            <a
              href="tel:6192028284"
              className="mt-5 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors w-full"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Coronado Best HVAC Service. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for the Coronado community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
