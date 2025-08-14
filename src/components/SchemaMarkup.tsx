import React from 'react';

const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Apple Inc.",
    "url": "https://www.apple.com",
    "logo": "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-692-7753",
      "contactType": "Customer Support",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/AppleSupport",
      "https://www.facebook.com/apple",
      "https://www.youtube.com/user/Apple"
    ]
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;