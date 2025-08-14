import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Wallet, AlertTriangle, CheckCircle, ArrowLeft, CreditCard, Shield, Clock, Globe, Lock, DollarSign, Users, Smartphone, Bell, FileText, HelpCircle, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionContainer from '../components/SectionContainer';

const AppleCardSupport: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // Schema markup for Apple Card support page
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Apple Card Customer Service: 24/7 Support Help Guide",
    "description": "Need help with Apple Card? Learn how to contact Apple Card support through the Wallet app, get help with billing, dispute charges, and protect against fraud.",
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
          "name": "What is the Apple Card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Apple Card is Apple's credit card, issued by Goldman Sachs, designed to work seamlessly with the Wallet app on iPhone."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact Apple Card customer service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the Wallet app, call Goldman Sachs Bank's Apple Card support line at 1-877-255-5923, or contact Apple Support."
          }
        },
        {
          "@type": "Question",
          "name": "Is Apple Card customer service available 24/7?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, phone and chat support are available 24 hours a day, 7 days a week."
          }
        },
        {
          "@type": "Question",
          "name": "How do I apply for an Apple Card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open the Wallet app, tap +, select Apple Card, and follow the application steps."
          }
        },
        {
          "@type": "Question",
          "name": "How do I make an Apple Card payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Wallet, tap Apple Card, tap Pay, and choose your payment amount."
          }
        },
        {
          "@type": "Question",
          "name": "How does Apple Card Daily Cash work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You earn a percentage of purchases back as Daily Cash, sent to Apple Cash."
          }
        },
        {
          "@type": "Question",
          "name": "How do I report a lost or stolen Apple Card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Wallet, lock your card immediately and contact support."
          }
        },
        {
          "@type": "Question",
          "name": "Can I dispute an Apple Card transaction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, in Wallet, tap the transaction and select Report an Issue."
          }
        },
        {
          "@type": "Question",
          "name": "Does Apple Card offer zero liability for fraud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you're not liable for unauthorized charges if reported promptly."
          }
        },
        {
          "@type": "Question",
          "name": "How secure is the Apple Card number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each transaction uses a unique security code; your number isn't stored on your device."
          }
        }
      ]
    },
    "about": {
      "@type": "Service",
      "name": "Apple Card",
      "description": "Credit card service by Apple and Goldman Sachs",
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

  // Enhanced FinancialProduct Schema
  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Apple Card",
    "description": "Credit card by Apple and Goldman Sachs with Daily Cash rewards",
    "provider": {
      "@type": "Organization",
      "name": "Goldman Sachs Bank USA",
      "sameAs": "https://www.goldmansachs.com/"
    },
    "areaServed": "US",
    "feesAndCommissionsSpecification": "No annual fees, foreign transaction fees, or late fees",
    "interestRate": {
      "@type": "QuantitativeValue",
      "minValue": "13.24",
      "maxValue": "24.24",
      "unitText": "percent APR"
    }
  };

  // HowTo Schema for Dispute Process
  const howToDisputeSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Dispute an Apple Card Charge",
    "description": "Step-by-step guide to dispute unauthorized or incorrect charges on your Apple Card",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open Wallet App",
        "text": "Open the Wallet app on your iPhone and tap your Apple Card"
      },
      {
        "@type": "HowToStep", 
        "name": "Find Transaction",
        "text": "Locate the transaction you want to dispute in your transaction history"
      },
      {
        "@type": "HowToStep",
        "name": "Report Issue",
        "text": "Tap the transaction, then tap 'Report an Issue' at the bottom"
      },
      {
        "@type": "HowToStep",
        "name": "Select Dispute Type",
        "text": "Choose the reason for your dispute from the available options"
      },
      {
        "@type": "HowToStep",
        "name": "Submit Details",
        "text": "Provide additional details and submit your dispute for review"
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
    { key: 'setup', label: 'Account Setup (11-20)', count: 10 },
    { key: 'payments', label: 'Payments & Transactions (21-30)', count: 10 },
    { key: 'rewards', label: 'Rewards & Benefits (31-40)', count: 10 },
    { key: 'security', label: 'Security & Fraud (41-50)', count: 10 }
  ];

  const comprehensiveFAQs = [
    // General Apple Card Support (1-10)
    {
      question: "What is the Apple Card?",
      answer: "The Apple Card is Apple's credit card, issued by Goldman Sachs, designed to work seamlessly with the Wallet app on iPhone.",
      category: "general"
    },
    {
      question: "How do I contact Apple Card customer service?",
      answer: "Use the Wallet app, call Goldman Sachs Bank's Apple Card support line, or contact Apple Support.",
      category: "general"
    },
    {
      question: "Is Apple Card customer service available 24/7?",
      answer: "Yes, phone and chat support are available 24 hours a day, 7 days a week.",
      category: "general"
    },
    {
      question: "Can I chat with Apple Card support online?",
      answer: "Yes, you can chat through the Wallet app or Apple's support website.",
      category: "general"
    },
    {
      question: "Does Apple Card have a toll-free support number?",
      answer: "Yes, but it depends on your country's Apple Support setup.",
      category: "general"
    },
    {
      question: "Can I request a callback for Apple Card issues?",
      answer: "Yes, you can schedule a callback via the Apple Support website.",
      category: "general"
    },
    {
      question: "Does Apple Card offer support in multiple languages?",
      answer: "Yes, language options depend on your location.",
      category: "general"
    },
    {
      question: "How do I find Apple Card support in my country?",
      answer: "Visit Apple's official support page and select your country or region.",
      category: "general"
    },
    {
      question: "Can I email Apple Card customer service?",
      answer: "Apple Card does not have a public email address; use chat or phone.",
      category: "general"
    },
    {
      question: "How do I report an Apple Card support scam?",
      answer: "Contact Apple directly through the official Support app or website.",
      category: "general"
    },
    
    // Account Setup & Management (11-20)
    {
      question: "How do I apply for an Apple Card?",
      answer: "Open the Wallet app, tap +, select Apple Card, and follow the application steps.",
      category: "setup"
    },
    {
      question: "What are the requirements for Apple Card approval?",
      answer: "You need to be 18 or older, a U.S. resident, and meet credit score and identity verification criteria.",
      category: "setup"
    },
    {
      question: "How do I add Apple Card to my Wallet?",
      answer: "It's added automatically upon approval in the Wallet app.",
      category: "setup"
    },
    {
      question: "How do I activate my physical Apple Card?",
      answer: "Open Wallet, select Apple Card, tap Activate, and follow instructions.",
      category: "setup"
    },
    {
      question: "How do I set up Apple Card Family sharing?",
      answer: "Go to Wallet > Apple Card > More (…) > Share My Card.",
      category: "setup"
    },
    {
      question: "Can I have multiple Apple Cards?",
      answer: "No, but you can share access through Apple Card Family.",
      category: "setup"
    },
    {
      question: "How do I update my billing address on Apple Card?",
      answer: "In Wallet, tap Apple Card, then Card Details, and update your address.",
      category: "setup"
    },
    {
      question: "How do I close my Apple Card account?",
      answer: "Contact Apple Card support through the Wallet app to close your account.",
      category: "setup"
    },
    {
      question: "What happens if my Apple Card application is denied?",
      answer: "You'll receive a message explaining why, along with suggestions for reapplying.",
      category: "setup"
    },
    {
      question: "Can I reapply for Apple Card if denied?",
      answer: "Yes, but you should wait and address any issues before reapplying.",
      category: "setup"
    },
    
    // Payments & Transactions (21-30)
    {
      question: "How do I make an Apple Card payment?",
      answer: "In Wallet, tap Apple Card, tap Pay, and choose your payment amount.",
      category: "payments"
    },
    {
      question: "Can I schedule recurring payments on Apple Card?",
      answer: "Yes, you can set up automatic payments in Wallet.",
      category: "payments"
    },
    {
      question: "How do I change my Apple Card payment date?",
      answer: "In Wallet, select Apple Card, then Change Payment Date.",
      category: "payments"
    },
    {
      question: "Why was my Apple Card payment declined?",
      answer: "It could be due to insufficient funds, incorrect account details, or bank issues.",
      category: "payments"
    },
    {
      question: "How long do Apple Card payments take to process?",
      answer: "Payments usually process instantly but can take 1–3 business days.",
      category: "payments"
    },
    {
      question: "Can I pay Apple Card with another credit card?",
      answer: "No, payments must come from a bank account.",
      category: "payments"
    },
    {
      question: "How do I view Apple Card statements?",
      answer: "In Wallet, select Apple Card, tap Card Balance, then Statements.",
      category: "payments"
    },
    {
      question: "How do I download Apple Card statements?",
      answer: "From Wallet, open Statements, then download the PDF.",
      category: "payments"
    },
    {
      question: "Can I dispute an Apple Card transaction?",
      answer: "Yes, in Wallet, tap the transaction and select Report an Issue.",
      category: "payments"
    },
    {
      question: "How do I request a refund on Apple Card?",
      answer: "Contact the merchant first; if unresolved, dispute through Wallet.",
      category: "payments"
    },
    
    // Rewards & Benefits (31-40)
    {
      question: "How does Apple Card Daily Cash work?",
      answer: "You earn a percentage of purchases back as Daily Cash, sent to Apple Cash.",
      category: "rewards"
    },
    {
      question: "What purchases earn 3% Daily Cash?",
      answer: "Apple purchases and select merchants offer 3% Daily Cash.",
      category: "rewards"
    },
    {
      question: "Can I redeem Daily Cash for cash?",
      answer: "Yes, it's sent to Apple Cash, which can be spent or transferred.",
      category: "rewards"
    },
    {
      question: "How do I track my Daily Cash earnings?",
      answer: "In Wallet, select Apple Card, then view Daily Cash activity.",
      category: "rewards"
    },
    {
      question: "Does Daily Cash expire?",
      answer: "No, Daily Cash does not expire.",
      category: "rewards"
    },
    {
      question: "Can I share Daily Cash with family?",
      answer: "Yes, via Apple Cash transfers.",
      category: "rewards"
    },
    {
      question: "Is there a limit to Daily Cash earnings?",
      answer: "No, there's no set limit.",
      category: "rewards"
    },
    {
      question: "Can I earn rewards on international purchases?",
      answer: "Yes, but foreign transaction fees don't apply.",
      category: "rewards"
    },
    {
      question: "How do I maximize Apple Card rewards?",
      answer: "Use it for Apple Pay and at 3% partner merchants.",
      category: "rewards"
    },
    {
      question: "Are there signup bonuses for Apple Card?",
      answer: "Apple occasionally offers promos, but no standard signup bonus.",
      category: "rewards"
    },
    
    // Security & Fraud Support (41-50)
    {
      question: "How do I report a lost or stolen Apple Card?",
      answer: "In Wallet, lock your card immediately and contact support.",
      category: "security"
    },
    {
      question: "Can I freeze my Apple Card?",
      answer: "Yes, disable it in Wallet anytime.",
      category: "security"
    },
    {
      question: "How do I report Apple Card fraud?",
      answer: "Go to the transaction in Wallet, tap Report an Issue, and contact support.",
      category: "security"
    },
    {
      question: "Does Apple Card offer zero liability for fraud?",
      answer: "Yes, you're not liable for unauthorized charges if reported promptly.",
      category: "security"
    },
    {
      question: "How do I dispute a fraudulent transaction?",
      answer: "Use the Wallet app to initiate a dispute.",
      category: "security"
    },
    {
      question: "How do I change my Apple Card account password?",
      answer: "Apple Card uses your Apple ID password, which you can change in Settings.",
      category: "security"
    },
    {
      question: "Can I use Apple Card without Face ID or Touch ID?",
      answer: "No, biometric or passcode authentication is required.",
      category: "security"
    },
    {
      question: "Does Apple Card send fraud alerts?",
      answer: "Yes, suspicious activity triggers real-time notifications.",
      category: "security"
    },
    {
      question: "How secure is the Apple Card number?",
      answer: "Each transaction uses a unique security code; your number isn't stored on your device.",
      category: "security"
    },
    {
      question: "Can I get a new card number if mine is compromised?",
      answer: "Yes, you can request a new virtual card number instantly in Wallet.",
      category: "security"
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
      <Helmet>
        <title>Apple Card Customer Service – Contact Apple Card Support 24/7</title>
        <meta name="description" content="Contact Apple Card customer service 24/7 for billing issues, dispute charges, and fraud protection. Get Apple Card support via Wallet app messaging, phone at 1-877-255-5923, or live chat." />
        <meta name="keywords" content="Apple Card customer service, Apple Card support, contact Apple Card support, Apple Card phone number, Apple Card help, Apple Card billing issues, Apple Card not working, dispute Apple Card charge, Apple Card customer service number, Apple Card support chat, Goldman Sachs Apple Card, Apple Card fraud protection, Apple Card payment problems, Apple Card verification, Apple Card credit limit, Apple Card interest rate, Apple Card late payment, Apple Card dispute transaction, Apple Card unauthorized charge, Apple Card account management, Apple Card balance, Apple Card statement, Apple Card rewards, Apple Card cashback, USA, Canada" />
        <link rel="canonical" href="https://iphonesupport.netlify.app/apple-card-support" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Apple Card Customer Service – Contact Apple Card Support 24/7" />
        <meta property="og:description" content="Contact Apple Card customer service 24/7 for billing issues, dispute charges, and fraud protection. Get Apple Card support via Wallet app messaging, phone at 1-877-255-5923, or live chat." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iphonesupport.netlify.app/apple-card-support" />
        <meta property="og:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Apple Card Customer Service Support" />
        <meta property="article:publisher" content="https://www.facebook.com/apple" />
        <meta property="article:author" content="Apple Card Support Team" />
        <meta property="article:section" content="Customer Support" />
        <meta property="article:tag" content="Apple Card" />
        <meta property="article:tag" content="Credit Card" />
        <meta property="article:tag" content="Goldman Sachs" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apple Card Customer Service – Contact Apple Card Support 24/7" />
        <meta name="twitter:description" content="Contact Apple Card customer service 24/7 for billing issues, dispute charges, and fraud protection. Get Apple Card support via Wallet app messaging, phone at 1-877-255-5923, or live chat." />
        <meta name="twitter:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta name="twitter:creator" content="@AppleSupport" />
        <meta name="twitter:site" content="@AppleSupport" />
        <meta name="twitter:label1" content="Support Phone" />
        <meta name="twitter:data1" content="1-877-255-5923" />
      </Helmet>
      
      {/* Schema markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
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
            Apple Card customer service representatives through multiple channels, resolve billing issues, dispute charges, 
            and manage your account effectively. Whether you're experiencing Apple Card payment problems or need assistance 
            with Apple Card fraud protection, we'll help you find the right Apple Card support solution quickly and efficiently.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Apple Card customer service is available 24/7 through the Wallet app, phone support, and online chat. Our 
            Apple Card support guide covers everything from basic account management to advanced dispute resolution, 
            helping you resolve Apple Card issues efficiently with official customer service channels.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Looking for help with other Apple payment services? We also provide detailed support guides for{' '}
            <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Cash customer service
            </Link>
            {' '}and{' '}
            <Link to="/apple-wallet-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Wallet support
            </Link>
            . For general Apple Pay assistance, visit our{' '}
            <Link to="/" className="text-blue-600 hover:text-blue-800 underline font-medium">
              main Apple Pay support page
            </Link>
            .
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
              📞 How to Contact Apple Card Customer Service
            </h2>
            <div className="mb-4 p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Apple Card Support Numbers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="font-medium text-gray-700">Goldman Sachs (Apple Card):</p>
                  <p className="text-xl font-bold text-blue-600">1-877-255-5923</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">General Apple Support:</p>
                  <p className="text-xl font-bold text-green-600">1-800-275-2273</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Wallet App Support</h3>
                <p className="text-blue-600 font-bold text-lg">Built-in Messaging</p>
                <p className="text-sm text-gray-600">Direct support through your Apple Card in Wallet app</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Apple Support Website</h3>
                <p className="text-green-600 font-medium">24/7 Online Help</p>
                <p className="text-sm text-gray-600">Comprehensive support through official Apple channels</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-blue-900 font-medium">
                <strong>Quick Action:</strong> Need immediate help? 
                <a 
                  href="https://support.apple.com/apple-card" 
                  className="text-blue-600 hover:underline ml-1"
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

        <SectionContainer id="contact-from-wallet" title="Contact Apple Card Support from Wallet App">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg">
              The fastest way to get Apple Card customer service help is directly through your Wallet app. 
              This Apple Card support method connects you instantly with Apple Card customer service specialists who can access your account 
              information and provide personalized assistance for billing, payments, and account management issues.
            </p>
            <p className="text-gray-700 mb-6">
              Apple Card customer service through the Wallet app provides the most secure and efficient support experience. 
              Apple Card support representatives can view your transaction history, account status, and provide real-time 
              assistance with any Apple Card issues you're experiencing.
            </p>
            <div className="relative">
              <div className="absolute left-4 md:left-6 top-8 bottom-8 w-0.5 bg-gray-200 z-0"></div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Wallet className="h-6 w-6 text-blue-600" />,
                    title: "Open the Wallet app",
                    description: "Launch the Wallet app on your iPhone"
                  },
                  {
                    icon: <CreditCard className="h-6 w-6 text-blue-600" />,
                    title: "Tap on your Apple Card",
                    description: "Select your Apple Card from the available cards"
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-blue-600" />,
                    title: "Tap the More button (•••)",
                    description: "Located in the top right corner of your Apple Card"
                  },
                  {
                    icon: <MessageCircle className="h-6 w-6 text-green-600" />,
                    title: "Select Message or Call",
                    description: "Choose your preferred support method under 'Get Support'"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start relative z-10">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
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
            
            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <p className="text-green-800">
                <strong>Pro Tip:</strong> Messaging support through the Wallet app is the fastest option, 
                typically providing responses in under 5 minutes with full access to your account details.
              </p>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://support.apple.com/apple-card" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Apple Card Help Now
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="apple-card-not-working" title="Apple Card Not Working? Troubleshooting Guide">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              If your Apple Card isn't working properly, these troubleshooting steps will help you identify 
              and resolve the most common issues. Follow these solutions in order, and contact Apple Card 
              support if problems persist after trying these fixes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Apple Card Declined or Not Working?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Check your internet connection
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Update your device software to the latest version
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Verify your card isn't locked in Wallet
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Check your available credit limit
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Smartphone className="h-5 w-5 text-blue-500 mr-2" />
                Adding/Removing Apple Card from Wallet
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">1</span>
                  Open Settings &rarr; Wallet &amp; Apple Pay
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">2</span>
                  Tap Apple Card to manage settings
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">3</span>
                  Use "Remove Card" or "Add to Wallet" as needed
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">4</span>
                  Contact support if issues persist
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Still Having Problems?</h3>
            <p className="text-red-800 mb-4">
              If these troubleshooting steps don't resolve your Apple Card issues, contact customer service immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => alert('Open Wallet app → Tap Apple Card → Tap ••• → Select Message')}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Message Support via Wallet
              </button>
              <a 
                href="tel:1-877-255-5923" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-center"
              >
                Call Apple Card Support
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="billing-payments-help" title="Apple Card Billing, Payments & Transaction Help">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6">
              Apple Card customer service can help resolve a wide range of billing, payment, and transaction 
              issues. Whether you're dealing with payment problems, account questions, or need assistance 
              with your credit information, here are the most common issues our support team handles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Disputed Transactions</h3>
                <p className="text-sm text-gray-600">Fraud alerts and suspicious charges</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Billing Issues</h3>
                <p className="text-sm text-gray-600">Payment problems and account questions</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Late Payments</h3>
                <p className="text-sm text-gray-600">Missed payments and late fee assistance</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Interest Rates</h3>
                <p className="text-sm text-gray-600">Balance questions and rate inquiries</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Credit Reporting</h3>
                <p className="text-sm text-gray-600">FICO score and credit report issues</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <Wallet className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Wallet Management</h3>
                <p className="text-sm text-gray-600">Adding or removing cards from Wallet</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Get Help with Any Apple Card Issue</h3>
              <p className="text-blue-800 mb-4">
                Our customer service team is trained to handle all Apple Card billing and payment concerns.
              </p>
              <a 
                href="https://support.apple.com/apple-card" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Apple Card Support
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="dispute-charge" title="How to Dispute Apple Card Charges: Step-by-Step Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              If you notice an unauthorized charge or need to dispute a transaction on your Apple Card, 
              you can initiate the dispute process directly through your Wallet app or by contacting 
              customer service. Here's exactly how to dispute Apple Card charges effectively:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                  Dispute Through Wallet App
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open the Wallet app and tap your Apple Card
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Find the transaction you want to dispute
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Tap on the transaction for details
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Tap "Report an Issue" to begin dispute process
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                  Alternative Support Methods
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Message Support</h4>
                    <p className="text-sm text-green-700">
                      Use the messaging feature in your Apple Card for quick dispute assistance
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Call Support</h4>
                    <p className="text-sm text-blue-700">
                      Call 1‑877‑255‑5923 for immediate dispute assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Important Dispute Information</h3>
              <ul className="text-orange-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Dispute charges as soon as you notice them for faster resolution
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Keep records of all communication during the dispute process
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  You may receive provisional credit while the dispute is investigated
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => alert('Open Wallet → Tap Apple Card → Find transaction → Tap transaction → Report an Issue')}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Start Dispute Process Now
                </button>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="fraud-protection" title="Apple Card Fraud Protection & Security Support">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              Apple Card Fraud Support
            </h3>
            <p className="text-red-800 mb-4">
              Apple Card provides comprehensive fraud protection and monitoring. If you suspect fraudulent 
              activity or notice suspicious charges on your account, take immediate action using these steps 
              to protect your account and resolve the issue quickly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <Lock className="h-12 w-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">1. Lock Your Card</h3>
              </div>
              <p className="text-gray-700 text-sm text-center">
                Immediately lock your card in the Wallet app to prevent further unauthorized use
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">2. Contact Support</h3>
              </div>
              <p className="text-gray-700 text-sm text-center">
                Call 1‑877‑255‑5923 or message support through your Apple Card in Wallet
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">3. Report the Issue</h3>
              </div>
              <p className="text-gray-700 text-sm text-center">
                Tap "Report an Issue" on the suspicious transaction to begin the dispute process
              </p>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Apple Card Security Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Real-time fraud monitoring
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Instant transaction notifications
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Face ID/Touch ID authorization
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  No card numbers on physical card
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Unique security codes for each transaction
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  24/7 fraud protection team
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Suspected Fraud? Act Immediately</h3>
              <p className="text-red-800 mb-4">
                Time is critical when dealing with fraudulent charges. Contact Apple Card support right away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => alert('Open Wallet → Tap Apple Card → Tap ••• → Select Message → Report Fraud')}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Report Fraud via Wallet
                </button>
                <a 
                  href="tel:1-877-255-5923" 
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-center"
                >
                  Call Fraud Hotline
                </a>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="social-media-support" title="Apple Card Social Media Support Options">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6">
              While Apple doesn't provide direct customer service for Apple Card through social media channels, 
              you can follow these official accounts for updates, tips, and general information about Apple 
              Card features and services:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">@AppleSupport</h3>
                <p className="text-sm text-gray-600 mb-3">Follow on X (formerly Twitter) for updates</p>
                <a 
                  href="https://twitter.com/AppleSupport" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Visit @AppleSupport
                </a>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Apple Community Forums</h3>
                <p className="text-sm text-gray-600 mb-3">Community discussions and tips</p>
                <a 
                  href="https://discussions.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Visit Community Forums
                </a>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-yellow-800">
                <strong>Note:</strong> For account-specific issues, always use official Apple Card support channels through the Wallet app or phone support.
              </p>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="apple-card-faqs" title="Apple Card Customer Support: Frequently Asked Questions">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              Get instant answers to the most common Apple Card questions. These comprehensive FAQs cover 
              account management, billing issues, payment problems, and customer service topics to help 
              you resolve issues quickly without waiting for support.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How quickly can I get help with my Apple Card?
              </h3>
              <p className="text-gray-700">
                Apple Card support is available 24/7. Messaging through the Wallet app typically gets responses 
                in under 5 minutes, while phone support at 1‑877‑255‑5923 connects you immediately with a representative.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How can I dispute an unauthorized charge on my Apple Card?
              </h3>
              <p className="text-gray-700">
                You can dispute an unauthorized Apple Card charge by opening the Wallet app, selecting the transaction, 
                tapping "Report an Issue", and following the on-screen steps to submit a dispute. You can also message 
                support directly through the Wallet app for additional assistance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                <strong>Related help:</strong>{' '}
              </h3>
              <p className="text-gray-700">
                For additional Apple payment support, visit our other comprehensive guides.
              </p>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="apple-card-faqs" title="Apple Card Customer Support: Frequently Asked Questions">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              Get instant answers to the most common Apple Card questions. This comprehensive database 
              covers account management, billing issues, payment problems, and customer service topics to help 
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
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">🚨 Need Additional Assistance?</h3>
            <p className="text-blue-800 mb-4">
              When FAQ answers don't resolve your specific situation, direct support channels provide 
              personalized assistance from trained specialists familiar with your account and region.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-medium text-blue-900 mb-2">📞 Phone Support</h4>
                <p className="text-sm text-blue-700">24/7 Goldman Sachs support</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-blue-900 mb-2">💬 Wallet App</h4>
                <p className="text-sm text-blue-700">Direct messaging support</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-blue-900 mb-2">📱 Apple Support</h4>
                <p className="text-sm text-blue-700">Official Apple assistance</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://support.apple.com/apple-card" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Direct Support
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="final-thoughts" title="Apple Card Support Summary & Next Steps">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-900 mb-3">Get Apple Card Help When You Need It</h3>
                <div className="space-y-3 text-blue-800">
                  <p>
                    Apple Card customer service is designed to be as simple and transparent as the card itself. 
                    Whether you need help with billing, disputes, fraud protection, or account management, 
                    multiple support channels are available to assist you quickly and effectively.
                  </p>
                  <p>
                    Remember that the Wallet app provides the fastest access to personalized support, while 
                    the phone line offers immediate assistance for urgent issues. Both channels connect you 
                    with trained specialists who can resolve your Apple Card concerns efficiently.
                  </p>
                  <div className="flex items-start mt-4">
                    <Bell className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <strong>Quick Reference:</strong> Bookmark this page and remember that help is always 
                      available through your Wallet app or by calling customer service at 1‑877‑255‑5923.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Explore More Apple Payment Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Pay Support</h4>
                <p className="text-sm text-blue-700">General payment issues and troubleshooting</p>
              </Link>
              <Link to="/apple-cash-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Cash Support</h4>
                <p className="text-sm text-blue-700">Send money and bank transfer help</p>
              </Link>
              <Link to="/apple-wallet-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Wallet Support</h4>
                <p className="text-sm text-blue-700">Digital wallet and pass management</p>
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
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Use Wallet App Support
                </button>
                <a 
                  href="tel:1-877-255-5923" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                >
                  Call Customer Service
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