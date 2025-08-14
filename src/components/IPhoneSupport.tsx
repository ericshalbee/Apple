import React from 'react';
import { Settings, User, CloudCog, CreditCard, MessageSquare, Phone } from 'lucide-react';
import SectionContainer from './SectionContainer';

const IPhoneSupport: React.FC = () => {
  const steps = [
    {
      icon: <Settings className="h-6 w-6 text-gray-700" />,
      title: "Open Settings",
      description: "Access Settings from your home screen"
    },
    {
      icon: <User className="h-6 w-6 text-gray-700" />,
      title: "Select Apple ID",
      description: "Tap your name at the top of Settings"
    },
    {
      icon: <CloudCog className="h-6 w-6 text-gray-700" />,
      title: "Find Support Section",
      description: "Navigate to Support under Media & Purchases"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-gray-700" />,
      title: "Choose Apple Pay",
      description: "Select Apple Pay from support topics"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Start Chat",
      description: "Begin live conversation with support"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Request Call",
      description: "Schedule callback from support team"
    }
  ];

  return (
    <SectionContainer id="iphone-support" title="📱 Direct iPhone Support Access">
      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          Access Apple Pay support directly through your iPhone settings for the most efficient help experience. 
          This built-in method connects you with specialized representatives who can view your account details 
          and provide personalized assistance without lengthy verification processes. For additional contact methods, 
          see our <a href="#phone-support" className="text-blue-600 hover:underline font-medium">regional phone numbers</a> 
          or explore <a href="#official-links" className="text-blue-600 hover:underline font-medium">official support channels</a>.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-8 bottom-8 w-0.5 bg-gray-200 z-0"></div>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start relative z-10">
              <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${
                index > 3 ? 'bg-blue-50' : 'bg-gray-100'
              }`}>
                {step.icon}
              </div>
              <div className="ml-4 min-h-12 flex flex-col justify-center">
                <h3 className="text-md font-medium text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 mb-3">✅ Benefits of Device-Based Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800">
          <ul className="space-y-2">
            <li>• Immediate connection to specialized support</li>
            <li>• Skip phone queues and hold times</li>
            <li>• Automatic account authentication</li>
          </ul>
          <ul className="space-y-2">
            <li>• Global availability across time zones</li>
            <li>• Enhanced security through device verification</li>
            <li>• Instant access to account history</li>
          </ul>
        </div>
        <p className="text-green-800 mt-4">
          <strong>Efficiency Note:</strong> Device-based support typically resolves issues 40% faster than 
          traditional phone support due to automatic account verification and direct system access.
        </p>
      </div>
    </SectionContainer>
  );
};

export default IPhoneSupport;