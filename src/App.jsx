
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { getDocs, collection } from 'firebase/firestore'



import db from './firebase/firebaseConfig'


import Inicio from './pages/Inicio';
import Entregados from './pages/Entregados';
import Inventario from './pages/inventario/Inventario'

import OrdersHillo from './pages/OrdersHillo'
import OrdersSanCarlos from './pages/OrdersSanCarlos'
import ProductosBajos from './pages/ProductosBajos';
import ProductosBajosSanCarlos from './pages/productosBajosSanCarlos';



import Navbar from './components/Navbar';



export default function App() {

  const location = useLocation();





      const [arr, setArr] = useState([])
      const [getArr, setGetArr] = useState(false)


    useEffect(() => {

        const data = collection(db, 'inventario')

        getDocs(data).then((resp) => {
            setArr(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
             console.error(err)
        })

    }, [getArr])





  // const itemCollection = query(
  //   collection(firestoreDB, 'orders'),
  //   where('takenByCustomer', '==', toggleOrders),
  //   where("city", "==", "hermosillo")
  // );





      const [arrOrders, setArrOrders] = useState([])
      const [getArrOrders, setGetArrOrders] = useState(false)

    useEffect(() => {

        const data = collection(db, 'orders')

        getDocs(data).then((resp) => {
            setArrOrders(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
        }).catch(err=>{
             console.error(err)
        })

    }, [getArrOrders])




  return (
    <div className='containerApp'>
        <br />
        <div className="titleLogo">
          <h2 className="w50">Polanco Guayaberas Admin System</h2>
      </div>
      <Navbar />

   

      <Routes>
        <Route path="/adminPolanco" exact element={<Inicio />} />

        <Route path="/adminPolanco/inventario" element={<Inventario arr={arr} setGetArr={setGetArr} getArr={getArr}/>} />
         <Route path="/adminPolanco/inventario/:id" element={<Inventario arr={arr} setGetArr={setGetArr} getArr={getArr}/>} />


        <Route path="/adminPolanco/ordersHillo" element={<OrdersHillo arrOrders={arrOrders} setGetArrOrders={setGetArrOrders} getArrOrders={getArrOrders}/>} />
        <Route path="/adminPolanco/ordersSanCarlos" element={<OrdersSanCarlos arrOrders={arrOrders} setGetArrOrders={setGetArrOrders} getArrOrders={getArrOrders}/>} />

        <Route path="/adminPolanco/productosBajos" element={<ProductosBajos arr={arr} setGetArr={setGetArr} getArr={getArr}/>} />
        <Route path="/adminPolanco/productosBajosSanCarlos" element={<ProductosBajosSanCarlos arr={arr} setGetArr={setGetArr} getArr={getArr}/>} />


        <Route path="/adminPolanco/entregas" element={<Entregados arrOrders={arrOrders} />} />

        <Route path="*"  element={<Navigate to="/adminPolanco" />}/> 
      </Routes>
    </div>
  );
}




