import { Phone, Calendar, Shield, Clock, Award, Star } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm0-40c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zM10 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm0-40c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Decorative blurs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-10 left-1/3 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">5.0 Rating · 67+ Reviews</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up">
              Coronado's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                #1 Rated
              </span>{' '}
              HVAC Service
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
              Expert heating & cooling solutions backed by a perfect 5-star rating.
              Same-day service available with 24/7 emergency support for your comfort.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
              <a
                href="tel:6192028284"
                className="inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 animate-pulse-glow"
              >
                <Phone className="w-5 h-5" />
                Call Now: (619) 202-8284
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/25 hover:border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Request Service
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in-up delay-500">
              {[
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: Clock, text: '24/7 Emergency Service' },
                { icon: Award, text: '100% Satisfaction' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
                >
                  <Icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-white/90 font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Decorative HVAC Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main circle */}
              <div className="w-80 h-80 xl:w-96 xl:h-96 bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center animate-float">
                <div className="w-60 h-60 xl:w-72 xl:h-72 bg-white/[0.05] border border-white/10 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl xl:text-8xl font-black text-white mb-1">5.0</div>
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <div className="text-blue-200/70 font-medium text-sm">Perfect Rating</div>
                    <div className="text-blue-200/50 text-xs mt-1">from 67+ customers</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-fade-in delay-700">
                Same-Day Service
              </div>
              <div className="absolute -bottom-2 -left-6 bg-white text-blue-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-fade-in delay-800">
                24/7 Available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
