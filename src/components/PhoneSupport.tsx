import React from 'react';
import { Phone } from 'lucide-react';
import SectionContainer from './SectionContainer';

const PhoneSupport: React.FC = () => {
  return (
    <SectionContainer id="phone-support" title="📞 Apple Pay Customer Service Numbers by Region">
      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          Access regional <strong>Apple Pay customer service</strong> numbers for immediate assistance. 
          Each region provides specialized support for payment issues, billing disputes, and technical problems 
          through trained representatives familiar with local banking systems and regulations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
          <div className="mr-4 p-3 bg-blue-50 rounded-full">
            <Phone className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">United States</h3>
            <p className="text-blue-600 font-bold text-xl">1‑800‑275‑2273</p>
            <p className="text-sm text-gray-600">24/7 toll-free support line</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
          <div className="mr-4 p-3 bg-green-50 rounded-full">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Canada</h3>
            <p className="text-green-600 font-bold text-xl">1‑800‑263‑3394</p>
            <p className="text-sm text-gray-600">English and French support</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
          <div className="mr-4 p-3 bg-purple-50 rounded-full">
            <Phone className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">United Kingdom</h3>
            <p className="text-purple-600 font-bold text-xl">0800 048 0408</p>
            <p className="text-sm text-gray-600">Free UK support line</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
          <div className="mr-4 p-3 bg-orange-50 rounded-full">
            <Phone className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Australia</h3>
            <p className="text-orange-600 font-bold text-xl">133 622</p>
            <p className="text-sm text-gray-600">Local rate support number</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">🌍 International Support</h3>
          <p className="text-blue-800 mb-3">
            Additional countries have dedicated support lines available through the official Apple Support directory. 
            Regional numbers ensure you receive assistance in your local language and timezone.
          </p>
          <a 
            href="https://support.apple.com/en-us/HT201232" 
            className="text-blue-600 hover:underline inline-flex items-center font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Find Your Regional Number
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">💬 Alternative Contact Methods</h3>
          <p className="text-green-800 mb-3">
            Live chat and app-based support provide instant assistance for account issues, 
            payment problems, and technical questions without waiting on hold.
          </p>
          <a 
            href="https://getsupport.apple.com" 
            className="text-green-600 hover:underline inline-flex items-center font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Access Live Support Options
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-l-4 border-blue-500 rounded-r">
        <h3 className="font-semibold text-gray-900 mb-3">🎯 Common Support Scenarios</h3>
        <p className="text-gray-700 mb-4">
          Based on customer feedback and support ticket analysis, here are the most frequent issues 
          resolved through our <a href="#comprehensive-faqs" className="text-blue-600 hover:underline font-medium">comprehensive FAQ section</a>:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <ul className="space-y-2">
            <li>• Payment disputes and billing questions</li>
            <li>• Unauthorized transaction reports</li>
            <li>• Account verification and setup assistance</li>
          </ul>
          <ul className="space-y-2">
            <li>• Refund processing and transaction issues</li>
            <li>• Card declined errors and payment failures</li>
            <li>• Technical problems with Wallet app</li>
          </ul>
        </div>
        <p className="text-gray-700 mt-4">
          <strong>Round-the-clock availability:</strong> Regional support lines operate continuously 
          to handle urgent payment issues, security concerns, and technical difficulties.
          For detailed troubleshooting steps, visit our <a href="#iphone-support" className="text-blue-600 hover:underline font-medium">iPhone support guide</a>.
        </p>
      </div>
    </SectionContainer>
  );
};

export default PhoneSupport;