import React from 'react';
import { Link, MessageCircle, Activity, User } from 'lucide-react';
import SectionContainer from './SectionContainer';

const OfficialLinks: React.FC = () => {
  const links = [
    {
      title: "Apple Pay Help Center",
      url: "https://support.apple.com/apple-pay",
      icon: <Link className="h-5 w-5 text-blue-600" />,
      description: "Complete documentation and troubleshooting guides"
    },
    {
      title: "Start Chat / Call Now",
      url: "https://getsupport.apple.com",
      icon: <MessageCircle className="h-5 w-5 text-blue-600" />,
      description: "Connect directly with Apple support"
    },
    {
      title: "Apple System Status",
      url: "https://www.apple.com/support/systemstatus/",
      icon: <Activity className="h-5 w-5 text-blue-600" />,
      description: "Check if Apple Pay services are experiencing issues"
    },
    {
      title: "Apple ID and Wallet Support",
      url: "https://support.apple.com/apple-id",
      icon: <User className="h-5 w-5 text-blue-600" />,
      description: "Get help with your Apple ID and Apple Wallet"
    }
  ];

  return (
    <SectionContainer id="official-links" title="🌐 Official Apple Support Resources">
      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          Access verified Apple support resources for comprehensive assistance with payment issues, 
          account management, and technical problems. These official channels connect you directly 
          with Apple's support infrastructure for reliable help. Combine these resources with our 
          <a href="#comprehensive-faqs" className="text-blue-600 hover:underline font-medium ml-1">detailed FAQ section</a> 
          for complete problem resolution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start group"
          >
            <div className="mr-4 mt-1 p-2 bg-blue-50 rounded-full">
              {link.icon}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{link.description}</p>
            </div>
            <svg 
              className="ml-auto w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        ))}
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3">🎯 Support Method Selection Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-900 mb-2">For Urgent Issues:</h4>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Fraud and security concerns - Call immediately</li>
              <li>• Billing disputes and payment issues - Phone support</li>
              <li>• Transaction disputes - Live chat or phone</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 mb-2">For General Help:</h4>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Account questions - Online chat support</li>
              <li>• Setup assistance - Live chat options</li>
              <li>• iPhone Settings support - Device-based help</li>
            </ul>
          </div>
        </div>
        <p className="text-blue-800 mt-4">
          <strong>Note:</strong> All support channels connect to the same specialized team. 
          Select the method that best fits your schedule and issue complexity.
        </p>
      </div>
    </SectionContainer>
  );
};

export default OfficialLinks;