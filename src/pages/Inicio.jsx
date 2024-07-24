
import { useEffect } from 'react';


export default function Inicio() {

  useEffect(()=>{
      window.location.href='http://localhost:5173/adminPolanco/inventario'


  },[])


    return (
      <div >
                Inicio
      </div>
    )


  }
