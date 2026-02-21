import { Snowflake, Flame, Wrench, Settings, Wind, Siren, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Snowflake,
    title: 'AC Repair & Maintenance',
    description:
      'Expert air conditioning repair, tune-ups, and preventive maintenance to keep your home cool and comfortable all summer long.',
    color: 'from-cyan-500 to-blue-600',
    bgLight: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
  {
    icon: Flame,
    title: 'Heating System Repair',
    description:
      'Professional furnace and heating system repair services. We diagnose and fix all types of heating issues quickly and efficiently.',
    color: 'from-orange-500 to-red-500',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    icon: Wrench,
    title: 'HVAC Diagnostics',
    description:
      'Comprehensive system diagnostics using advanced tools to identify root causes and prevent future breakdowns.',
    color: 'from-slate-600 to-slate-800',
    bgLight: 'bg-slate-50',
    textColor: 'text-slate-600',
  },
  {
    icon: Settings,
    title: 'New System Installation',
    description:
      'Professional installation of energy-efficient HVAC systems. We help you choose the perfect system for your home and budget.',
    color: 'from-blue-600 to-indigo-700',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description:
      'Improve your home\'s air quality with advanced filtration, purification, and ventilation solutions for healthier living.',
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    icon: Siren,
    title: '24/7 Emergency Service',
    description:
      'HVAC emergency? We\'re available around the clock. Fast response times to get your system back up and running.',
    color: 'from-red-500 to-rose-600',
    bgLight: 'bg-red-50',
    textColor: 'text-red-600',
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5">
            Complete HVAC Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
              Your Comfort
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            From routine maintenance to emergency repairs, our certified technicians deliver
            expert solutions for all your heating and cooling needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delayClass = `delay-${(index + 1) * 100}`;
            return (
              <div
                key={service.title}
                className={`group relative bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  isInView ? `animate-fade-in-up ${delayClass}` : 'opacity-0'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.bgLight} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${service.textColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-5 text-[15px]">{service.description}</p>

                {/* Link */}
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  className={`inline-flex items-center gap-1.5 ${service.textColor} font-semibold text-sm group-hover:gap-2.5 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Hover gradient top border */}
                <div
                  className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
