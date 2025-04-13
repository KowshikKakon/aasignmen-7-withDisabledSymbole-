
import { useEffect, useState } from 'react';
import './App.css'
import Car from './component/car/Car'
import NavBar from './component/navbar/Navbar'
import Table from './component/table/Table'
import ShowCart from './component/showcart/ShowCart';
import Footer from './footer/Footer';



function App() {
  const [datas, setData] = useState([]);
  const [cart, SetCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showRemuve, setShowRemuve] = useState(false);
  useEffect(() => {
    fetch('/my-component.json')
      .then(response => response.json())
      .then(datas => setData(datas))
      .catch(error => console.error(error));
  }, []);
  const addToCart = (id) => {
    const newCart = [...cart, id]
    SetCart(newCart);
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 1000);
  }

  return (
    <>
      <NavBar></NavBar>
    
      <Car></Car>
      <div className='px-24 bg-[#EBF0F5] py-11 relative' >

                <h1>Active Auctions</h1>
                <p>Discover and bid on extraordinary items</p>
      {/* alert monmoto jaigai pete hole relative abong absolute korte hobe+gight/left kore adjust korte hobe */}
      {showAlert && (
        <div role="alert" className="alert alert-in  right-20  absolute">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Product added to the cart...</span>
      </div>
        )}
        {showRemuve && (
        <div role="alert" className="alert alert-in  right-20  absolute">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Product remuve from cart...</span>
      </div>
        )}
        </div>
      {/* py besi kore dite hobe noie footer er gap barbena */}
      <div className='flex bg-[#EBF0F5]  py-20 px-24 '>

        
      <Table datas={datas} addToCart={addToCart} cart={cart}>

      </Table>
      <ShowCart cart={cart} datas={datas} setCart={SetCart} showRemuve={showRemuve} setShowRemuve={setShowRemuve}/>
      </div>
      <div  className='py-9'>
      <Footer></Footer>

      </div>

      
          
      
    </>
  )
}

export default App
