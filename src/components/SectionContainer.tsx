import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-8 scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">{title}</h2>
      {children}
    </section>
  );
};

export default SectionContainer;