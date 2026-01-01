import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Macbook-pro-site');
  const [scrollPosition, setScrollPosition] = useState(0);

  const categories = [
    { id: 'Macbook-pro-site', label: 'Macbook Pro Site', src:'/img/shots1.png', title: 'Modern Design Excellence', description: 'A sleek and intuitive interface showcasing the latest technology and design trends.' },
    { id: 'Apple-website', label: 'Apple Website' , src:'/img/shots2.png', title: 'Elegant Simplicity', description: 'Clean and minimalist design that emphasizes product beauty and functionality.' },
    { id: 'Mantle', label: 'Mantle', src:'/img/shots3.png', title: 'Brand Innovation', description: 'Creative branding and visual identity that stands out in the market.' },
    { id: 'Frappe-coffee', label: 'Frappe Coffee', src:'/img/shots1.png', title: 'Coffee Culture Reimagined', description: 'Vibrant design celebrating the art and passion of premium coffee.' },
    { id: 'Phone-store', label: 'Phone Store', src:'/img/shots1.png', title: 'Mobile Experience', description: 'Cutting-edge e-commerce platform for the latest mobile devices.' },
    { id: 'carbon-soil', label: 'Carbon & Soil Loop Africa', src:'/img/shots1.png', title: 'Sustainable Future', description: 'Purpose-driven design promoting environmental conservation and sustainability.' },
    { id: 'daktari-connect', label: 'Daktari Connect', src:'/img/shots1.png', title: 'Healthcare Innovation', description: 'User-centered platform connecting healthcare providers with patients.' },
  ];

  const activeCategory = categories.find(cat => cat.id === activeTab);

  const handleScroll = () => {
    setScrollPosition((prev) => (prev + 1) % categories.length);
  };

  return (
    <div className="bg-[#151617] min-h-screen text-white" id='portfolio'>
        <div className='flex size-full flex-col items-center'>
             <p className="font-general text-sm uppercase md:text-[10px] mt-10 ">
         Portfolio
        </p>
        </div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center py-12 px-4">
        {/* MacBook Display */}
      <div className='flex items-center justify-center'>
        <img src={activeCategory?.src || '/img/shots1.png'} alt={activeCategory?.label || ''} className='md:w-2/3 h-auto md:-mb-32 -mb-20 -mt-12' />
      </div>
      </div>

      {/* Category Tabs */}
      <div className="border-t-2 border-gray-800 mt-12">
        <div className="flex items-center justify-center px-4 sm:px-8">
          {/* Hidden on small screens, shown on md and up */}
          <div className="hidden sm:flex items-center overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${
                  activeTab === category.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.label}
                {activeTab === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </button>
            ))}
          </div>

          {/* Show 3 categories on small screens */}
          <div className="sm:hidden flex items-center gap-2">
            {categories.slice(scrollPosition, scrollPosition + 3).map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-4 text-xs font-medium whitespace-nowrap transition-colors relative ${
                  activeTab === category.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.label}
                {activeTab === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </button>
            ))}
          </div>

          <button 
            onClick={handleScroll}
            className="ml-2 p-2 text-gray-400 hover:text-white transition-colors">
            <BiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          {activeCategory?.title}{' '}
          <span className="text-gray-400">
            {activeCategory?.description}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Portfolio;