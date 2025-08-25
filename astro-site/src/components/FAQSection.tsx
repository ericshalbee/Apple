import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  categories: Array<{ key: string; label: string; count: number }>;
}

export default function FAQSection({ faqs, categories }: FAQSectionProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section id="comprehensive-faqs" className="py-8 scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">
        📋 Apple Pay Support FAQ - Complete Question Database
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          Access detailed answers to the most frequently asked Apple Pay questions. This comprehensive database 
          covers regional support numbers, problem resolution steps, merchant assistance, and contact methods 
          to help you resolve issues quickly and effectively.
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
    </section>
  );
}