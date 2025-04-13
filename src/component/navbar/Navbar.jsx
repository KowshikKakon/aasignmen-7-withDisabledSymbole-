import React from 'react';

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start ">
          <div className='px-18 ' >
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              {/* AuctionGallry lekha gulo kaca kachi paoar jnno avabe likhte hobe... */}
              <h1 className='text-[#003EA4] font-light text-2xl '>Auction<span className='text-[#FFD337] font-bold'>Gallery</span></h1>
            </div>

          </div>
        </div>
        <div className="navbar-center  ">
          {/* enline e font style dite hobe ,parent e dile kaj hobena... */}
          <a className="btn btn-ghost text-xl font-normal">Home</a>
          <a className="btn btn-ghost text-xl font-normal">Auctions</a>
          <a className="btn btn-ghost text-xl font-normal">Categories</a>
          <a className="btn btn-ghost text-xl font-normal">How to works</a>
        </div>
        <div className="navbar-end px-24">
        <button className="btn btn-ghost btn-circle px-8">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
          <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="inline-block size-10 rounded-full ring-2 ring-white"
        />
          </button>
          
        </div>
      </div>

    </div>
  );
};

export default NavBar;