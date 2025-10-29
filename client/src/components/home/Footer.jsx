import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-green-50 to-slate-50 mt-40 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-bold text-slate-800 text-lg">Resume Builder</span>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              Making every job application count with AI-powered resume building tools.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white hover:bg-green-50 text-gray-600 hover:text-green-600 shadow-sm transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                </svg>
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white hover:bg-green-50 text-gray-600 hover:text-green-600 shadow-sm transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white hover:bg-green-50 text-gray-600 hover:text-green-600 shadow-sm transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white hover:bg-green-50 text-gray-600 hover:text-green-600 shadow-sm transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-slate-900 font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Home</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Templates</a></li>
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h3 className="text-slate-900 font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Community</a></li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm inline-flex items-center gap-2">
                  Careers
                  <span className="text-xs text-white bg-green-600 rounded-md px-2 py-0.5 font-medium">Hiring!</span>
                </a>
              </li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">About</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-slate-900 font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-slate-900 font-semibold text-sm mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for tips and updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-green-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2025 <a href="#" className="text-green-600 hover:text-green-700 font-medium">Resume Builder</a>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-green-600 transition-colors">Status</a>
              <a href="#" className="hover:text-green-600 transition-colors">Documentation</a>
              <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer