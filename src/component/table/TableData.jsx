import React from 'react';
import { CiHeart } from "react-icons/ci";
const TableData = ({ data, addToCart, cart}) => {
    const { id, image, title, currentBidPrice, timeLeft } = data;
    // includes dile dekhe j array er vitor oi id ace ki na...Tar upor vitti kore true false return core...
    const isDisabled = cart.includes(id)
    // ekhane some dile logic e bole dite hobe kon cono condition dea.Eta true false/boolean value return kore...
    console.log("isdis:",cart,id);
    return (
        <tr >
                                        <th><img src={image} className='w-12' alt="" /></th>
                                        <td>{title}</td>
                                        <td>${currentBidPrice}</td>

                                        <td>{timeLeft}</td>
                                        <td>
                                            {/* sudhu id pass korate hobe... */}

                                            <button
                                                disabled={isDisabled}
                                                onClick={!isDisabled ? () => addToCart(id) : undefined}
                                                className={`p-2 rounded ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                                            >
                                                <CiHeart
                                                    className={isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer text-red-500'}
                                                    size={20}
                                                />
                                            </button>

                                        </td>
                                    </tr>
    );
};

export default TableData;