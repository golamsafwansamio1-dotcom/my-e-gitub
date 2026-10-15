import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-10 pb-6 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10 text-center md:text-left">
          
          
          <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-3">
            
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-2 py-1 rounded-lg text-sm">
                DS
              </span>
              <span className="text-xl font-bold text-slate-900">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </div>

            
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            
            <div className="flex items-center gap-3 pt-2 text-gray-700 font-medium text-sm">
              <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
              <span className="md:hidden text-gray-400">•</span>
              <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
              <span className="md:hidden text-gray-400">•</span>
              <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>

       
          <div className="hidden md:block">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3">Product</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

    
        <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;