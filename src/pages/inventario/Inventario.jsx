
import { useEffect, useState } from 'react';

import './inventario.css'


export default function Inventario({ arr, setGetArr, getArr }) {

let a = arr.filter(el => el.sucursal === 'Hermosillo')
let b = arr.filter(el => el.sucursal === 'San Carlos')



let sum = []

a.forEach((el, i)=>{
    sum.push(el.stockHermosillo * el.price)
})


let sumc = []

b.forEach((el, i)=>{
    sumc.push(el.stockSanCarlos * el.price)
})


// .reduce((acumulador, actual) => acumulador + actual.price, 0)

    const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  
    const milisegundosComoFecha = (milisegundos) => {
          return formateador.format(new Date(milisegundos));
    }; 



    const [valueState, setValueState] = useState('')

    const handleSearch = (e) => {
        const { value } = e.target
        setValueState(value)
    }



    useEffect(()=>{
        setGetArr(!getArr)
    },[])


      if(valueState.length > 3){
        arr = arr.filter(el => el.id == valueState.trim())
      }else{
        arr = arr
      }      




    return (
        <>

            <input type='search' style={{width:'180px'}} className='searchInput' value={valueState} placeholder='buscar' onChange={handleSearch} />

            <h3>INVENTARIO <span className='number'> { arr.length}</span></h3>
            <h4>{sum.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)} - Hermosillo</h4>
            <h4>{sumc.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)} - San Carlos</h4>


            {arr.map((el, i) => (
                <div key={i} className="item" onDoubleClick={()=>setValueState(el.id)}>
                    <hr />

                    {valueState.length > 3 &&
                    <div >
                         <img className='imgX' src={el.imgUrl} alt='img' />
                    </div>}

                    <div className="texto">
                        <h3>Nombre: {el.name}</h3>
                        <b>ID: {el.id}</b>
                        <p>Sucursal: {el.sucursal}</p>
                        <p>Categoria: {el.category}</p>
                        <p>Tela: {el.tela}</p>

                        <p>Fecha: {milisegundosComoFecha(el.duration)}</p>

                        {el?.historiSales?.map((fecha, i) => {
                                return (
                                        <p key={i} style={{ backgroundColor: "yellow" }}>
                                                Venta {i + 1}.- {milisegundosComoFecha(fecha)}
                                        </p>
                                );
                        })}

                        {el?.notaDeVenta?.map((nota, i) => {
                                return (
                                        <p key={i}>
                                                Nota de Venta {i + 1}: <b>No. {nota}</b>
                                        </p>
                                );
                        })}
                        
                    </div>

                    <div className="texto">
                        <p>Marca: {el.marca}</p>
                        <p>Para: {el.para}</p>

                        <p>Stock: {el?.stockSanCarlos}{el?.stockHermosillo}</p>

                        <span>Talla: </span>

                        {el?.talla.map((el,i)=>(
                          <span key={i+'95'}> {el},</span>
                        ))}
                       
                        <p><b>Precio: $ { el.price}</b></p>
                    </div>

                    {/*<div className="texto">
                        <p>Descripcion: {el.description}</p>
                    </div>*/}
                    <hr />
                </div>
            ))}
        </>
    );
}
