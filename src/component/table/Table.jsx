import React from 'react';

import TableData from './TableData';
const Table = ({ datas, addToCart, cart }) => {

    return (
        <div >

            <div className="overflow-x-auto px-24 ">
                <table className="table bg-white ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th></th>
                            <th>Current Bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            datas.map((data, index) => {


                               return <TableData key={index} data={data} addToCart={addToCart} cart={cart} />
                          

                            })


                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;