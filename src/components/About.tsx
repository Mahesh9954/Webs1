import { Star, Zap, UserCheck, Search, MapPin, ShieldCheck, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: Star,
    title: 'Perfect 5.0 Star Rating',
    description: 'Consistently rated 5 stars by every customer. Our commitment to excellence speaks for itself.',
  },
  {
    icon: Zap,
    title: 'Same-Day Service Available',
    description: "Don't wait in discomfort. We offer same-day service to get your system back on track fast.",
  },
  {
    icon: UserCheck,
    title: 'Experienced Certified Technicians',
    description: 'Our team of licensed professionals brings years of expertise to every job, big or small.',
  },
  {
    icon: Search,
    title: 'Thorough Root-Cause Solutions',
    description: "We don't just patch problems — we find and fix the root cause so issues don't come back.",
  },
  {
    icon: MapPin,
    title: 'Local Coronado Experts',
    description: 'Proudly serving our Coronado community. We know the local climate and your unique HVAC needs.',
  },
  {
    icon: ShieldCheck,
    title: '100% Satisfaction Guarantee',
    description: "Your complete satisfaction is our priority. We stand behind every job with a full guarantee.",
  },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Stats & Visual */}
          <div className={`${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 sm:p-10 text-white overflow-hidden relative">
                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Why Coronado Trusts Us</h3>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                      <div className="text-4xl sm:text-5xl font-extrabold text-orange-400 mb-1">5.0</div>
                      <div className="flex justify-center gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <div className="text-blue-200/70 text-sm">Star Rating</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                      <div className="text-4xl sm:text-5xl font-extrabold text-orange-400 mb-1">67+</div>
                      <div className="text-blue-200/70 text-sm mt-2">Happy Customers</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                      <div className="text-4xl sm:text-5xl font-extrabold text-orange-400 mb-1">24/7</div>
                      <div className="text-blue-200/70 text-sm mt-2">Emergency Service</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                      <div className="text-4xl sm:text-5xl font-extrabold text-orange-400 mb-1">100%</div>
                      <div className="text-blue-200/70 text-sm mt-2">Satisfaction</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="tel:6192028284"
                    className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white w-full py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    Schedule Your Service Today
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Right - Features List */}
          <div className={`${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
              The Coronado HVAC Team You Can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Count On
              </span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              We're more than just technicians — we're your neighbors committed to keeping
              every Coronado home comfortable year-round.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group ${
                      isInView ? `animate-fade-in-up delay-${(index + 1) * 100}` : 'opacity-0'
                    }`}
                  >
                    <div className="w-11 h-11 bg-blue-100 group-hover:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
