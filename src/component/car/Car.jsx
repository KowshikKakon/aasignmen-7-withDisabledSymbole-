import React from 'react';

const Car = () => {
    return (
        <div className="relative">

            <div className='absolute py-44 text-white px-18'>
                
            <h2 className='font-semibold'>Bid on Unique Items from <br /> Around the World</h2>
            <p className='font-light'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
            <button className='bg-white rounded-full text-black px-2 mt-2.5'>Explore Auctions</button>
          </div >
            
          <div className="h-[500px] w-full">
                <img
                    src="/assets/Banner-min.jpg"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    );
};

export default Car;