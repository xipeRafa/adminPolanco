
import { useEffect, useState } from 'react';




export default function Inicio({ arr, setGetArr, getArr }) {

console.log(arr)

    const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  
    const milisegundosComoFecha = (milisegundos) => {
          return formateador.format(new Date(milisegundos));
    }; 


     let look = localStorage.look?.slice(41, 61)


    const [valueState, setValueState] = useState(look || '')

    const handleSearch = (e) => {
        const { value } = e.target
        setValueState(value)
    }



    useEffect(()=>{
        setGetArr(!getArr)
        setTimeout(()=>{
            localStorage.removeItem('look')
        },14000)
    },[])


      if(valueState.length > 3 ){
        arr = arr.filter(el => el.id == valueState)
      }else{
        arr = []
      }      




    return (
        <>

            <input style={{display:'none'}} type='search' className='searchInput' value={valueState} placeholder='buscar' onChange={handleSearch} />

            <h3> QR SCANNER</h3>


            {arr.map((el, i) => (
                <div key={i} className="item" onClick={()=>setValueState(el.id)}>
                    <hr />

                    {valueState.length > 3 &&
                    <div className='img'>
                        <img src={el.imgUrl} alt='img' />
                    </div>}

                    <div className="texto">
                        <h3>Nombre: {el.name}</h3>
                        <b>ID: {el.id}</b>
                        <p>Sucursal: {el.sucursal}</p>
                        <p>Categoria: {el.category}</p>
                        <p>Color: {el.color}</p>
                        <p>Tela: {el.tela}</p>

                        <p>Fecha: {milisegundosComoFecha(el.duration)}</p>
                        
                    </div>

                    <div className="texto">
                        <p>Marca: {el.marca}</p>
                        <p>Para: {el.para}</p>

                        <p>Stock: {el?.stockSanCarlos}{el?.stockHermosillo}</p>

                        <p>Talla: {el.talla}</p>
                       
                        <b>Precio: $ { el.price}</b>
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
