import React, { useState } from 'react';
// If you installed a library for the IconRosetteDiscount import, adjust accordingly
import { IconRosetteDiscount } from '@tabler/icons-react';

function Offers() {
  const [copiedOfferId, setCopiedOfferId] = useState(null);

  // Example offers array (could be replaced with API data)
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

  // Copies the given code to the user’s clipboard
  const handleCopyCode = (code, offerId) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedOfferId(offerId);
        // Optionally, reset after a timeout
        setTimeout(() => setCopiedOfferId(null), 2000);
      })
      .catch((err) => console.error('Failed to copy code:', err));
  };

  return (
    <div className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Offers
        </h2>
        {/* Make sure IconRosetteDiscount is properly imported from your icon library */}
        <IconRosetteDiscount stroke={1.5} className="mx-auto mb-4 h-20 w-20" />
        <h2 className="title font-manrope font-bold text-2xl leading-10 mb-8 text-center text-black">
          Check what’s best for you!
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto px-4 md:px-5 lg:px-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6
                       transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>

            {offer.code && (
              <div className="flex items-center gap-3">
                <p className="font-bold mb-0">Code: {offer.code}</p>
                <button
                  onClick={() => handleCopyCode(offer.code, offer.id)}
                  className="bg-yellow-400 hover:bg-yellow-500 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold
                             px-3 py-1 rounded focus:outline-none"
                >
                  {copiedOfferId === offer.id ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
