import React, { useState } from 'react';
import { 
  Ghost, 
  Shield, 
  Zap, 
  Globe, 
  Phone, 
  MessageSquare, 
  UserX, 
  Calendar,
  Code,
  Mail,
  Eye,
  Twitter,
  Github,
  ExternalLink
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Ghost className="w-20 h-20 text-indigo-400" />
                <div className="absolute -inset-4 bg-indigo-400/20 rounded-full blur-xl"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get a Disposable Phone Number in Seconds
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Protect your privacy. Receive SMS without using your real number.
            </p>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Get Early Access
                </button>
              </form>
              {isSubmitted && (
                <p className="mt-4 text-green-400 font-medium">Thanks! We'll notify you when we launch.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose a Number</h3>
              <p className="text-gray-400">Select from our global pool of available phone numbers instantly</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive SMS Instantly</h3>
              <p className="text-gray-400">Get your verification codes and messages in real-time</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <UserX className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stay Anonymous</h3>
              <p className="text-gray-400">Your real number stays private and protected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why GhostDigits */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why GhostDigits</h2>
            <p className="text-xl text-gray-400">The privacy-first choice for anonymous communication</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Signup Required</h3>
              <p className="text-gray-400">Start using immediately without personal information</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Phone Numbers</h3>
              <p className="text-gray-400">Access numbers from countries worldwide</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Free & Fast</h3>
              <p className="text-gray-400">Instant access with lightning-fast SMS delivery</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200">
              <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Built for Privacy</h3>
              <p className="text-gray-400">No tracking, no data collection, no compromises</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Features */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-400">More privacy tools in development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-200 border border-gray-700">
              <Calendar className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Rent-a-Number</h3>
              <p className="text-gray-400">Get a private 7-day phone line for important signups and services</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-200 border border-gray-700">
              <Code className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">SMS API</h3>
              <p className="text-gray-400">Integrate disposable numbers into your applications with our developer API</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-200 border border-gray-700">
              <Mail className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Anonymous Email</h3>
              <p className="text-gray-400">Disposable email aliases to complete your privacy toolkit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email Signup CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Be the First to Try It</h2>
            <p className="text-xl mb-8 text-indigo-100">Join our waitlist and get early access when we launch</p>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 text-white placeholder-white/60"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Join Waitlist
                </button>
              </form>
              <p className="mt-4 text-sm text-indigo-200">We'll only notify you about the launch. No spam, ever.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Ghost className="w-8 h-8 text-indigo-400 mr-3" />
              <span className="text-2xl font-bold">GhostDigits</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms</a>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex items-center justify-center text-gray-400">
              <ExternalLink className="w-4 h-4 mr-2" />
              <span>Coming to Product Hunt soon</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;