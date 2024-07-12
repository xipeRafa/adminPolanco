
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { getDocs, collection } from 'firebase/firestore'



import db from './firebase/firebaseConfig'


import Inicio from './pages/Inicio';
import Inventario from './pages/inventario/Inventario'

import OrdersHillo from './pages/OrdersHillo'
import OrdersSanCarlos from './pages/OrdersSanCarlos'
import ProductosBajos from './pages/ProductosBajos';

import Navbar from './components/Navbar';



export default function App() {

  const location = useLocation();
  console.log(location.pathname);





      const [arr, setArr] = useState([])


    useEffect(() => {

        const data = collection(db, 'inventario')

        getDocs(data).then((resp) => {
            setArr(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
             console.error(err)
        })

    }, [])









      const [arrOrders, setArrOrders] = useState([])


    useEffect(() => {

        const data = collection(db, 'orders')

        getDocs(data).then((resp) => {
            setArrOrders(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
             console.error(err)
        })

    }, [])




  return (
    <div>
        <br />
        <div className="titleLogo">
          <h2 className="w50">Polanco Guayaberas Admin System</h2>
      </div>
      <Navbar />

   

      <Routes>
        <Route path="/" exact element={<Inicio />} />

        <Route path="/inventario" element={<Inventario arr={arr} />} />


        <Route path="/ordersHillo" element={<OrdersHillo arrOrders={arrOrders} />} />
        <Route path="/ordersSanCarlos" element={<OrdersSanCarlos arrOrders={arrOrders} />} />

        <Route path="/productosBajos" element={<ProductosBajos />} />


        <Route path="*" element={<Inicio />} />
      </Routes>
    </div>
  );
}




