import React from 'react';
import { Apple } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Apple className="h-8 w-8" />
              <span className="ml-2 text-lg font-medium">Apple Pay Support</span>
            </div>
            <p className="text-sm text-gray-600">
              Get help with Apple Pay services, troubleshooting, and contact information.
            </p>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Apple Pay Services</h3>
              <ul className="space-y-3">
                <li><a href="/apple-cash-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Cash Support</a></li>
                <li><a href="/apple-card-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Card Support</a></li>
                <li><a href="/apple-wallet-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Wallet Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support Resources</h3>
              <ul className="space-y-3">
                <li><a href="#phone-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Phone Support</a></li>
                <li><a href="#comprehensive-faqs" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">FAQ Database</a></li>
                <li><a href="#official-links" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Official Links</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Official Apple</h3>
              <ul className="space-y-3">
                <li><a href="https://support.apple.com/apple-pay" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Pay Support</a></li>
                <li><a href="https://support.apple.com/apple-cash" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Cash Help</a></li>
                <li><a href="https://support.apple.com/wallet" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Wallet Help</a></li>
                <li><a href="https://www.apple.com/apple-card/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Card Info</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-3">Site Resources</h4>
              <ul className="space-y-2">
                <li><a href="/sitemap.xml" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Sitemap</a></li>
                <li><a href="#iphone-support" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">iPhone Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-3">Apple Legal</h4>
              <ul className="space-y-2">
                <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="https://www.apple.com/legal/internet-services/terms/site.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-3">Apple Services</h4>
              <ul className="space-y-2">
                <li><a href="https://www.apple.com/apple-pay/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Apple Pay</a></li>
                <li><a href="https://www.apple.com/apple-cash/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Apple Cash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-3">Follow Apple</h4>
              <ul className="space-y-2">
                <li><a href="https://twitter.com/AppleSupport" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">@AppleSupport</a></li>
                <li><a href="https://www.facebook.com/apple" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Apple Facebook</a></li>
                <li><a href="https://www.youtube.com/user/Apple" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Apple YouTube</a></li>
                <li><a href="https://www.instagram.com/apple/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Apple Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-3">System Status</h4>
              <ul className="space-y-2">
                <li><a href="https://www.apple.com/support/systemstatus/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Apple System Status</a></li>
                <li><a href="https://getsupport.apple.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Get Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Connect with Apple</h4>
            <div className="flex space-x-6">
              <a href="https://twitter.com/AppleSupport" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Follow Apple Support on Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/apple" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Follow Apple on Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/user/Apple" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Subscribe to Apple on YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/apple/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Follow Apple on Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447c0-1.297.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297c1.297 0 2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323c0 1.297-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.605c-.49 0-.875-.385-.875-.875s.385-.875.875-.875s.875.385.875.875s-.385.875-.875.875zm-4.262 1.26c-1.297 0-2.345 1.048-2.345 2.345s1.048 2.345 2.345 2.345s2.345-1.048 2.345-2.345s-1.048-2.345-2.345-2.345z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Apple Pay Support. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            This is an unofficial support resource. Apple, Apple Pay, Apple Card, Apple Cash, and Apple Wallet are trademarks of Apple Inc.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;