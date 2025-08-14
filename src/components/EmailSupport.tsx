import React from 'react';
import { AlertCircle } from 'lucide-react';
import SectionContainer from './SectionContainer';

const EmailSupport: React.FC = () => {
  return (
    <SectionContainer id="email-support" title="📧 Email Support Policy and Alternatives">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-yellow-900 mb-2">Email Support Not Available</h3>
            <p className="text-yellow-800 mb-3">
              Apple doesn't provide email-based customer service for payment-related issues due to security protocols. 
              Alternative secure communication methods ensure your financial information remains protected. 
              Explore our <a href="#phone-support" className="text-blue-600 hover:underline font-medium">regional support numbers</a> 
              and <a href="#iphone-support" className="text-blue-600 hover:underline font-medium">device-based assistance</a> 
              for immediate help:
            </p>
            <div className="space-y-2 text-yellow-800">
              <p>• Phone support: Direct connection to regional support teams</p>
              <p>• Live chat: Encrypted messaging through official channels</p>
              <p>• Device support: Built-in assistance through iPhone settings</p>
            </div>
            <div className="mt-4">
              <a 
                href="https://getsupport.apple.com" 
                className="inline-block bg-yellow-600 text-white px-4 py-2 rounded font-medium hover:bg-yellow-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Secure Support Options
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3">🔒 Security-First Support Approach</h3>
        <div className="text-blue-800 space-y-3">
          <p>
            Apple prioritizes customer security and privacy by using authenticated communication channels 
            that protect financial information and prevent unauthorized access to account details.
          </p>
          <p>
            <strong>Protected communication:</strong> Phone support, live chat, and device-based assistance 
            use encryption and multi-factor authentication to safeguard your payment account information.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default EmailSupport;