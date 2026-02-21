import { Star, Quote, ThumbsUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reviews = [
  {
    name: 'Michael R.',
    service: 'Emergency AC Repair',
    rating: 5,
    text: "Called late at night when our AC failed during a heat wave. The technician arrived within the hour and had our system running perfectly. Incredible service — couldn't ask for a better team!",
    date: '2 weeks ago',
    initials: 'MR',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Sarah K.',
    service: 'System Inspection',
    rating: 5,
    text: 'The most thorough HVAC inspection I\'ve ever experienced. They found and fixed issues that other companies completely missed. Our system runs flawlessly now. Truly the best in Coronado!',
    date: '1 month ago',
    initials: 'SK',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'David L.',
    service: 'Heating Repair',
    rating: 5,
    text: 'Same-day correction of our furnace noise issue. The technician diagnosed the problem quickly and explained everything clearly. Professional, courteous, and fairly priced throughout.',
    date: '3 weeks ago',
    initials: 'DL',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Jennifer M.',
    service: 'New Installation',
    rating: 5,
    text: 'Installed a brand new HVAC system in our home. The team was incredibly professional, kept everything clean, and the new system is amazingly efficient. Our energy bills dropped significantly!',
    date: '1 month ago',
    initials: 'JM',
    color: 'from-violet-500 to-purple-600',
  },
];

export function Reviews() {
  const { ref, isInView } = useInView();

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Happy Customers
            </span>{' '}
            Say
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Don't just take our word for it — hear from the 67+ Coronado homeowners
            who trust us with their comfort.
          </p>
        </div>

        {/* Rating Summary */}
        <div
          className={`bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 sm:p-8 mb-12 ${
            isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-extrabold text-white">5.0</div>
                <div className="flex gap-1 mt-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="h-16 w-px bg-white/20 hidden sm:block" />
              <div>
                <div className="text-white font-bold text-lg sm:text-xl">Perfect 5-Star Rating</div>
                <div className="text-blue-200/70">Based on 67+ verified customer reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              <ThumbsUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">100% Recommended</span>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`bg-white border border-slate-100 rounded-2xl p-6 sm:p-7 hover:shadow-lg transition-all duration-300 relative group ${
                isInView ? `animate-fade-in-up delay-${(index + 2) * 100}` : 'opacity-0'
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 group-hover:text-blue-200 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">"{review.text}"</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-11 h-11 bg-gradient-to-br ${review.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-slate-400 text-sm">
                    {review.service} · {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
