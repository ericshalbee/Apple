import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CreditCard, AlertTriangle, CheckCircle, ArrowLeft, Shield, Clock, Globe, Lock, DollarSign, Users, Smartphone, Bell, FileText, HelpCircle, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionContainer from '../components/SectionContainer';
import SEOHead from '../components/SEOHead';

const AppleCardSupport: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // Schema markup for Apple Card support page
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Apple Card Customer Service: 24/7 Support Help Guide",
    "description": "Need help with Apple Card? Learn how to contact Apple Card support, dispute charges, manage billing, and get account help.",
    "url": "https://iphonesupport.netlify.app/apple-card-support",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://iphonesupport.netlify.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Apple Card Support",
          "item": "https://iphonesupport.netlify.app/apple-card-support"
        }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Apple Card and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apple Card is a credit card created by Apple in partnership with Goldman Sachs, designed to work seamlessly with Apple Pay and the Wallet app."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact Apple Card customer service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the Wallet app, Apple Support app, or call Goldman Sachs at 1-877-255-5923 for Apple Card assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Is Apple Card customer service available 24/7?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Apple Card support through Goldman Sachs is available 24 hours a day, 7 days a week."
          }
        }
      ]
    },
    "about": {
      "@type": "Service",
      "name": "Apple Card",
      "description": "Credit card service for iPhone users",
      "provider": {
        "@type": "Organization",
        "name": "Apple Inc."
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "US"
    },
    "areaServed": "US",
    "availableLanguage": "English"
  };

  // FinancialProduct Schema
  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Apple Card",
    "description": "Credit card with Daily Cash rewards and no fees",
    "provider": {
      "@type": "Organization",
      "name": "Goldman Sachs",
      "sameAs": "https://www.goldmansachs.com/"
    },
    "areaServed": "US",
    "eligibleRegion": "US",
    "feesAndCommissionsSpecification": "No annual fees, no cash advance fees, no over-limit fees"
  };

  // HowTo Schema for Dispute Process
  const howToDisputeSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Dispute an Apple Card Charge",
    "description": "Step-by-step guide to dispute charges on your Apple Card",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open Wallet App",
        "text": "Open the Wallet app and tap your Apple Card"
      },
      {
        "@type": "HowToStep",
        "name": "Find Transaction",
        "text": "Locate the transaction you want to dispute"
      },
      {
        "@type": "HowToStep",
        "name": "Report Issue",
        "text": "Tap the transaction and select 'Report an Issue'"
      },
      {
        "@type": "HowToStep",
        "name": "Follow Instructions",
        "text": "Follow the on-screen instructions to complete your dispute"
      }
    ]
  };

  // Enhanced ContactPoint Schema
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "Apple Card customer service",
    "telephone": "+1-877-255-5923",
    "areaServed": "US",
    "availableLanguage": "English",
    "hoursAvailable": "Mo-Su 00:00-23:59",
    "serviceType": "Credit Card Support"
  };

  const faqCategories = [
    { key: 'all', label: 'All Questions (50)', count: 50 },
    { key: 'general', label: 'General Support (1-10)', count: 10 },
    { key: 'application', label: 'Application & Setup (11-20)', count: 10 },
    { key: 'billing', label: 'Billing & Payments (21-30)', count: 10 },
    { key: 'disputes', label: 'Disputes & Issues (31-40)', count: 10 },
    { key: 'rewards', label: 'Rewards & Benefits (41-50)', count: 10 }
  ];

  const comprehensiveFAQs = [
    // General Support (1-10)
    {
      question: "What is Apple Card and how does it work?",
      answer: "Apple Card is a credit card created by Apple in partnership with Goldman Sachs, designed to work seamlessly with Apple Pay and the Wallet app.",
      category: "general"
    },
    {
      question: "How do I contact Apple Card customer service?",
      answer: "Use the Wallet app, Apple Support app, or call Goldman Sachs at 1-877-255-5923 for Apple Card assistance.",
      category: "general"
    },
    {
      question: "Is Apple Card customer service available 24/7?",
      answer: "Yes, Apple Card support through Goldman Sachs is available 24 hours a day, 7 days a week.",
      category: "general"
    },
    {
      question: "Can I chat with Apple Card support?",
      answer: "Yes, you can chat with Apple Card support through the Wallet app or Apple Support app.",
      category: "general"
    },
    {
      question: "What is the Apple Card customer service phone number?",
      answer: "The Apple Card customer service number is 1-877-255-5923, operated by Goldman Sachs.",
      category: "general"
    },
    {
      question: "How do I access Apple Card help from my iPhone?",
      answer: "Open the Wallet app, tap your Apple Card, then tap the More button (•••) and select 'Message' or 'Call'.",
      category: "general"
    },
    {
      question: "Does Apple Card have email support?",
      answer: "Apple Card doesn't offer email support. Use the Wallet app messaging or call 1-877-255-5923.",
      category: "general"
    },
    {
      question: "Can I get Apple Card support at Apple Stores?",
      answer: "Apple Stores can help with basic Apple Card questions, but account-specific issues require Goldman Sachs support.",
      category: "general"
    },
    {
      question: "Is Apple Card support free?",
      answer: "Yes, Apple Card customer service is free when you call the toll-free number or use in-app messaging.",
      category: "general"
    },
    {
      question: "How do I schedule a callback from Apple Card support?",
      answer: "Use the Apple Support app or Wallet app to request a callback from Apple Card specialists.",
      category: "general"
    },
    
    // Application & Setup (11-20)
    {
      question: "How do I apply for Apple Card?",
      answer: "Open the Wallet app, tap the + sign, select Apple Card, and follow the application process.",
      category: "application"
    },
    {
      question: "What are the Apple Card requirements?",
      answer: "You must be 18+, a U.S. citizen or resident, and have an iPhone with iOS 12.4 or later.",
      category: "application"
    },
    {
      question: "Why was my Apple Card application denied?",
      answer: "Common reasons include insufficient credit history, high debt-to-income ratio, or recent credit inquiries.",
      category: "application"
    },
    {
      question: "How long does Apple Card approval take?",
      answer: "Most applications are approved instantly, but some may take up to 7 business days for review.",
      category: "application"
    },
    {
      question: "Can I reapply for Apple Card after being denied?",
      answer: "Yes, you can reapply after 30 days, but consider improving your credit profile first.",
      category: "application"
    },
    {
      question: "How do I activate my Apple Card?",
      answer: "Apple Card is automatically activated when approved. The physical card activates when first used.",
      category: "application"
    },
    {
      question: "How do I get a physical Apple Card?",
      answer: "In the Wallet app, tap your Apple Card, then tap 'Request Titanium Card' to order the physical card.",
      category: "application"
    },
    {
      question: "Can I add authorized users to Apple Card?",
      answer: "Currently, Apple Card doesn't support authorized users or joint accounts.",
      category: "application"
    },
    {
      question: "How do I set up Apple Card Family?",
      answer: "Apple Card Family allows sharing with family members. Set it up through the Wallet app.",
      category: "application"
    },
    {
      question: "What credit limit will I get with Apple Card?",
      answer: "Credit limits vary based on creditworthiness, income, and other factors determined by Goldman Sachs.",
      category: "application"
    },
    
    // Billing & Payments (21-30)
    {
      question: "How do I make an Apple Card payment?",
      answer: "Open the Wallet app, tap your Apple Card, then tap 'Pay' to make a payment from your bank account.",
      category: "billing"
    },
    {
      question: "When is my Apple Card payment due?",
      answer: "Your payment is due on the last day of each month. You can see the exact date in the Wallet app.",
      category: "billing"
    },
    {
      question: "What happens if I miss an Apple Card payment?",
      answer: "Late payments may result in fees and could impact your credit score. Contact support immediately.",
      category: "billing"
    },
    {
      question: "How do I set up autopay for Apple Card?",
      answer: "In the Wallet app, tap your Apple Card, go to 'Scheduled Payments' and set up automatic payments.",
      category: "billing"
    },
    {
      question: "Can I pay my Apple Card with a debit card?",
      answer: "Yes, you can pay with a debit card, but bank account transfers are recommended to avoid fees.",
      category: "billing"
    },
    {
      question: "How do I view my Apple Card statement?",
      answer: "Open the Wallet app, tap your Apple Card, then tap 'Monthly Statements' to view or download statements.",
      category: "billing"
    },
    {
      question: "What is the Apple Card interest rate?",
      answer: "APR ranges from 15.99% to 26.99% based on creditworthiness, with no penalty APR.",
      category: "billing"
    },
    {
      question: "Does Apple Card have an annual fee?",
      answer: "No, Apple Card has no annual fee, foreign transaction fees, or over-limit fees.",
      category: "billing"
    },
    {
      question: "How do I increase my Apple Card credit limit?",
      answer: "Request a credit limit increase through the Wallet app or by calling Goldman Sachs.",
      category: "billing"
    },
    {
      question: "Can I pay more than the minimum on Apple Card?",
      answer: "Yes, you can pay any amount up to your full balance at any time through the Wallet app.",
      category: "billing"
    },
    
    // Disputes & Issues (31-40)
    {
      question: "How do I dispute an Apple Card charge?",
      answer: "In the Wallet app, tap the transaction, select 'Report an Issue', and follow the dispute process.",
      category: "disputes"
    },
    {
      question: "How long do Apple Card disputes take?",
      answer: "Disputes typically take 10-14 business days to investigate and resolve.",
      category: "disputes"
    },
    {
      question: "What if I don't recognize an Apple Card transaction?",
      answer: "Report it immediately through the Wallet app or call 1-877-255-5923 to report potential fraud.",
      category: "disputes"
    },
    {
      question: "How do I report Apple Card fraud?",
      answer: "Call 1-877-255-5923 immediately or use the Wallet app to report fraudulent transactions.",
      category: "disputes"
    },
    {
      question: "Can I freeze my Apple Card?",
      answer: "Yes, you can lock your Apple Card instantly through the Wallet app to prevent unauthorized use.",
      category: "disputes"
    },
    {
      question: "What if my Apple Card is lost or stolen?",
      answer: "Lock your card immediately in the Wallet app and call 1-877-255-5923 to report it.",
      category: "disputes"
    },
    {
      question: "How do I get a replacement Apple Card?",
      answer: "Request a replacement through the Wallet app or by calling customer service.",
      category: "disputes"
    },
    {
      question: "What protection does Apple Card offer for purchases?",
      answer: "Apple Card provides standard credit card protections including fraud protection and purchase security.",
      category: "disputes"
    },
    {
      question: "How do I report a billing error on Apple Card?",
      answer: "Contact Goldman Sachs at 1-877-255-5923 or report the error through the Wallet app.",
      category: "disputes"
    },
    {
      question: "Can I get a chargeback on Apple Card purchases?",
      answer: "Yes, you can dispute charges through the standard chargeback process via Goldman Sachs.",
      category: "disputes"
    },
    
    // Rewards & Benefits (41-50)
    {
      question: "How does Apple Card Daily Cash work?",
      answer: "Earn 3% on Apple purchases, 2% on Apple Pay purchases, and 1% on physical card purchases.",
      category: "rewards"
    },
    {
      question: "When do I receive Apple Card Daily Cash?",
      answer: "Daily Cash is added to your Apple Cash card daily, typically the day after your purchase.",
      category: "rewards"
    },
    {
      question: "Can I redeem Daily Cash for statement credit?",
      answer: "Yes, you can apply Daily Cash to your Apple Card balance or keep it in Apple Cash.",
      category: "rewards"
    },
    {
      question: "What purchases earn 3% Daily Cash?",
      answer: "Apple Store purchases, App Store, iTunes, Apple services, and select Apple partners earn 3%.",
      category: "rewards"
    },
    {
      question: "Do Apple Card rewards expire?",
      answer: "No, Daily Cash rewards never expire as long as your account remains open and in good standing.",
      category: "rewards"
    },
    {
      question: "Can I transfer Daily Cash to my bank account?",
      answer: "Yes, transfer Daily Cash from Apple Cash to your bank account through the Wallet app.",
      category: "rewards"
    },
    {
      question: "What other benefits does Apple Card offer?",
      answer: "Benefits include no fees, privacy features, spending insights, and integration with Apple ecosystem.",
      category: "rewards"
    },
    {
      question: "Does Apple Card offer purchase protection?",
      answer: "Apple Card provides standard credit card protections, but specific coverage details vary.",
      category: "rewards"
    },
    {
      question: "Can I use Apple Card for business expenses?",
      answer: "Yes, but Apple Card is a personal credit card, not specifically designed for business use.",
      category: "rewards"
    },
    {
      question: "How do I maximize my Apple Card rewards?",
      answer: "Use Apple Pay whenever possible for 2% back, and make Apple purchases for 3% Daily Cash.",
      category: "rewards"
    }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? comprehensiveFAQs 
    : comprehensiveFAQs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEOHead
        title="Apple Card Customer Service – Contact Apple Card Support 24/7"
        description="Contact Apple Card customer service 24/7 for billing issues, disputes, and account help. Get Apple Card support via Goldman Sachs at 1-877-255-5923."
        keywords="Apple Card customer service, Apple Card support, contact Apple Card support, Apple Card phone number, Apple Card help, Apple Card billing, Apple Card customer service number, Apple Card support chat, Apple Card dispute, Apple Card Goldman Sachs, Apple Card application help, Apple Card payment issues, Apple Card fraud protection, Apple Card Daily Cash, Apple Card rewards, Apple Card account management, USA"
        canonical="https://gregarious-frangipane-fb4d6a.netlify.app/apple-card-support"
        schemaMarkup={schemaMarkup}
        additionalSchemas={[financialProductSchema, howToDisputeSchema, contactPointSchema]}
      />
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 font-medium">Apple Card Support</span>
              </li>
            </ol>
          </nav>
          <a 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Return to Apple Pay Support homepage"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Apple Pay Support
          </a>
        </div>

        <section className="mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900" id="main-heading">
            Apple Card Support: Customer Service Help & Contact Guide
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Need Apple Card customer service help? This comprehensive Apple Card support guide shows you how to contact 
            Apple Card customer service representatives, dispute charges, manage billing, and resolve account issues. 
            Whether you're experiencing Apple Card payment problems or need assistance with Apple Card Daily Cash rewards, 
            we'll help you find the right Apple Card support solution quickly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Apple Card customer service is available 24/7 through Goldman Sachs at 1-877-255-5923, plus live chat 
            and in-app messaging through the Wallet app. Our Apple Card support guide covers everything from basic 
            account management to advanced troubleshooting, helping you resolve Apple Card issues efficiently with 
            official customer service channels.
          </p>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-red-900 mb-3 flex items-center">
              📞 How to Contact Apple Card Customer Service
            </h2>
            <div className="mb-4 p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Apple Card Support Numbers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="font-medium text-gray-700">Apple Card (Goldman Sachs):</p>
                  <p className="text-xl font-bold text-red-600">1-877-255-5923</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">General Apple Support:</p>
                  <p className="text-xl font-bold text-blue-600">1-800-275-2273</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Wallet App Messaging</h3>
                <p className="text-red-600 font-bold text-lg">Built-in Support</p>
                <p className="text-sm text-gray-600">Direct messaging through your Apple Card in Wallet app</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Apple Support Website</h3>
                <p className="text-orange-600 font-medium">24/7 Online Help</p>
                <p className="text-sm text-gray-600">Comprehensive support through official Apple channels</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-red-900 font-medium">
                <strong>Quick Action:</strong> Need immediate help? 
                <a 
                  href="https://support.apple.com/apple-card" 
                  className="text-red-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Apple Card customer service help now"
                >
                  Get Apple Card support now
                </a>
              </p>
            </div>
          </div>
        </section>

        <SectionContainer id="apple-card-faqs" title="Apple Card Support: Frequently Asked Questions">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              Get instant answers to the most common Apple Card questions. This comprehensive database 
              covers applications, billing, disputes, rewards, and customer service topics to help 
              you resolve issues quickly without waiting for support.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category:</h3>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => {
                    setSelectedCategory(category.key);
                    setExpandedFAQ(null);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.key
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
                >
                  <span className="text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      expandedFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`px-6 py-4 border-t border-gray-200 bg-gray-50 transition-all duration-200 ${
                    expandedFAQ === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-3">🚨 Need Additional Assistance?</h3>
            <p className="text-red-800 mb-4">
              When FAQ answers don't resolve your specific situation, direct support channels provide 
              personalized assistance from trained specialists familiar with your account and region.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-medium text-red-900 mb-2">📞 Phone Support</h4>
                <p className="text-sm text-red-700">24/7 Goldman Sachs support</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-red-900 mb-2">💬 Wallet Messaging</h4>
                <p className="text-sm text-red-700">Direct in-app support</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-red-900 mb-2">📱 Apple Support App</h4>
                <p className="text-sm text-red-700">Comprehensive assistance</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="tel:1-877-255-5923" 
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Call Apple Card Support
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="final-thoughts" title="Apple Card Support Summary & Next Steps">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-red-900 mb-3">Get Apple Card Help When You Need It</h3>
                <div className="space-y-3 text-red-800">
                  <p>
                    Apple Card customer service is designed to make credit card management simple and secure. 
                    Whether you need help with billing, disputes, applications, or Daily Cash rewards, multiple 
                    support channels are available to assist you quickly and effectively through Goldman Sachs.
                  </p>
                  <p>
                    Remember that the Wallet app provides the fastest access to personalized support, while 
                    the dedicated Apple Card phone line at 1-877-255-5923 offers immediate assistance for 
                    urgent issues. Both channels connect you with trained specialists who understand Apple Card.
                  </p>
                  <div className="flex items-start mt-4">
                    <Bell className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <strong>Quick Reference:</strong> Bookmark this page and remember that help is always 
                      available through your Wallet app or by calling Apple Card customer service at 1-877-255-5923.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Explore More Apple Payment Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-red-900 mb-2">Apple Pay Support</h4>
                <p className="text-sm text-red-700">General payment issues and troubleshooting</p>
              </Link>
              <Link to="/apple-cash-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-red-900 mb-2">Apple Cash Support</h4>
                <p className="text-sm text-red-700">Send money and bank transfer help</p>
              </Link>
              <Link to="/apple-wallet-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-red-900 mb-2">Apple Wallet Support</h4>
                <p className="text-sm text-red-700">Digital wallet and pass management</p>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Apple Card Help Right Now?</h3>
              <p className="text-gray-700 mb-4">
                Choose the support method that works best for your situation and get help immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => alert('Open your Wallet app → Tap Apple Card → Tap ••• → Select Message or Call')}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Use Wallet App Support
                </button>
                <a 
                  href="tel:1-877-255-5923" 
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors text-center"
                >
                  Call Apple Card Support
                </a>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AppleCardSupport;