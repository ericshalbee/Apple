import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  schemaMarkup?: object;
  additionalSchemas?: object[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  schemaMarkup,
  additionalSchemas = []
}) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', `https://gregarious-frangipane-fb4d6a.netlify.app${location.pathname}`, true);

    // Update Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Add schema markup
    const addSchemaScript = (schema: object, id: string) => {
      // Remove existing schema with same id
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    if (schemaMarkup) {
      addSchemaScript(schemaMarkup, 'main-schema');
    }

    additionalSchemas.forEach((schema, index) => {
      addSchemaScript(schema, `additional-schema-${index}`);
    });

    // Cleanup function
    return () => {
      // Remove page-specific schemas when component unmounts
      const mainSchema = document.getElementById('main-schema');
      if (mainSchema) mainSchema.remove();
      
      additionalSchemas.forEach((_, index) => {
        const additionalSchema = document.getElementById(`additional-schema-${index}`);
        if (additionalSchema) additionalSchema.remove();
      });
    };
  }, [title, description, keywords, canonical, schemaMarkup, additionalSchemas, location.pathname]);

  return null;
};

export default SEOHead;