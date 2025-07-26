import React from 'react';
import { 
  Globe, 
  Database, 
  Smartphone, 
  TrendingUp, 
  Zap, 
  Megaphone, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star
} from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'contact';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites that drive engagement and conversions.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Custom CMS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'CRM Solutions',
      description: 'Streamline customer relationships with powerful CRM implementations.',
      features: ['Sales Automation', 'Customer Analytics', 'Integration Support', 'Custom Workflows'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Development', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that boost your online presence.',
      features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies for modern businesses.',
      features: ['Process Automation', 'Cloud Migration', 'Digital Strategy', 'Change Management'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Megaphone,
      title: 'Business Marketing',
      description: 'Strategic marketing solutions to grow your business and reach new audiences.',
      features: ['Brand Strategy', 'Market Research', 'Campaign Management', 'Lead Generation'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and objectives'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a tailored solution strategy'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with precision and quality'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous improvement and support'
    }
  ];

  const benefits = [
    { icon: Clock, title: 'Fast Delivery', description: 'Quick turnaround times without compromising quality' },
    { icon: Users, title: 'Expert Team', description: 'Skilled professionals with years of experience' },
    { icon: Star, title: 'Quality Assurance', description: 'Rigorous testing and quality control processes' },
    { icon: CheckCircle, title: 'Ongoing Support', description: '24/7 support and maintenance services' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to transform your business and drive sustainable growth 
            in the digital era.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <service.icon className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 transform translate-x-1/2"></div>
                )}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-slate-600">
              The advantages that set us apart from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold 
                       transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg 
                       font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;