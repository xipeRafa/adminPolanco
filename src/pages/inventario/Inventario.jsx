
import { useEffect, useState } from 'react';

import './inventario.css'


export default function Inventario({ arr, setGetArr, getArr }) {


    useEffect(()=>{
        setGetArr(!getArr)
    },[])



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


    const[togleHMState, setTogleHMState]=useState('hombre')  
    const[togleSucursal, setTogleSucursal]=useState('Hermosillo') 

    const[sliceState, setSliceState]=useState(0)

    const resetFinder=()=>{
        setValueState('')
        setTogleHMState('')
        setTogleSucursal('')
    }

    if(valueState.length > 3){
        arr = arr.filter(el => el.id === valueState.trim())
        console.log('busqueda')
    }else{

        if(togleHMState !== ''){
            arr = arr.filter(el => el.para === togleHMState).filter(el => el.sucursal === togleSucursal)
        }else{
            arr = arr
        } 
    }   

    




    return (
        <>

            <div className='filters'>

                <input type='search' value={valueState} placeholder='buscar' onChange={handleSearch} />

                <button onClick={resetFinder}>Todos</button>

                <button onClick={()=>{  setTogleSucursal('Hermosillo') }}>Hermosillo</button>

                <button onClick={()=>{  setTogleSucursal('San Carlos') }}>San Carlos</button> 

                <button onClick={()=>{  setTogleHMState('hombre') }}>Hombre</button>

                <button onClick={()=>{  setTogleHMState('mujer') }}>Mujer</button>   

            </div>


            <p className={togleHMState !== '' ? 'busquedaFiltros' : 'd-none'}>
                    <span> Sucurlsal: </span> {togleSucursal.toUpperCase()}
                    <span className='space'>---</span>
                    <span>Sexo: </span> {togleHMState.toUpperCase()}
                    
            </p>


            <h3>INVENTARIO <span className='number'> { arr.length}</span></h3>
            <h4>{sum.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)} - Hermosillo</h4>
            <h4>{sumc.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)} - San Carlos</h4>


            {arr.slice(sliceState ,sliceState + 6).sort((a, b) => b.duration - a.duration).map((el, i) => (
                <div key={i} className="item" onDoubleClick={()=>{setValueState(el.id), resetFinder}}>
                    <hr />

                    {valueState.length > 3 &&
                    <div >
                         <img className='imgX' src={el.imgUrl} alt='img' />
                    </div>}

                    <div className="texto">
                        <p>Fecha: {milisegundosComoFecha(el.duration)}</p>
                        <h3>Nombre: {el.name}</h3>
                        <b>ID: {el.id}</b>
                        <p>Sucursal: {el.sucursal}</p>
                        <p>Categoria: {el.category}</p>
                        <p>Tela: {el.tela}</p>


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
                    {/*    <p>Marca: {el.marca}</p>
                        <p>Para: {el.para}</p>*/}

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




    <div className='slice'>
            <button onClick={()=>{ if(sliceState > 0){setSliceState(sliceState - 6), window.scrollTo(0,0)} }}>⇦ Anterior</button>  
            <button onClick={()=>{ setSliceState(0), window.scrollTo(0,0) }}>０</button>   
            <button onClick={()=>{ setSliceState(sliceState + 6),window.scrollTo(0,0) }}>Sigiente ⇨</button>  
   </div>

   <p>De: {sliceState} a: {sliceState + 6}</p>
   <p>Paginas de 6 Prod. c/u</p>
   









        </>
    );
}
