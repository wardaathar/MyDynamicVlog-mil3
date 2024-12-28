import React from 'react';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Dynamic Content',
    description: 'Easily update and manage your blog content dynamically.',
  },
  {
    title: 'Responsive Design',
    description: 'Your blog will look great on any device, whether it\'s a phone, tablet, or desktop.',
  },
  {
    title: 'SEO Friendly',
    description: 'Optimized for search engines to help your blog rank higher in search results.',
  },
];

const Features: React.FC = () => {
  return (
    <div>
      <h2>Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;