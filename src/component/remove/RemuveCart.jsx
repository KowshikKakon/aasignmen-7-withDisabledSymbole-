import React from 'react';

const RemuveCart = ({ removeCart, displayFavorite, id ,index}) => {
  console.log("idssss", id);
  console.log("Display fav:",displayFavorite);
  
    return (
      <div key={index} className='border-b-2 border-[#DCE5F3]'>
          <button onClick={()=>removeCart(id)} className="remove-button">
            X
        </button> 
        

      
      </div>
        
    );
};

export default RemuveCart;

