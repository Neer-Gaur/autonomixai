"use client";
import { useState } from 'react';
import { Calendar, Check } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    hearAbout: '',
    productGoals: '',
    services: [],
    mobileNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      const whatsappText = [
        `*New Inquiry for Autonomix AI*`,
        `*Full Name*: ${formData.fullName}`,
        `*Email*: ${formData.email}`,
        `*Mobile Number*: ${formData.mobileNumber || "N/A"}`,
        `*Heard About Us*: ${formData.hearAbout || "N/A"}`,
        `*Services*: ${formData.services.length ? formData.services.join(", ") : "N/A"}`,
        ``,
        `*Product Goals*:`,
        formData.productGoals || "N/A"
      ].join("\n");

      const whatsappUrl = `https://wa.me/917496976144?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');
      
      // Clear form after successful submission
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        hearAbout: '',
        productGoals: '',
        services: []
      });

      alert('Opening WhatsApp to send your inquiry...');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const services = [
    'UI/UX Design',
    'SaaS Design', 
    'Branding',
    'CRO',
    'Mobile app',
    'Development',
    'MVP Development',
    'Web Design'
  ];

  return (
    <div className=" min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-[20vh]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Got an Project?
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 leading-tight">
                Lets talk!
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 text-lg">NDA? Absolutely just ask.</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Well respond in 24 hours - fast & focused.</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Work with senior UX experts</span>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Schedule a call:</h2>
              
              <div className="flex flex-col space-y-6">
             

                <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Book a quick discussion call</h4>
                      <p className="text-gray-600 text-sm">Let&apos;s discuss your project</p>
                    </div>
                  </div>
                  <a 
                    href="https://cal.com/adityaarya" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    Schedule Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all text-gray-500 bg-white text-lowercase"
                  />
                </div>
                {/* <div>
                  <select
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all text-gray-500 bg-white"
                  >
                    <option className='bg-zinc-900 text-white' value="">Project budget</option>
                    <option className='bg-zinc-900 text-white' value="<10k">Less than $10,000</option>
                    <option className='bg-zinc-900 text-white' value="10k-50k">$10,000 - $50,000</option>
                    <option className='bg-zinc-900 text-white' value="50k-100k">$50,000 - $100,000</option>
                    <option className='bg-zinc-900 text-white' value=">100k">More than $100,000</option>
                  </select>
                </div> */}
                
                <div>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all text-gray-500 bg-white"
                  >
                    <option className='bg-zinc-900 text-white' value="">How did you hear about us?</option>
                    <option className='bg-zinc-900 text-white' value="google">Google Search</option>
                    <option className='bg-zinc-900 text-white' value="referral">Referral</option>
                    <option className='bg-zinc-900 text-white' value="social">Social Media</option>
                    <option className='bg-zinc-900 text-white' value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="productGoals"
                  placeholder="Tell us about your product and goals"
                  value={formData.productGoals}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">How can we help you?</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        formData.services.includes(service)
                          ? 'bg-zinc-50 border-zinc-900 text-zinc-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-zinc-700 transition-colors mb-4 sm:mb-0"
                >
                  Send inquiry
                </button>
                
                <div className="text-center sm:text-right">
                  <p className="text-gray-500 text-sm mb-1">Prefer email?</p>
                  <a 
                    href="mailto:hello@wavespaceagency"
                    className="text-gray-900 font-medium underline text-lowercase hover:text-zinc-600 transition-colors"
                  >
                    support@autonomixai.in
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}