
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";



export default function Navbar() {

  const [isActive, setIsActive]=useState(true)

  const windowWidth = window.innerWidth;

  const InWidth =()=>{
    if(windowWidth<999){
      setIsActive(true)
    }
  }


  return (
<>
    <div onClick={()=>setIsActive(!isActive)}  className="v" >
      <div className="menu-bar">
        <div className="uno" />
        <div className="dos" />
        <div className="tres"/>
      </div>


      <p>{isActive ? 'MENU' : '✘'}</p>

    </div>

    <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>
    

        <NavLink to="/"             > Inicio      </NavLink>
        <NavLink to="/inventario"   > Inventario </NavLink>
        <NavLink to="/ordersHillo"  > Ordenes Hermosillo</NavLink>

        <NavLink to="/ordersSanCarlos"> Ordenes San Carlos</NavLink>
        <NavLink to="/productosBajos"   > Stock Bajo</NavLink>
     
    </div>  

      </>
  );
}





/*  */