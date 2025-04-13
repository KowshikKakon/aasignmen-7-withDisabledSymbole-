import React from 'react';

const Footer = () => {
    return (
        // surute  mx-auto dea korte hobe
        <div className='text-center py-10 mx-auto '>
            <div>
                <h2 className='text-[#003EA4] font-light text-2xl '>Auction <span className='text-[#FFD337] font-bold'>Gallery</span></h2>
            </div>
            {/* justify center korte hobe notuba majkhane asbena */}
            <div className='flex justify-center gap-2 mt-2 '>
                <h2>Bid.</h2>
                <h2>Win.</h2>
                <h2>Own.</h2>
            </div>
            <div className='flex justify-center gap-4 mt-2 '>
            <h2>Home</h2>
            <h2>Auctions</h2>
            <h2>Categories</h2>
            <h2>How to works</h2>


            </div>
            <h2 className='py-3.5'> @ 2025 AuctionHub. All rights reserved.</h2>

        </div>

    );
};

export default Footer;