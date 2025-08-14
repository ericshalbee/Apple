import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Wallet, AlertTriangle, CheckCircle, ArrowLeft, CreditCard, Shield, Clock, Globe, Lock, DollarSign, Users, Smartphone, Bell, FileText, HelpCircle, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionContainer from '../components/SectionContainer';

const AppleCashSupport: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // Schema markup for Apple Cash support page
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Apple Cash Customer Service: 24/7 Support Help Guide",
    "description": "Need help with Apple Cash? Learn how to contact Apple Cash support, send money, transfer to bank, fix payment issues, and get verification help.",
    "url": "https://iphonesupport.netlify.app/apple-cash-support",
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
          "name": "Apple Cash Support",
          "item": "https://iphonesupport.netlify.app/apple-cash-support"
        }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Apple Cash and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apple Cash is a digital card in the Wallet app that lets you send, receive, and spend money directly from your iPhone, iPad, or Apple Watch."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact Apple Cash customer service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the Apple Support app, visit support.apple.com, or call Apple Support for your region and ask for Apple Cash assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Is Apple Cash customer service available 24/7?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, in most countries with Apple Cash, phone and chat support are available 24 hours a day, 7 days a week."
          }
        },
        {
          "@type": "Question",
          "name": "How do I set up Apple Cash on my iPhone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open the Wallet app, tap Apple Cash, and follow the on-screen instructions to enable it."
          }
        },
        {
          "@type": "Question",
          "name": "How do I send money with Apple Cash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use Messages or Wallet, choose Apple Cash, enter the amount, and confirm with Face ID or Touch ID."
          }
        },
        {
          "@type": "Question",
          "name": "How do I transfer Apple Cash to my bank account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Wallet, select Apple Cash, tap Transfer to Bank, and follow the prompts."
          }
        },
        {
          "@type": "Question",
          "name": "How do I report Apple Cash fraud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Immediately contact Apple Support and your bank to secure your account."
          }
        },
        {
          "@type": "Question",
          "name": "Does Apple Cash charge fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sending money with a debit card or Apple Cash balance is free; credit card transactions have a fee."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Apple Cash take to transfer to a bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard transfers take 1–3 business days; Instant Transfer is usually within 30 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a limit to how much I can transfer from Apple Cash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Apple sets daily and weekly transfer limits, available in the Wallet app settings."
          }
        }
      ]
    },
    "about": {
      "@type": "Service",
      "name": "Apple Cash",
      "description": "Peer-to-peer payment service for iPhone users",
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

  // HowTo Schema for Sending Money
  const howToSendMoneySchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Send Money with Apple Cash",
    "description": "Step-by-step guide to send money using Apple Cash through Messages",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open Messages",
        "text": "Open the Messages app and select a conversation"
      },
      {
        "@type": "HowToStep",
        "name": "Tap Apple Pay Icon", 
        "text": "Tap the Apple Pay icon in the message toolbar"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Amount",
        "text": "Enter the amount you want to send"
      },
      {
        "@type": "HowToStep",
        "name": "Authenticate Payment",
        "text": "Tap Pay and authenticate with Face ID, Touch ID, or passcode"
      }
    ]
  };

  // HowTo Schema for Bank Transfer
  const howToBankTransferSchema = {
    "@context": "https://schema.org", 
    "@type": "HowTo",
    "name": "How to Transfer Apple Cash to Bank Account",
    "description": "Step-by-step guide to transfer Apple Cash balance to your bank account",
    "totalTime": "PT3M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open Wallet App",
        "text": "Open the Wallet app and tap your Apple Cash card"
      },
      {
        "@type": "HowToStep",
        "name": "Tap Transfer to Bank",
        "text": "Tap 'Transfer to Bank' option"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Amount",
        "text": "Enter the amount you want to transfer"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Transfer Speed",
        "text": "Select '1-3 Business Days' (free) or 'Instant Transfer' (fee applies)"
      },
      {
        "@type": "HowToStep",
        "name": "Confirm Transfer",
        "text": "Review details and confirm with Face ID, Touch ID, or passcode"
      }
    ]
  };

  // MonetaryAmount Schema for Fees
  const monetaryAmountSchema = {
    "@context": "https://schema.org",
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": "0.25",
      "maxValue": "15.00",
      "unitText": "USD"
    },
    "description": "Apple Cash Instant Transfer fee: 1.5% with $0.25 minimum and $15 maximum"
  };

  // Enhanced ContactPoint Schema
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "Apple Cash customer service",
    "telephone": "+1-877-233-8552",
    "areaServed": "US", 
    "availableLanguage": "English",
    "hoursAvailable": "Mo-Su 00:00-23:59",
    "serviceType": "P2P Payment Support"
  };

  const faqCategories = [
    { key: 'all', label: 'All Questions (50)', count: 50 },
    { key: 'general', label: 'General Support (1-10)', count: 10 },
    { key: 'setup', label: 'Account & Setup (11-20)', count: 10 },
    { key: 'transactions', label: 'Transactions & Payments (21-30)', count: 10 },
    { key: 'security', label: 'Fraud & Security (31-40)', count: 10 },
    { key: 'banking', label: 'Bank & Transfer (41-50)', count: 10 }
  ];

  const comprehensiveFAQs = [
    // General Support (1-10)
    {
      question: "What is Apple Cash and how does it work?",
      answer: "Apple Cash is a digital card in the Wallet app that lets you send, receive, and spend money directly from your iPhone, iPad, or Apple Watch.",
      category: "general"
    },
    {
      question: "How do I contact Apple Cash customer service?",
      answer: "Use the Apple Support app, visit support.apple.com, or call Apple Support for your region and ask for Apple Cash assistance.",
      category: "general"
    },
    {
      question: "Is Apple Cash customer service available 24/7?",
      answer: "Yes, in most countries with Apple Cash, phone and chat support are available 24 hours a day, 7 days a week.",
      category: "general"
    },
    {
      question: "Can I chat with Apple Cash support?",
      answer: "Yes. Go to Apple's website, select Apple Cash, choose your issue, and start a live chat.",
      category: "general"
    },
    {
      question: "Does Apple Cash have a dedicated phone number?",
      answer: "No, Apple Cash support is handled through Apple's main support number for your region.",
      category: "general"
    },
    {
      question: "How do I find the Apple Cash help desk near me?",
      answer: "You can access support online, by phone, or through the Apple Support app — there are no physical Apple Cash offices.",
      category: "general"
    },
    {
      question: "Can I contact Apple Cash via email?",
      answer: "Apple Cash does not have a public email for support; use chat or phone instead.",
      category: "general"
    },
    {
      question: "How do I request a callback from Apple Cash?",
      answer: "Go to support.apple.com, choose Apple Cash, and schedule a callback from an Apple advisor.",
      category: "general"
    },
    {
      question: "Is Apple Cash support free to call?",
      answer: "Yes, most regions have toll-free numbers for Apple Support, which includes Apple Cash help.",
      category: "general"
    },
    {
      question: "Does Apple Cash offer support in multiple languages?",
      answer: "Yes, language availability depends on your country's Apple Support team.",
      category: "general"
    },
    
    // Account & Setup Support (11-20)
    {
      question: "How do I set up Apple Cash on my iPhone?",
      answer: "Open the Wallet app, tap Apple Cash, and follow the on-screen instructions to enable it.",
      category: "setup"
    },
    {
      question: "Why is Apple Cash not showing in my Wallet app?",
      answer: "Apple Cash is only available in the U.S. and a few select regions. Check your country's availability.",
      category: "setup"
    },
    {
      question: "How do I verify my identity for Apple Cash?",
      answer: "Go to Wallet > Apple Cash card > More (…) > Verify Identity and follow the prompts.",
      category: "setup"
    },
    {
      question: "What should I do if Apple Cash verification fails?",
      answer: "Double-check your information; if it still fails, contact Apple Cash support for assistance.",
      category: "setup"
    },
    {
      question: "How do I add money to Apple Cash?",
      answer: "Open Wallet, select Apple Cash, tap Add Money, and choose a payment source.",
      category: "setup"
    },
    {
      question: "Can I use Apple Cash without verifying my identity?",
      answer: "You can receive money without verification, but sending money or adding funds usually requires verification.",
      category: "setup"
    },
    {
      question: "How do I remove Apple Cash from my account?",
      answer: "In the Wallet app, open Apple Cash settings and turn it off. Remaining funds must be transferred to your bank first.",
      category: "setup"
    },
    {
      question: "Can I share Apple Cash with Family Sharing members?",
      answer: "Yes, Apple Cash Family lets parents set up Apple Cash for children.",
      category: "setup"
    },
    {
      question: "How do I change my Apple Cash settings?",
      answer: "Open Wallet, select Apple Cash, tap the More (…) button, and adjust settings.",
      category: "setup"
    },
    {
      question: "Is Apple Cash available outside the U.S.?",
      answer: "Currently, Apple Cash is mainly available in the U.S.",
      category: "setup"
    },
    
    // Transaction & Payment Issues (21-30)
    {
      question: "How do I send money with Apple Cash?",
      answer: "Use Messages or Wallet, choose Apple Cash, enter the amount, and confirm with Face ID or Touch ID.",
      category: "transactions"
    },
    {
      question: "How do I request money with Apple Cash?",
      answer: "In Messages, open a conversation, tap Apple Cash, and request an amount.",
      category: "transactions"
    },
    {
      question: "Why did my Apple Cash payment fail?",
      answer: "Common causes include insufficient funds, identity verification issues, or network errors.",
      category: "transactions"
    },
    {
      question: "How do I cancel an Apple Cash payment?",
      answer: "If it's pending, open Messages, locate the payment, and tap Cancel Payment.",
      category: "transactions"
    },
    {
      question: "What happens if I send money to the wrong person?",
      answer: "If pending, cancel it immediately; if completed, request a refund or contact Apple Cash support.",
      category: "transactions"
    },
    {
      question: "How long do Apple Cash payments take?",
      answer: "Payments are usually instant but can take 1–3 business days in rare cases.",
      category: "transactions"
    },
    {
      question: "Can I schedule payments with Apple Cash?",
      answer: "No, Apple Cash does not currently support scheduled transfers.",
      category: "transactions"
    },
    {
      question: "Why was my Apple Cash transfer declined?",
      answer: "It could be due to verification issues, bank restrictions, or transaction limits.",
      category: "transactions"
    },
    {
      question: "How do I get a refund for an Apple Cash transaction?",
      answer: "Contact the recipient or the merchant first; if unresolved, contact Apple Cash support.",
      category: "transactions"
    },
    {
      question: "Does Apple Cash charge fees?",
      answer: "Sending money with a debit card or Apple Cash balance is free; credit card transactions have a fee.",
      category: "transactions"
    },
    
    // Fraud & Security (31-40)
    {
      question: "How do I report Apple Cash fraud?",
      answer: "Immediately contact Apple Support and your bank to secure your account.",
      category: "security"
    },
    {
      question: "Can Apple Cash reverse fraudulent transactions?",
      answer: "They may assist, but final decisions often depend on your bank's policies.",
      category: "security"
    },
    {
      question: "What should I do if my Apple Cash account is hacked?",
      answer: "Disable Apple Cash in Wallet, change your Apple ID password, and contact Apple Support.",
      category: "security"
    },
    {
      question: "How can I protect my Apple Cash account?",
      answer: "Use Face ID, Touch ID, and two-factor authentication for your Apple ID.",
      category: "security"
    },
    {
      question: "Does Apple Cash use encryption?",
      answer: "Yes, all Apple Cash transactions are encrypted and processed securely.",
      category: "security"
    },
    {
      question: "What is the Apple Cash fraud support number?",
      answer: "Use your region's Apple Support phone number for fraud-related cases.",
      category: "security"
    },
    {
      question: "How do I freeze my Apple Cash account?",
      answer: "Disable it in Wallet or request Apple Support to temporarily lock it.",
      category: "security"
    },
    {
      question: "Can I get my money back if scammed on Apple Cash?",
      answer: "It depends on the situation; Apple Cash support and your bank will investigate.",
      category: "security"
    },
    {
      question: "How do I spot Apple Cash scams?",
      answer: "Beware of unsolicited payment requests, fake prize offers, and pressure to send money.",
      category: "security"
    },
    {
      question: "Is Apple Cash safe for online shopping?",
      answer: "Yes, but only use it with trusted merchants.",
      category: "security"
    },
    
    // Bank & Transfer Support (41-50)
    {
      question: "How do I transfer Apple Cash to my bank account?",
      answer: "In Wallet, select Apple Cash, tap Transfer to Bank, and follow the prompts.",
      category: "banking"
    },
    {
      question: "How long does Apple Cash take to transfer to a bank?",
      answer: "Standard transfers take 1–3 business days; Instant Transfer is usually within 30 minutes.",
      category: "banking"
    },
    {
      question: "What are the fees for Apple Cash Instant Transfer?",
      answer: "Instant Transfer has a small percentage fee; standard transfers are free.",
      category: "banking"
    },
    {
      question: "Why did my Apple Cash bank transfer fail?",
      answer: "It could be due to incorrect account details or bank restrictions.",
      category: "banking"
    },
    {
      question: "Can I transfer Apple Cash to a credit card?",
      answer: "No, transfers go to debit cards or bank accounts only.",
      category: "banking"
    },
    {
      question: "How do I change my bank account for Apple Cash?",
      answer: "In Wallet, go to Apple Cash settings and update your bank details.",
      category: "banking"
    },
    {
      question: "Can I link multiple bank accounts to Apple Cash?",
      answer: "You can change linked accounts, but only one can be active at a time.",
      category: "banking"
    },
    {
      question: "How do I cancel a pending Apple Cash bank transfer?",
      answer: "Pending transfers cannot usually be canceled; wait for completion.",
      category: "banking"
    },
    {
      question: "Does Apple Cash work with all U.S. banks?",
      answer: "Most major U.S. banks are supported, but check Apple's compatibility list.",
      category: "banking"
    },
    {
      question: "Is there a limit to how much I can transfer from Apple Cash?",
      answer: "Yes, Apple sets daily and weekly transfer limits, available in the Wallet app settings.",
      category: "banking"
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
        <title>Apple Cash Customer Service – Contact Apple Cash Support 24/7</title>
        <meta name="description" content="Contact Apple Cash customer service 24/7 for payment issues, bank transfers, and verification problems. Get Apple Cash support via chat or Wallet app messaging." />
        <meta name="keywords" content="Apple Cash customer service, Apple Cash support, contact Apple Cash support, Apple Cash phone number, Apple Cash help, Apple Cash not working, Apple Cash customer service number, Apple Cash support chat, Apple Cash verification help, Apple Cash transfer issues, Apple Cash payment problems, Green Dot Bank Apple Cash, Apple Cash send money, Apple Cash P2P payments, Apple Cash bank transfer, Apple Cash instant transfer, Apple Cash fraud protection, Apple Cash limits, Apple Cash setup, Apple Cash troubleshooting, USA, Canada" />
        <link rel="canonical" href="https://iphonesupport.netlify.app/apple-cash-support" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Apple Cash Customer Service – Contact Apple Cash Support 24/7" />
        <meta property="og:description" content="Contact Apple Cash customer service 24/7 for payment issues, bank transfers, and verification problems. Get Apple Cash support via chat or Wallet app messaging." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iphonesupport.netlify.app/apple-cash-support" />
        <meta property="og:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Apple Cash Customer Service Support" />
        <meta property="article:publisher" content="https://www.facebook.com/apple" />
        <meta property="article:author" content="Apple Cash Support Team" />
        <meta property="article:section" content="Customer Support" />
        <meta property="article:tag" content="Apple Cash" />
        <meta property="article:tag" content="P2P Payments" />
        <meta property="article:tag" content="Money Transfer" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apple Cash Customer Service – Contact Apple Cash Support 24/7" />
        <meta name="twitter:description" content="Contact Apple Cash customer service 24/7 for payment issues, bank transfers, and verification problems. Get Apple Cash support via chat or Wallet app messaging." />
        <meta name="twitter:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta name="twitter:creator" content="@AppleSupport" />
        <meta name="twitter:site" content="@AppleSupport" />
        <meta name="twitter:label1" content="Support Phone" />
        <meta name="twitter:data1" content="1-877-233-8552" />
      </Helmet>
      
      {/* Schema markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      {/* Additional Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSendMoneySchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBankTransferSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(monetaryAmountSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
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
                <span className="text-gray-900 font-medium">Apple Cash Support</span>
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
            Apple Cash Support: Customer Service Help & Contact Guide
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Need Apple Cash customer service help? This comprehensive Apple Cash support guide shows you how to contact 
            Apple Cash customer service representatives, send money safely, transfer funds to your bank account, and 
            resolve verification issues. Whether you're experiencing Apple Cash payment problems or need assistance 
            with Apple Cash fraud protection, we'll help you find the right Apple Cash support solution quickly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Apple Cash customer service is available 24/7 through multiple channels including phone support at 
            1-877-233-8552, live chat, and in-app messaging. Our Apple Cash support guide covers everything from 
            basic money transfers to advanced troubleshooting, helping you resolve Apple Cash issues efficiently 
            with official customer service channels.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Looking for help with other Apple payment services? We also provide detailed support guides for{' '}
            <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Card customer service
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
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-green-900 mb-3 flex items-center">
              📞 How to Contact Apple Cash Customer Service
            </h2>
            <div className="mb-4 p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Apple Cash Support Numbers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="font-medium text-gray-700">Apple Cash (Green Dot Bank):</p>
                  <p className="text-xl font-bold text-green-600">1-877-233-8552</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">General Apple Support:</p>
                  <p className="text-xl font-bold text-blue-600">1-800-275-2273</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Wallet App Support</h3>
                <p className="text-green-600 font-bold text-lg">Built-in Messaging</p>
                <p className="text-sm text-gray-600">Direct support through your Apple Cash card in Wallet app</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Apple Support Website</h3>
                <p className="text-blue-600 font-medium">24/7 Online Help</p>
                <p className="text-sm text-gray-600">Comprehensive support through official Apple channels</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-green-900 font-medium">
                <strong>Quick Action:</strong> Need immediate help? 
                <a 
                  href="https://support.apple.com/apple-cash" 
                  className="text-green-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Apple Cash customer service help now"
                >
                  Get Apple Cash support now
                </a>
              </p>
            </div>
          </div>
        </section>

        <SectionContainer id="what-is-apple-cash" title="What is Apple Cash? Complete Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Apple Cash is a peer-to-peer (P2P) payment system built into the Apple ecosystem, allowing users 
              in the U.S. to send and receive money via iMessage or the Wallet app. Powered by Green Dot Bank, 
              Apple Cash provides a secure and convenient way to transfer money between friends and family members 
              using your iPhone, iPad, or Apple Watch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  Key Apple Cash Features
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Send and receive money through Messages app
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Transfer funds to your bank account
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Use Apple Cash balance for Apple Pay purchases
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Face ID/Touch ID security authentication
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  Apple Cash Requirements
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">1</span>
                    iPhone, iPad, or Apple Watch with iOS 11.2 or later
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">2</span>
                    U.S. resident with valid Apple ID
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">3</span>
                    Eligible debit or credit card in Wallet
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">4</span>
                    Two-factor authentication enabled
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://support.apple.com/apple-cash" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About Apple Cash
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="send-money-apple-cash" title="How to Send Money with Apple Cash: Step-by-Step Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Sending money with Apple Cash is quick and secure. Whether you're splitting a bill, paying back a friend, 
              or sending a gift, Apple Cash makes peer-to-peer payments simple through the Messages app. Here's exactly 
              how to send money using Apple Cash customer service approved methods:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Send Money via Messages
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open the Messages app and select a conversation
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap the Apple Pay icon (looks like an Apple logo)
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Enter the amount you want to send
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Tap "Pay" and authenticate with Face ID, Touch ID, or passcode
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Wallet className="h-5 w-5 text-green-600 mr-2" />
                  Send Money via Wallet App
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open the Wallet app on your iPhone
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap your Apple Cash card
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Tap "Send Money" and choose a contact
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Enter amount and confirm with biometric authentication
                  </li>
                </ol>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Apple Cash Sending Limits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-yellow-800">
                <div className="text-center">
                  <p className="font-bold text-2xl">$10,000</p>
                  <p className="text-sm">Per transaction</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-2xl">$10,000</p>
                  <p className="text-sm">Per 7-day period</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-2xl">$20,000</p>
                  <p className="text-sm">Maximum balance</p>
                </div>
              </div>
              <p className="text-yellow-700 text-sm mt-4">
                <strong>Note:</strong> Limits may vary based on account verification status. Contact Apple Cash customer service for limit increases.
              </p>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="transfer-to-bank" title="How to Transfer Apple Cash to Your Bank Account">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Transferring your Apple Cash balance to your bank account is simple and can be done instantly or within 
              1-3 business days. Apple Cash customer service recommends keeping your bank information updated to ensure 
              smooth transfers. Here's how to transfer Apple Cash to your bank account:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Standard Transfer (Free)
                </h3>
                <ol className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open Wallet app and tap your Apple Cash card
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap "Transfer to Bank"
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Enter the amount to transfer
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Select "1-3 Business Days" (Free)
                  </li>
                </ol>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Processing Time:</strong> 1-3 business days<br/>
                    <strong>Cost:</strong> Free<br/>
                    <strong>Minimum:</strong> $1
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-green-600 mr-2" />
                  Instant Transfer (Fee Applies)
                </h3>
                <ol className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Follow steps 1-3 from Standard Transfer
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Select "Instant Transfer"
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Review the transfer fee (1.5% or $0.25 minimum)
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Confirm with Face ID, Touch ID, or passcode
                  </li>
                </ol>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Processing Time:</strong> Within 30 minutes<br/>
                    <strong>Cost:</strong> 1.5% fee ($0.25 minimum, $15 maximum)<br/>
                    <strong>Minimum:</strong> $1
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Bank Transfer Requirements</h3>
              <ul className="text-orange-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Valid U.S. bank account with routing and account numbers
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Bank account must be in the same name as your Apple ID
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Debit card eligible for Instant Transfer (Visa or Mastercard)
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => alert('Open Wallet → Tap Apple Cash → Tap Transfer to Bank')}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Start Bank Transfer Now
                </button>
              </div>
            </div>
          </div>
        </SectionContainer>


        <SectionContainer id="final-thoughts" title="Apple Cash Support Summary & Next Steps">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-green-900 mb-3">Get Apple Cash Help When You Need It</h3>
                <div className="space-y-3 text-green-800">
                  <p>
                    Apple Cash customer service is designed to make peer-to-peer payments simple and secure. 
                    Whether you need help with sending money, bank transfers, verification issues, or account 
                    management, multiple support channels are available to assist you quickly and effectively.
                  </p>
                  <p>
                    Remember that the Wallet app provides the fastest access to personalized support, while 
                    the dedicated Apple Cash phone line at 1-877-233-8552 offers immediate assistance for 
                    urgent issues. Both channels connect you with trained specialists who understand Apple Cash.
                  </p>
                  <div className="flex items-start mt-4">
                    <Bell className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <strong>Quick Reference:</strong> Bookmark this page and remember that help is always 
                      available through your Wallet app or by calling Apple Cash customer service at 1-877-233-8552.
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
              <Link to="/apple-card-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Card Support</h4>
                <p className="text-sm text-blue-700">Credit card billing and account help</p>
              </Link>
              <Link to="/apple-wallet-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Wallet Support</h4>
                <p className="text-sm text-blue-700">Digital wallet and pass management</p>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Apple Cash Help Right Now?</h3>
              <p className="text-gray-700 mb-4">
                Choose the support method that works best for your situation and get help immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => alert('Open your Wallet app → Tap Apple Cash → Tap ••• → Select Message or Call')}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Use Wallet App Support
                </button>
                <a 
                  href="tel:1-877-233-8552" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Call Apple Cash Support
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

export default AppleCashSupport;