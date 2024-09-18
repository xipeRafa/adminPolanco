
import { useEffect, useState } from 'react';

import './inventario.css'


export default function Inventario({ arr, setGetArr, getArr }) {




    let tallas = []
    let arr2 = []


    arr.forEach((el, i)=>{
        if(el.talla[0] !== '-'){
            if(el.price !== 0){
                tallas.push(el.talla) 
                arr2.push(el) 
            }
        }  
    })




    useEffect(()=>{
        setGetArr(!getArr)
    },[])



    let sucursalHermosillo = arr2.filter(el => el.sucursal === 'Hermosillo')
    let sucursalSanCarlos = arr2.filter(el => el.sucursal === 'San Carlos')



    let preciosHermosilloArr = []

    sucursalHermosillo.forEach((el, i)=>{
        preciosHermosilloArr.push(el.stockHermosillo * el.price)
    })



    let preciosSanCarlosArr = []

    sucursalSanCarlos.forEach((el, i)=>{
        preciosSanCarlosArr.push(el.stockSanCarlos * el.price)
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
        setSliceState(0)
    }



    if(valueState.length > 3){
        arr2 = arr2.filter(el => el.id === valueState.trim())
    }else{

        if(togleHMState !== ''){
            arr2 = arr2.filter(el => el.para === togleHMState).filter(el => el.sucursal === togleSucursal)
        }else{
            arr2 = arr2
        } 
    }   

    
    let ProdByPage = 6;

    const[sliceAlert, setSliceAlert]=useState('')


    return (
        <>

            <div className='filters'>

                <input type='search' value={valueState} placeholder='Buscar' onChange={handleSearch} />

                <button onClick={resetFinder}>Todos</button>

                <button onClick={()=>{ setTogleSucursal('Hermosillo'), setSliceState(0) }}>Hermosillo</button>

                <button onClick={()=>{ setTogleSucursal('San Carlos'), setSliceState(0) }}>San Carlos</button> 

                <button onClick={()=>{ setTogleHMState('hombre'), setSliceState(0) }}>Hombre</button>

                <button onClick={()=>{ setTogleHMState('mujer'), setSliceState(0) }}>Mujer</button>   

            </div>


            <p className={togleHMState !== '' ? 'busquedaFiltros' : 'd-none'}>
                    <span> Sucurlsal: </span> {togleSucursal.toUpperCase()}
                    <span>Sexo: </span> {togleHMState.toUpperCase()}
            </p>


            <h4>INVENTARIO  <span className='number'>  {tallas.flat().length} Productos en Total </span> </h4>

            <h4>{preciosHermosilloArr.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)} - Hermosillo</h4>
            <h4>{preciosSanCarlosArr.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)} - San Carlos</h4>


            {arr2.sort((a, b) => b.duration - a.duration).slice(sliceState ,sliceState + ProdByPage).map((el, i) => (
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


 

    <div className={valueState.length > 3 ? 'd-none' : 'slice'}>

            <hr />

            <button className={sliceState === 0 ? 'd-none' : ''} onClick={()=>{ if(sliceState > 0){setSliceState(sliceState - ProdByPage), window.scrollTo(0,0)} }}>⇦ Anterior</button>  

            <button className={sliceState === ProdByPage || sliceState === 0 ? 'd-none' : ''} onClick={()=>{ setSliceState(0), window.scrollTo(0,0) }}>０</button>   

            <button onClick={()=>{ 
                                    if(arr2.length > sliceState + ProdByPage){
                                        setSliceState(sliceState + ProdByPage) 
                                        window.scrollTo(0,0) 
                                    }else{
                                        setSliceAlert(' No hay mas Modelos en esta Lista')
                                        setTimeout(()=>{
                                            setSliceAlert('')
                                        },2500)
                                    }
                                }
                    }>
                        Siguiente ⇨ 
            </button>  
            <span className='sliceAlert'>{sliceAlert}</span>




            <p>De: {sliceState + 1} a: {arr2.length > sliceState + ProdByPage ? sliceState + ProdByPage : arr2.length}</p>
            <p>Paginas de {ProdByPage} Modelos. c/u </p>
   </div>
   









        </>
    );
}


