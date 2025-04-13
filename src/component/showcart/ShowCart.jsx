import { CiHeart } from "react-icons/ci";
import RemuveCart from '../remove/RemuveCart';

const ShowCart = ({ cart, datas, setCart,showRemuve,setShowRemuve }) => {
    

    const datas2 = Object.fromEntries(datas.map(item => [item.id, item]));

    const displayFavorite = cart.map(id => datas2[id]);

    function getSum(total, item) {
        return total + (item.currentBidPrice || 0);
    }

    const removeCart = (id) => {
        const remaining = cart.filter(cartId => cartId !== id);
        setShowRemuve(true); 
        setTimeout(() => setShowRemuve(false), 1000);

        setCart(remaining);
    }
    

    return (
        cart.length === 0 ? (
            <div className="card bg-base-100 w-96 shadow-sm h-64">
                <figure className="px-10 pt-10 border-b-2 border-[#DCE5F3]">
                    <h2 className='flex items-center gap-2'>
                        <CiHeart />
                        Favorite Items
                    </h2>
                </figure>

                <div className="card-body items-center text-center border-b-2 border-[#DCE5F3]">
                    <h2 className="card-title">No favorites yet</h2>
                    <p>
                        Click the heart icon on any item <br />
                        to add it to your favorites
                    </p>
                </div>

                <div className="px-4 py-2 flex justify-between font-bold">
                    <h1>Total bids Amount</h1>
                    <h1>$0000</h1>
                </div>
            </div>
        ) : (
            <div className="card bg-base-100 w-96 shadow-sm h-auto">
                <figure className="px-10 pt-10 border-b-2 border-[#DCE5F3]">
                    <h2 className='flex items-center gap-2'>
                        <CiHeart />
                        Favorite Items
                    </h2>
                </figure>

                <div className="card-body items-center text-center border-b-2 border-[#DCE5F3]">
                    {displayFavorite.map((item, index) => (
                        <div key={index} className="flex items-center justify-between gap-3 w-full relative">
                            <div className='flex'>
                                <img src={item.image} alt={item.title} className="w-20 h-16 object-cover" />

                                <div className='px-5'>
                                    <h3 className="text-sm font-bold">{item.title}</h3>
                                    <div className='flex flex-row px-6 '>
                                        <p>${item.currentBidPrice}</p>
                                        <p>Bids: {item.bidsCount}</p>
                                    </div>
                                </div>

                                <div className='absolute right-0 '>
                                    <RemuveCart removeCart={removeCart} displayFavorite={displayFavorite} id={item.id} index={ index} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="px-4 py-2 flex justify-between font-bold">
                    <h1>Total bids Amount</h1>
                    <h1>${displayFavorite.reduce(getSum, 0)}</h1>
                </div>
            </div>
        )
    );
};

export default ShowCart;
