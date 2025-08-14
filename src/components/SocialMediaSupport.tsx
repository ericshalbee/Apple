import React from 'react';
import { Twitter, Facebook, Youtube } from 'lucide-react';
import SectionContainer from './SectionContainer';

const SocialMediaSupport: React.FC = () => {
  const socialLinks = [
    {
      platform: "Twitter",
      handle: "@AppleSupport",
      url: "https://twitter.com/AppleSupport",
      icon: <Twitter className="h-5 w-5" />,
      color: "bg-[#1DA1F2] text-white"
    },
    {
      platform: "Facebook",
      handle: "Apple",
      url: "https://www.facebook.com/apple",
      icon: <Facebook className="h-5 w-5" />,
      color: "bg-[#4267B2] text-white"
    },
    {
      platform: "YouTube",
      handle: "Apple Channel",
      url: "https://www.youtube.com/user/Apple",
      icon: <Youtube className="h-5 w-5" />,
      color: "bg-[#FF0000] text-white"
    }
  ];

  return (
    <SectionContainer id="social-media" title="💬 Apple Support Social Media Channels">
      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          Apple maintains active social media presence for general updates, tips, and community support. 
          While these channels don't provide direct account assistance, they offer valuable resources 
          and can direct you to appropriate support channels for specific issues. For account-specific help, 
          use our <a href="#phone-support" className="text-blue-600 hover:underline font-medium">verified phone numbers</a> 
          or <a href="#official-links" className="text-blue-600 hover:underline font-medium">official support links</a>.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className={`${social.color} p-3 rounded-full mb-3`}>
              {social.icon}
            </div>
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {social.handle}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{social.platform}</p>
          </a>
        ))}
      </div>
      
      <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r">
        <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Social Media Support Guidelines</h3>
        <div className="text-yellow-800 space-y-2">
          <p>
            <strong>Account-specific assistance:</strong> For billing disputes, fraud reports, or urgent problems, 
            use official support channels rather than social media for security and privacy protection.
          </p>
          <p>
            <strong>Direct assistance:</strong> Phone support, live chat, and device-based help provide 
            immediate access to trained specialists with account access and resolution authority.
          </p>
        </div>
        <div className="mt-4">
          <a 
            href="#phone-support" 
            className="text-yellow-700 hover:text-yellow-900 font-medium underline"
          >
            → View Direct Support Options
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SocialMediaSupport;