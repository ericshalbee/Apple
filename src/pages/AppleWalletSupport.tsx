import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Wallet, AlertTriangle, CheckCircle, ArrowLeft, CreditCard, Shield, Clock, Globe, Lock, DollarSign, Users, Smartphone, Bell, FileText, HelpCircle, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionContainer from '../components/SectionContainer';
import SEOHead from '../components/SEOHead';

const AppleWalletSupport: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // Schema markup for Apple Wallet support page
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Apple Wallet Customer Service: 24/7 Support Help Guide",
    "description": "Need help with Apple Wallet? Learn how to contact Apple Wallet support, add cards, manage passes, and troubleshoot issues.",
    "url": "https://iphonesupport.netlify.app/apple-wallet-support",
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
          "name": "Apple Wallet Support",
          "item": "https://iphonesupport.netlify.app/apple-wallet-support"
        }
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apple Wallet is a digital app that stores credit cards, debit cards, transit passes, tickets, and more on your iPhone or Apple Watch."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact Apple Wallet customer service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the Apple Support app, call Apple's support line, or chat online through the Apple website."
          }
        },
        {
          "@type": "Question",
          "name": "Is Apple Wallet support available 24/7?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Apple offers 24/7 support in most regions."
          }
        },
        {
          "@type": "Question",
          "name": "How do I set up Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open the Wallet app on your iPhone and follow on-screen prompts."
          }
        },
        {
          "@type": "Question",
          "name": "How do I add a card to Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tap the + icon in Wallet and follow the instructions to add your card."
          }
        },
        {
          "@type": "Question",
          "name": "How do I remove a card from Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Wallet, select the card, tap More (•••), then Remove This Card."
          }
        },
        {
          "@type": "Question",
          "name": "How do I pay with Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Double-click your device's side button and authenticate via Face ID, Touch ID, or passcode."
          }
        },
        {
          "@type": "Question",
          "name": "Is Apple Wallet secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, transactions use tokenization, and card numbers are not stored on your device."
          }
        },
        {
          "@type": "Question",
          "name": "Why can't I add my card to Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check compatibility, bank support, and iOS version."
          }
        },
        {
          "@type": "Question",
          "name": "How do I update Apple Wallet to the latest version?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Update iOS via Settings > General > Software Update."
          }
        }
      ]
    },
    "about": {
      "@type": "Service",
      "name": "Apple Wallet",
      "description": "Digital wallet service for iPhone users",
      "provider": {
        "@type": "Organization",
        "name": "Apple Inc."
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": ["US", "CA", "GB", "AU"]
    },
    "areaServed": ["US", "CA", "GB", "AU"],
    "availableLanguage": ["English", "French"]
  };

  // SoftwareApplication Schema
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Apple Wallet",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Digital wallet app for storing credit cards, debit cards, boarding passes, and tickets",
    "downloadUrl": "https://apps.apple.com/app/wallet/id1160481993"
  };

  // HowTo Schema for Adding Cards
  const howToAddCardSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Add a Card to Apple Wallet",
    "description": "Step-by-step guide to add credit or debit cards to Apple Wallet",
    "totalTime": "PT3M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open Wallet App",
        "text": "Open the Wallet app on your iPhone"
      },
      {
        "@type": "HowToStep",
        "name": "Tap Plus Sign",
        "text": "Tap the plus sign (+) in the upper right corner"
      },
      {
        "@type": "HowToStep",
        "name": "Select Card Type",
        "text": "Select 'Debit or Credit Card'"
      },
      {
        "@type": "HowToStep",
        "name": "Scan or Enter Details",
        "text": "Use camera to scan card or enter details manually"
      },
      {
        "@type": "HowToStep",
        "name": "Verify with Bank",
        "text": "Verify with your bank via SMS, call, or banking app"
      }
    ]
  };

  // HowTo Schema for Pass Management
  const howToManagePassSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo", 
    "name": "How to Manage Passes in Apple Wallet",
    "description": "Step-by-step guide to organize and use passes in Apple Wallet",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open Wallet App",
        "text": "Open the Wallet app to view all your passes"
      },
      {
        "@type": "HowToStep",
        "name": "Select Pass",
        "text": "Tap on the pass you want to manage"
      },
      {
        "@type": "HowToStep",
        "name": "Access Options",
        "text": "Tap the More (•••) button for additional options"
      },
      {
        "@type": "HowToStep",
        "name": "Manage Settings",
        "text": "Update notifications, sharing, or remove the pass as needed"
      }
    ]
  };

  // Enhanced ContactPoint Schema
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "Apple Wallet customer service",
    "telephone": "+1-800-275-2273",
    "areaServed": ["US", "CA", "GB", "AU"],
    "availableLanguage": ["English", "French"],
    "hoursAvailable": "Mo-Su 00:00-23:59",
    "serviceType": "Digital Wallet Support"
  };

  const faqCategories = [
    { key: 'all', label: 'All Questions (50)', count: 50 },
    { key: 'general', label: 'General Support (1-10)', count: 10 },
    { key: 'setup', label: 'Setup & Management (11-20)', count: 10 },
    { key: 'payments', label: 'Payments & Transactions (21-30)', count: 10 },
    { key: 'security', label: 'Security & Privacy (31-40)', count: 10 },
    { key: 'troubleshooting', label: 'Troubleshooting (41-50)', count: 10 }
  ];

  const comprehensiveFAQs = [
    // General Support (1-10)
    {
      question: "What is Apple Wallet?",
      answer: "Apple Wallet is a digital app that stores credit cards, debit cards, transit passes, tickets, and more on your iPhone or Apple Watch.",
      category: "general"
    },
    {
      question: "How do I contact Apple Wallet customer service?",
      answer: "Use the Apple Support app, call Apple's support line, or chat online through the Apple website.",
      category: "general"
    },
    {
      question: "Is Apple Wallet support available 24/7?",
      answer: "Yes, Apple offers 24/7 support in most regions.",
      category: "general"
    },
    {
      question: "Can I chat with Apple Wallet support?",
      answer: "Yes, online chat is available via Apple's website and the Support app.",
      category: "general"
    },
    {
      question: "Does Apple Wallet have a toll-free number?",
      answer: "Yes, availability varies by country or region.",
      category: "general"
    },
    {
      question: "Can I schedule a callback from Apple Wallet support?",
      answer: "Yes, through Apple's official support page.",
      category: "general"
    },
    {
      question: "Does Apple Wallet support multiple languages?",
      answer: "Yes, based on your country or device language settings.",
      category: "general"
    },
    {
      question: "Can I get in-person Apple Wallet support?",
      answer: "Yes, at Apple Stores and authorized service providers.",
      category: "general"
    },
    {
      question: "Can I email Apple Wallet customer service?",
      answer: "Apple does not offer public email support; use chat or phone instead.",
      category: "general"
    },
    {
      question: "How do I check if Apple Wallet is down?",
      answer: "Visit Apple's System Status page to see real-time service updates.",
      category: "general"
    },
    
    // Setup & Management (11-20)
    {
      question: "How do I set up Apple Wallet?",
      answer: "Open the Wallet app on your iPhone and follow on-screen prompts.",
      category: "setup"
    },
    {
      question: "How do I add a card to Apple Wallet?",
      answer: "Tap the + icon in Wallet and follow the instructions to add your card.",
      category: "setup"
    },
    {
      question: "How do I remove a card from Apple Wallet?",
      answer: "In Wallet, select the card, tap More (•••), then Remove This Card.",
      category: "setup"
    },
    {
      question: "How do I update card details in Apple Wallet?",
      answer: "You may need to remove and re-add the card, or update through your bank.",
      category: "setup"
    },
    {
      question: "Can I use Apple Wallet without Apple Pay?",
      answer: "Yes, for storing tickets, passes, and boarding passes.",
      category: "setup"
    },
    {
      question: "How do I add a transit card to Apple Wallet?",
      answer: "Select Transit Card in Wallet and follow setup instructions.",
      category: "setup"
    },
    {
      question: "Can I add my driver's license to Apple Wallet?",
      answer: "Yes, in supported U.S. states, through Wallet's ID Card feature.",
      category: "setup"
    },
    {
      question: "How do I share passes from Apple Wallet?",
      answer: "Tap the pass, select Share, and choose your sharing method.",
      category: "setup"
    },
    {
      question: "Can I back up my Apple Wallet items?",
      answer: "Yes, Wallet data is included in iCloud backups.",
      category: "setup"
    },
    {
      question: "How do I restore Apple Wallet after getting a new iPhone?",
      answer: "Sign in with your Apple ID and restore from iCloud backup.",
      category: "setup"
    },
    
    // Payments & Transactions (21-30)
    {
      question: "How do I pay with Apple Wallet?",
      answer: "Double-click your device's side button and authenticate via Face ID, Touch ID, or passcode.",
      category: "payments"
    },
    {
      question: "Can I use Apple Wallet without internet?",
      answer: "Yes, but some cards may require an internet connection for updates.",
      category: "payments"
    },
    {
      question: "How do I change my default payment card in Apple Wallet?",
      answer: "In Wallet, drag your preferred card to the front.",
      category: "payments"
    },
    {
      question: "Why was my Apple Wallet payment declined?",
      answer: "It could be due to insufficient funds, incorrect details, or bank restrictions.",
      category: "payments"
    },
    {
      question: "Can I view my transaction history in Apple Wallet?",
      answer: "Yes, tap the card to view recent transactions.",
      category: "payments"
    },
    {
      question: "How do I request a refund for an Apple Wallet payment?",
      answer: "Contact the merchant first, then dispute through your bank if needed.",
      category: "payments"
    },
    {
      question: "Can I use Apple Wallet for recurring payments?",
      answer: "Yes, if the merchant supports it.",
      category: "payments"
    },
    {
      question: "Can I pay international merchants with Apple Wallet?",
      answer: "Yes, if your card supports international transactions.",
      category: "payments"
    },
    {
      question: "How do I remove a failed transaction in Apple Wallet?",
      answer: "Failed transactions disappear automatically after a while.",
      category: "payments"
    },
    {
      question: "Can I set spending limits in Apple Wallet?",
      answer: "Limits depend on your card issuer's controls.",
      category: "payments"
    },
    
    // Security & Privacy (31-40)
    {
      question: "Is Apple Wallet secure?",
      answer: "Yes, transactions use tokenization, and card numbers are not stored on your device.",
      category: "security"
    },
    {
      question: "How do I lock Apple Wallet if my phone is lost?",
      answer: "Use Find My iPhone to lock or erase your device remotely.",
      category: "security"
    },
    {
      question: "Can I disable Apple Wallet temporarily?",
      answer: "Yes, remove cards or turn off Apple Pay in Settings.",
      category: "security"
    },
    {
      question: "Does Apple Wallet send fraud alerts?",
      answer: "Yes, suspicious transactions trigger notifications.",
      category: "security"
    },
    {
      question: "How do I report unauthorized transactions in Apple Wallet?",
      answer: "Report to your card issuer via Wallet or bank support.",
      category: "security"
    },
    {
      question: "Can I use Apple Wallet without Face ID or Touch ID?",
      answer: "Yes, but you must use a passcode.",
      category: "security"
    },
    {
      question: "Can merchants see my full card number with Apple Wallet?",
      answer: "No, they only receive a device-specific token.",
      category: "security"
    },
    {
      question: "How do I change Apple Wallet's security settings?",
      answer: "Adjust settings in Settings > Wallet & Apple Pay.",
      category: "security"
    },
    {
      question: "Does Apple Wallet store my purchase history?",
      answer: "Yes, but only on your device.",
      category: "security"
    },
    {
      question: "Can I remove my Apple ID from Apple Wallet?",
      answer: "Yes, by signing out of iCloud on the device.",
      category: "security"
    },
    
    // Troubleshooting (41-50)
    {
      question: "Why can't I add my card to Apple Wallet?",
      answer: "Check compatibility, bank support, and iOS version.",
      category: "troubleshooting"
    },
    {
      question: "Why is my Apple Wallet not opening?",
      answer: "Restart your device or update iOS.",
      category: "troubleshooting"
    },
    {
      question: "Why is Apple Wallet not showing on my lock screen?",
      answer: "Enable it in Settings > Wallet & Apple Pay > Double-Click Side Button.",
      category: "troubleshooting"
    },
    {
      question: "Why is Apple Wallet not working on my Apple Watch?",
      answer: "Check Watch settings and re-sync your cards.",
      category: "troubleshooting"
    },
    {
      question: "Why do I see \"Card Not Available\" in Apple Wallet?",
      answer: "It may be temporarily blocked by your bank.",
      category: "troubleshooting"
    },
    {
      question: "How do I fix an Apple Wallet error message?",
      answer: "Follow the prompt or contact support for guidance.",
      category: "troubleshooting"
    },
    {
      question: "Why are my passes missing from Apple Wallet?",
      answer: "Check iCloud sync settings and sign in with the same Apple ID.",
      category: "troubleshooting"
    },
    {
      question: "Can I reinstall Apple Wallet?",
      answer: "Yes, delete it and re-download from the App Store.",
      category: "troubleshooting"
    },
    {
      question: "Why is my Apple Wallet payment slow?",
      answer: "Check internet connection or device performance.",
      category: "troubleshooting"
    },
    {
      question: "How do I update Apple Wallet to the latest version?",
      answer: "Update iOS via Settings > General > Software Update.",
      category: "troubleshooting"
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
        title="Apple Wallet Customer Service – Contact Apple Wallet Support 24/7"
        description="Contact Apple Wallet customer service 24/7 for card issues, pass management, and troubleshooting. Get Apple Wallet support via phone, chat, or Apple Support app."
        keywords="Apple Wallet customer service, Apple Wallet support, contact Apple Wallet support, Apple Wallet phone number, Apple Wallet help, Apple Wallet not working, Apple Wallet customer service number, Apple Wallet support chat, Apple Pay wallet help, Apple Wallet card issues, Apple Wallet pass management, Apple Wallet troubleshooting, Apple Wallet setup, Apple Wallet add card, Apple Wallet remove card, Apple Wallet transit pass, Apple Wallet boarding pass, USA, Canada"
        canonical="https://gregarious-frangipane-fb4d6a.netlify.app/apple-wallet-support"
        schemaMarkup={schemaMarkup}
        additionalSchemas={[softwareApplicationSchema, howToAddCardSchema, howToManagePassSchema, contactPointSchema]}
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
                <span className="text-gray-900 font-medium">Apple Wallet Support</span>
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
            Apple Wallet Support: Customer Service Help & Contact Guide
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Need Apple Wallet customer service help? This comprehensive Apple Wallet support guide shows you how to contact 
            Apple Wallet customer service representatives, add and manage cards, troubleshoot pass issues, and resolve 
            payment problems. Whether you're experiencing Apple Wallet card issues or need assistance with Apple Wallet 
            pass management, we'll help you find the right Apple Wallet support solution quickly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Apple Wallet customer service is available 24/7 through multiple channels including phone support, live chat, 
            and in-app assistance. Our Apple Wallet support guide covers everything from basic card management to advanced 
            troubleshooting, helping you resolve Apple Wallet issues efficiently with official customer service channels.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Looking for help with other Apple payment services? We also provide detailed support guides for{' '}
            <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Cash customer service
            </Link>
            {' '}and{' '}
            <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Card support
            </Link>
            . For general Apple Pay assistance, visit our{' '}
            <Link to="/" className="text-blue-600 hover:text-blue-800 underline font-medium">
              main Apple Pay support page
            </Link>
            .
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
              📞 How to Contact Apple Wallet Customer Service
            </h2>
            <div className="mb-4 p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Apple Wallet Support Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="font-medium text-gray-700">Apple Support Website:</p>
                  <p className="text-xl font-bold text-blue-600">Get Support Online</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Apple Support App:</p>
                  <p className="text-xl font-bold text-purple-600">In-App Assistance</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat Support</h3>
                <p className="text-blue-600 font-bold text-lg">24/7 Availability</p>
                <p className="text-sm text-gray-600">Direct support through Apple's official website</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Device Settings</h3>
                <p className="text-purple-600 font-medium">Built-in Help</p>
                <p className="text-sm text-gray-600">Access support directly from your iPhone settings</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-blue-900 font-medium">
                <strong>Quick Action:</strong> Need immediate help? 
                <a 
                  href="https://support.apple.com/wallet" 
                  className="text-blue-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Apple Wallet customer service help now"
                >
                  Get Apple Wallet support now
                </a>
              </p>
            </div>
          </div>
        </section>

        <SectionContainer id="what-is-apple-wallet" title="What is Apple Wallet? Complete Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Apple Wallet is a digital wallet app that stores your credit cards, debit cards, boarding passes, 
              event tickets, loyalty cards, and other passes on your iPhone, iPad, or Apple Watch. It's the 
              foundation for Apple Pay and provides secure storage for all your important cards and passes 
              in one convenient location.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                  What Apple Wallet Stores
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Credit and debit cards for Apple Pay
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Boarding passes and event tickets
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Store loyalty cards and membership cards
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Transit cards and student ID cards
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  Apple Wallet Security Features
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">1</span>
                    Face ID and Touch ID authentication
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">2</span>
                    Encrypted card information storage
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">3</span>
                    Device-specific security codes
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">4</span>
                    Remote card suspension via Find My
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://support.apple.com/wallet" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About Apple Wallet
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="add-cards-to-wallet" title="How to Add Cards to Apple Wallet: Step-by-Step Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Adding cards to Apple Wallet is simple and secure. Whether you're adding a credit card, debit card, 
              or prepaid card, Apple Wallet customer service recommends following these steps to ensure your cards 
              are properly set up for Apple Pay and other wallet features.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                  Add Card via Wallet App
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open the Wallet app on your iPhone
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap the plus sign (+) in the upper right corner
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Select "Debit or Credit Card"
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Use camera to scan card or enter details manually
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">5</span>
                    Verify with your bank via SMS, call, or app
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-green-600 mr-2" />
                  Add Card via Settings
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open Settings on your iPhone
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap "Wallet & Apple Pay"
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Tap "Add Card\" under Payment Cards
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Follow the same steps as Wallet app method
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">5</span>
                    Configure card settings and preferences
                  </li>
                </ol>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Card Verification Requirements</h3>
              <ul className="text-yellow-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  Card must be issued by a participating bank or financial institution
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  Account must be in good standing with no restrictions
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  You may need to verify via SMS, phone call, or banking app
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => alert('Open Wallet app → Tap + → Select Debit or Credit Card')}
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
                >
                  Add Card to Wallet Now
                </button>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="apple-wallet-faqs" title="Apple Wallet Support: Frequently Asked Questions">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              Get instant answers to the most common Apple Wallet questions. This comprehensive database 
              covers setup, payments, security, troubleshooting, and customer service topics to help 
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

        <SectionContainer id="final-thoughts" title="Apple Wallet Support Summary & Next Steps">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-900 mb-3">Get Apple Wallet Help When You Need It</h3>
                <div className="space-y-3 text-blue-800">
                  <p>
                    Apple Wallet customer service is designed to make digital card and pass management simple and secure. 
                    Whether you need help with adding cards, managing passes, troubleshooting issues, or understanding 
                    features, multiple support channels are available to assist you quickly and effectively.
                  </p>
                  <p>
                    Remember that Apple's official support website provides the most comprehensive help resources, while 
                    the built-in device support offers immediate assistance for common issues. Both channels connect you 
                    with trained specialists who understand Apple Wallet's features and capabilities.
                  </p>
                  <div className="flex items-start mt-4">
                    <Bell className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <strong>Quick Reference:</strong> Bookmark this page and remember that help is always 
                      available through Apple's official support channels and your device settings.
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
              <Link to="/apple-card-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Card Support</h4>
                <p className="text-sm text-blue-700">Credit card billing and account help</p>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Apple Wallet Help Right Now?</h3>
              <p className="text-gray-700 mb-4">
                Choose the support method that works best for your situation and get help immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://support.apple.com/wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Get Official Support
                </a>
                <a 
                  href="https://getsupport.apple.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
                >
                  Start Live Chat
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

export default AppleWalletSupport;