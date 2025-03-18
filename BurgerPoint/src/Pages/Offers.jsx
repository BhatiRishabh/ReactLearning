// src/pages/Offers.jsx

import React from 'react';
import { IconRosetteDiscount } from '@tabler/icons-react';

function Offers() {
  // You could fetch these offers from an API in a real-world scenario
  const offers = [
    {
      id: 1,
      title: 'Buy One, Get One Free',
      description: 'For all classic burgers every Wednesday, 3–6 PM.',
      code: 'BOGO'
    },
    {
      id: 2,
      title: '20% Off Your First Order',
      description: 'Automatically applied at checkout for new users.',
      code: 'NEWBIE'
    },
    {
      id: 3,
      title: 'Free Fries with Any Burger',
      description: 'Use the code below to get free fries with your burger!',
      code: 'FREEFRIES'
    }
  ];

  return (
    <div className="py-24 relative">
       <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Offers
        </h2>
        <IconRosetteDiscount stroke={1.5} className='h-50 w-50'/>
       <h2 className="title font-manrope font-bold text-2xl leading-10 mb-8 text-center text-black">
       Check whats bests for you!
     </h2>
     </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '5px',
              padding: '1rem' 
            }}
          >
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            {/* If you have a code to copy/paste: */}
            {offer.code && (
              <div>
                <p style={{ fontWeight: 'bold' }}>Code: {offer.code}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
