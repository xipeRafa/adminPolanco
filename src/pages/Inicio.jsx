
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Inicio() {

  useEffect(()=>{
      //window.location.href='https://xiperafa.github.io/adminPolanco/inventario'

      <Navigate to='/adminPolanco/inventario'/>


  },[])


    return (
      <div >
                Inicio
      </div>
    )


  }
