
import { useEffect, useState } from 'react';




export default function Inicio({ arr, setGetArr, getArr, UpdateByIdInventario }) {

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


      const handleToggle =(id, el)=>{

            xel.takenByCustomer = true

            if(el?.stockHermosillo===undefined){
                el.stockSanCarlos = el?.stockSanCarlos - 1
                UpdateByIdInventario(el.id, el)
            }else{
                el.stockHermosillo = el?.stockHermosillo - 1
                UpdateByIdInventario(el.id, el)
            }

             setGetArr(!getArr)

      }  




    return (
        <>

            <input  type='search' style={{display:'none'}} className='searchInput' value={valueState} placeholder='buscar' onChange={handleSearch} />

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
                        <p>Sucursal: {el.sucursal}</p>
                        <p>Categoria: {el.category}</p>

                        {/* <p>Fecha: {milisegundosComoFecha(el.duration)}</p>*/}
                        
                    </div>

                    <div className="texto">
                        <p>Stock: {el?.stockSanCarlos}{el?.stockHermosillo}</p>

                        <p>Talla: {el.talla}</p>
                       
                        <b>Precio: $ { el.price}</b>
                    </div>

                    {/*<div className="texto">
                        <p>Descripcion: {el.description}</p>
                    </div>*/}

<br />
                        <button style={{backgroundColor:'yellow', }} onClick={()=>handleToggle(el.id, el)}> 
                            Marcar como Pagada
                        </button>
                    <hr />
                </div>
            ))}
        </>
    );
}
