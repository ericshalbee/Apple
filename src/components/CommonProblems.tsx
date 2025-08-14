import React, { useState } from 'react';
import SectionContainer from './SectionContainer';

interface Problem {
  problem: string;
  solution: string;
  category?: string;
}

const CommonProblems: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const comprehensiveFAQs: Problem[] = [
    // General Support (1-10)
    {
      problem: "What is the Apple Pay customer service phone number?",
      solution: "Apple Pay does not have a single universal number — it's part of Apple Support. You can find the correct phone number for your region on the official Apple Support website or in the Apple Support app. USA: 1-800-275-2273, Canada: 1-800-263-3394, UK: 0800 048 0408, Australia: 133-622.",
      category: "general"
    },
    {
      problem: "How do I contact Apple Pay support from my iPhone?",
      solution: "Open the Wallet app, select the card or payment method, tap the More (…) button, and choose Contact Apple Support. You can call, chat, or schedule a callback.",
      category: "general"
    },
    {
      problem: "Is Apple Pay customer service available 24/7?",
      solution: "Yes, in most regions Apple Support for Apple Pay operates 24 hours a day, 7 days a week, for both phone and chat assistance.",
      category: "general"
    },
    {
      problem: "Can I call Apple Pay from outside the USA?",
      solution: "Yes. Visit Apple's regional contact page, select your country, and dial the listed number. International rates may apply unless a toll-free option is available.",
      category: "general"
    },
    {
      problem: "How do I access Apple Pay live chat support?",
      solution: "Go to support.apple.com, select Apple Pay, choose your issue, and click Chat. You can also start chat support through the Apple Support app.",
      category: "general"
    },
    {
      problem: "What is the best way to contact Apple Pay for help?",
      solution: "The quickest way is via the Apple Support app or Wallet app on your device. This routes your request directly to the right team.",
      category: "general"
    },
    {
      problem: "Does Apple Pay offer toll-free customer support numbers?",
      solution: "Yes. In many countries, Apple provides toll-free support numbers for Apple Pay. Check the Apple Support contact page for your region.",
      category: "general"
    },
    {
      problem: "How can I email Apple Pay customer care?",
      solution: "Apple Pay does not provide a public customer service email. Use the official Apple Support channels such as phone, chat, or the Apple Support app.",
      category: "general"
    },
    {
      problem: "Where do I find the Apple Pay help desk for my country?",
      solution: "Visit support.apple.com/en-us/HT201232 and select your country to see local Apple Pay help desk contact options.",
      category: "general"
    },
    {
      problem: "Can I contact Apple Pay through social media?",
      solution: "Yes, Apple Support is active on Twitter (@AppleSupport) and can respond to Apple Pay questions. However, sensitive account details should only be shared through secure channels.",
      category: "general"
    },
    
    // Location-Specific Support (11-20)
    {
      problem: "What is the Apple Pay support number in the USA?",
      solution: "In the USA, call Apple Support via 1-800-MY-APPLE (1-800-692-7753) for Apple Pay assistance.",
      category: "location"
    },
    {
      problem: "How do I call Apple Pay in the UK?",
      solution: "UK customers can contact Apple Pay via 0800 048 0408, available Monday to Sunday.",
      category: "location"
    },
    {
      problem: "What is the Apple Pay customer care number for Canada?",
      solution: "In Canada, call 1-800-263-3394 to reach Apple Pay support.",
      category: "location"
    },
    {
      problem: "How to contact Apple Pay help desk in Australia?",
      solution: "Australian users can call 133-622 for Apple Pay assistance.",
      category: "location"
    },
    {
      problem: "Does Apple Pay have a different phone number for Europe?",
      solution: "Yes, each European country has its own Apple Pay support number listed on the Apple Support website.",
      category: "location"
    },
    {
      problem: "How to reach Apple Pay customer service in Asia?",
      solution: "Apple Pay contact numbers for Asian countries are available on the regional Apple Support page.",
      category: "location"
    },
    {
      problem: "Is there a special Apple Pay support line for India?",
      solution: "Currently, Apple Pay is not widely available in India, but you can call 000-800-100-9009 for general Apple support.",
      category: "location"
    },
    {
      problem: "Does Apple Pay provide multilingual phone support?",
      solution: "Yes, Apple Pay support is available in multiple languages depending on the region.",
      category: "location"
    },
    {
      problem: "How can I contact Apple Pay in my local time zone?",
      solution: "Use the Apple Support website to find your regional number and local business hours.",
      category: "location"
    },
    {
      problem: "Is there an Apple Pay contact number for Latin America?",
      solution: "Yes, Apple provides local or toll-free numbers for supported Latin American countries via its contact page.",
      category: "location"
    },
    
    // Problem-Specific Support (21-30)
    {
      problem: "How do I report a fraudulent transaction on Apple Pay?",
      solution: "Call Apple Support immediately, open the Wallet app, select the affected card, and follow the fraud-reporting instructions.",
      category: "problems"
    },
    {
      problem: "Who do I call for Apple Pay refund support?",
      solution: "Contact the merchant first; if unresolved, call Apple Pay support via Apple Support channels.",
      category: "problems"
    },
    {
      problem: "How do I dispute an Apple Pay charge?",
      solution: "Open the Wallet app, select the transaction, tap Report an Issue, and follow the dispute process.",
      category: "problems"
    },
    {
      problem: "What is the Apple Pay fraud support number?",
      solution: "Fraud support is handled through Apple's main customer service line for your region.",
      category: "problems"
    },
    {
      problem: "How to fix a card declined error in Apple Pay?",
      solution: "Check your card details in the Wallet app, ensure your bank supports Apple Pay, and contact your bank or Apple Pay support.",
      category: "problems"
    },
    {
      problem: "Who can help if my Apple Pay account verification fails?",
      solution: "Contact your bank first; if the issue persists, reach Apple Pay support for troubleshooting.",
      category: "problems"
    },
    {
      problem: "How do I resolve Apple Pay payment processing errors?",
      solution: "Restart your device, ensure you have internet access, and contact Apple Pay support if errors continue.",
      category: "problems"
    },
    {
      problem: "How to contact Apple Pay for billing issues?",
      solution: "Call Apple Support or use the Apple Support app to connect with billing assistance.",
      category: "problems"
    },
    {
      problem: "Can Apple Pay help if I sent money to the wrong person?",
      solution: "If the payment is pending, you can cancel it in the Wallet app. Otherwise, contact Apple Pay support immediately.",
      category: "problems"
    },
    {
      problem: "How do I get technical support for Apple Pay glitches?",
      solution: "Use the Apple Support app, live chat, or call to report technical issues.",
      category: "problems"
    },
    
    // Merchant & Business Support (31-40)
    {
      problem: "How do I contact Apple Pay merchant support?",
      solution: "Go to apple.com/apple-pay/merchant/ for business-specific help or call Apple's merchant support number.",
      category: "merchant"
    },
    {
      problem: "Is there a phone number for Apple Pay business accounts?",
      solution: "Yes, Apple Pay has dedicated merchant support lines per region listed on Apple's website.",
      category: "merchant"
    },
    {
      problem: "How do I get Apple Pay integration support?",
      solution: "Visit Apple's merchant support page and request technical integration help.",
      category: "merchant"
    },
    {
      problem: "How to resolve Apple Pay payment issues as a merchant?",
      solution: "Contact your payment processor first; if the issue remains, contact Apple Pay merchant support.",
      category: "merchant"
    },
    {
      problem: "Can I call Apple Pay for transaction disputes with customers?",
      solution: "Yes, Apple merchant support can assist with certain transaction disputes.",
      category: "merchant"
    },
    {
      problem: "Does Apple Pay offer priority merchant support lines?",
      solution: "Yes, some regions offer dedicated priority lines for merchants.",
      category: "merchant"
    },
    {
      problem: "How do I request a refund on behalf of a customer via Apple Pay?",
      solution: "Initiate the refund through your payment processor and confirm with Apple Pay merchant support if needed.",
      category: "merchant"
    },
    {
      problem: "Can I contact Apple Pay for terminal setup assistance?",
      solution: "Yes, merchant support can help with compatible terminal setup.",
      category: "merchant"
    },
    {
      problem: "How do I check the status of an Apple Pay merchant application?",
      solution: "Contact Apple's merchant support team or your payment provider.",
      category: "merchant"
    },
    {
      problem: "What is the Apple Pay help desk number for retail stores?",
      solution: "This varies by country; check the Apple merchant support contact list.",
      category: "merchant"
    },
    
    // Additional Questions (41-50)
    {
      problem: "Can Apple Pay customer service reset my account?",
      solution: "They can assist in verifying your account and guiding you through reset steps, but full resets may require bank involvement.",
      category: "additional"
    },
    {
      problem: "How do I request a callback from Apple Pay?",
      solution: "Use the Apple Support app or website to schedule a callback.",
      category: "additional"
    },
    {
      problem: "What information do I need before calling Apple Pay support?",
      solution: "Have your Apple ID, device details, card information, and recent transaction details ready.",
      category: "additional"
    },
    {
      problem: "Does Apple Pay have a dedicated number for complaints?",
      solution: "No dedicated complaint number, but customer support can handle complaints via the standard support line.",
      category: "additional"
    },
    {
      problem: "How can I speak to a live person at Apple Pay quickly?",
      solution: "Call the regional Apple Support number and follow the prompts for Apple Pay.",
      category: "additional"
    },
    {
      problem: "Is there a way to track my Apple Pay support ticket?",
      solution: "Yes, you can track tickets through the Apple Support app or via email updates.",
      category: "additional"
    },
    {
      problem: "How long does Apple Pay take to resolve disputes?",
      solution: "Resolution times vary from 3–10 business days depending on the issue.",
      category: "additional"
    },
    {
      problem: "Can Apple Pay support help me with Wallet app issues?",
      solution: "Yes, Apple Pay and Wallet support are handled together.",
      category: "additional"
    },
    {
      problem: "How do I find the official Apple Pay customer support website?",
      solution: "Visit support.apple.com/apple-pay for official help resources.",
      category: "additional"
    },
    {
      problem: "Can Apple Pay assist with updating my payment methods?",
      solution: "Yes, they can guide you in adding, removing, or updating cards in the Wallet app.",
      category: "additional"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Questions (50)', count: 50 },
    { key: 'general', label: 'General Support (1-10)', count: 10 },
    { key: 'location', label: 'Location-Specific (11-20)', count: 10 },
    { key: 'problems', label: 'Problem-Specific (21-30)', count: 10 },
    { key: 'merchant', label: 'Merchant Support (31-40)', count: 10 },
    { key: 'additional', label: 'Additional Help (41-50)', count: 10 }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? comprehensiveFAQs 
    : comprehensiveFAQs.filter(faq => faq.category === selectedCategory);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <SectionContainer id="comprehensive-faqs" title="📋 Apple Pay Support FAQ - Complete Question Database">
      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          Access detailed answers to the most frequently asked Apple Pay questions. This comprehensive database 
          covers regional support numbers, problem resolution steps, merchant assistance, and contact methods 
          to help you resolve issues quickly and effectively. For immediate assistance, check our 
          <a href="#phone-support" className="text-blue-600 hover:underline font-medium ml-1">24/7 phone support</a> 
          or use <a href="#iphone-support" className="text-blue-600 hover:underline font-medium">device-based support</a>.
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category:</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setSelectedCategory(category.key);
                setExpandedIndex(null);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredFAQs.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full px-6 py-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
            >
              <span>{item.problem}</span>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedIndex === index ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              className={`px-6 py-4 border-t border-gray-200 bg-gray-50 transition-all duration-200 ${
                expandedIndex === index ? 'block' : 'hidden'
              }`}
            >
              <p className="text-gray-700">{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3">🚨 Need Additional Assistance?</h3>
        <p className="text-blue-800 mb-4">
          When FAQ answers don't resolve your specific situation, direct support channels provide 
          personalized assistance from trained specialists familiar with your account and region.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <h4 className="font-medium text-blue-900 mb-2">📞 Phone Support</h4>
            <p className="text-sm text-blue-700">24/7 regional support numbers</p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-blue-900 mb-2">💬 Live Chat</h4>
            <p className="text-sm text-blue-700">Instant messaging support</p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-blue-900 mb-2">📱 Device Support</h4>
            <p className="text-sm text-blue-700">Built-in iPhone assistance</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a 
            href="https://getsupport.apple.com" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access Direct Support
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CommonProblems;