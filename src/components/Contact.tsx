import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle, AlertTriangle, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const serviceAreas = [
  'Coronado', 'Imperial Beach', 'Chula Vista', 'National City',
  'San Diego (South Bay)', 'Point Loma', 'Ocean Beach', 'Pacific Beach',
];

export function Contact() {
  const { ref: emergencyRef, isInView: emergencyInView } = useInView();
  const { ref: areaRef, isInView: areaInView } = useInView();
  const { ref: contactRef, isInView: contactInView } = useInView();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\d\s()+-]{7,}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';
    if (!formData.service) newErrors.service = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }
  };

  return (
    <>
      {/* Emergency Banner */}
      <section ref={emergencyRef} className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-red-500" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${emergencyInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Emergency Service Available</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            HVAC Emergency? We're Here 24/7
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't suffer through extreme temperatures. Our emergency team is standing by to
            restore your comfort — day or night.
          </p>
          <a
            href="tel:6192028284"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-full text-xl font-extrabold hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-pulse-glow"
          >
            <Phone className="w-6 h-6" />
            (619) 202-8284
          </a>
        </div>
      </section>

      {/* Service Area */}
      <section ref={areaRef} className="py-16 lg:py-20 bg-slate-50">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${areaInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              Service Area
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
              Proudly Serving Coronado & Surrounding Areas
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Fast, reliable HVAC service throughout the Coronado peninsula and greater San Diego South Bay area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" ref={contactRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center max-w-3xl mx-auto mb-14 ${contactInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Mail className="w-4 h-4" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5">
              Ready for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
                Reliable Comfort?
              </span>
            </h2>
            <p className="text-lg text-slate-500">
              Fill out the form below or give us a call. We'll get back to you promptly!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <div className={`lg:col-span-3 ${contactInView ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-3">Request Received!</h3>
                  <p className="text-green-700 text-lg mb-6">
                    Thank you for contacting Coronado Best HVAC. We'll get back to you within 1 hour during business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400`}
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400`}
                        placeholder="(619) 555-0123"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Service */}
                  <div className="mb-5">
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.service ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 appearance-none`}
                    >
                      <option value="">Select a service...</option>
                      <option value="ac-repair">AC Repair & Maintenance</option>
                      <option value="heating">Heating System Repair</option>
                      <option value="diagnostics">HVAC Diagnostics</option>
                      <option value="installation">New System Installation</option>
                      <option value="air-quality">Indoor Air Quality</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400 resize-none"
                      placeholder="Tell us about your HVAC issue or what you need..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Request Service
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className={`lg:col-span-2 ${contactInView ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
              <div className="space-y-6">
                {/* Phone Card */}
                <a
                  href="tel:6192028284"
                  className="flex items-start gap-4 p-5 bg-orange-50 border border-orange-100 rounded-2xl hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">Call Us</div>
                    <div className="text-orange-600 font-bold text-xl">(619) 202-8284</div>
                    <div className="text-slate-500 text-sm mt-1">Tap to call · Available 24/7</div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">Location</div>
                    <div className="text-slate-600">Coronado, CA</div>
                    <div className="text-slate-500 text-sm mt-1">Serving the Coronado Peninsula & South Bay</div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">Hours</div>
                    <div className="text-slate-600">Mon–Sun: 8:00 AM – 6:00 PM</div>
                    <div className="text-orange-600 font-semibold text-sm mt-1">24/7 Emergency Service Available</div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-4 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">Email</div>
                    <div className="text-slate-600">info@coronadobesthvac.com</div>
                    <div className="text-slate-500 text-sm mt-1">We respond within 1 business hour</div>
                  </div>
                </div>

                {/* Urgency Note */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                    <span className="font-bold">Need Immediate Help?</span>
                  </div>
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-3">
                    For urgent HVAC emergencies, call us directly. We have same-day service slots available.
                  </p>
                  <a
                    href="tel:6192028284"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
