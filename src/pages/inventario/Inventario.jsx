
import { useEffect, useState } from 'react';

import './inventario.css'


export default function Inventario({ arr, setGetArr, getArr }) {




    let tallas = []
    let arr2 = []


    arr.forEach((el, i)=>{
        if(el.talla[0] !== '-'){
            if(el.price !== 0){

                tallas.push(el.talla) 

                if(el.sucursal === 'Hermosillo'){
                    arr2.push(el) 
                }    
            }
        }  
    })


    let algodonArr = []

    let tallasAlgodonGua = []
    let tallasLinoGua = []

    let algodonColor = []
    let algodonBlanco = []


    let linoColor = []
    let linoBlanco = []

     

    arr2.forEach((el, i)=>{
        if(el.tela === 'algodon' && el.name === 'Guayabera' && el.stockHermosillo >= 1){
            algodonArr.push(el) 
            tallasAlgodonGua.push(el.talla)   
        }

        if(el.tela === 'lino' && el.name === 'Guayabera' && el.stockHermosillo >= 1){
            tallasLinoGua.push(el.talla)   
        }





        if(el.tela === 'algodon' && el.category === 'color' && el.name === 'Guayabera' && el.stockHermosillo >= 1){
            algodonColor.push(el.talla)
        }

        if(el.tela === 'algodon' && el.category === 'blanco'&& el.name === 'Guayabera' && el.stockHermosillo >= 1 ){
            algodonBlanco.push(el.talla)
        }




        if(el.tela === 'lino' && el.category === 'color' && el.name === 'Guayabera' && el.stockHermosillo >= 1){
            linoColor.push(el.talla)
        }

        if(el.tela === 'lino' && el.category === 'blanco'&& el.name === 'Guayabera' && el.stockHermosillo >= 1 ){
            linoBlanco.push(el.talla)
        }

         //  if(el.tela === 'algodon' && el.category === 'blanco' && el.name === 'Guayabera' && el.stockHermosillo > 0 && el.talla > 0){
         //     algodonBlanco36.push(el.tallla)
         // }
    })




    let algodonBlanco36 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='36'){  
                algodonBlanco36.push(el)
            }
        })
    })


    let algodonColor36 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='36'){  
                algodonColor36.push(el)
            }
        })
    })




    let algodonBlanco38 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='38'){  
                algodonBlanco38.push(el)
            }
        })
    })


    let algodonColor38 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='38'){  
                algodonColor38.push(el)
            }
        })
    })


       let algodonBlanco40 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='40'){  
                algodonBlanco40.push(el)
            }
        })
    })


    let algodonColor40 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='40'){  
                algodonColor40.push(el)
            }
        })
    })

         let algodonBlanco42 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='42'){  
                algodonBlanco42.push(el)
            }
        })
    })


    let algodonColor42 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='42'){  
                algodonColor42.push(el)
            }
        })
    })



            let algodonBlanco44 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='44'){  
                algodonBlanco44.push(el)
            }
        })
    })


    let algodonColor44 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='44'){  
                algodonColor44.push(el)
            }
        })
    })




            let algodonBlanco46 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='46'){  
                algodonBlanco46.push(el)
            }
        })
    })


    let algodonColor46 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='46'){  
                algodonColor46.push(el)
            }
        })
    })



              let algodonBlanco48 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='48'){  
                algodonBlanco48.push(el)
            }
        })
    })


    let algodonColor48 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='48'){  
                algodonColor48.push(el)
            }
        })
    })



                let algodonBlanco50 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='50'){  
                algodonBlanco50.push(el)
            }
        })
    })


    let algodonColor50 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='50'){  
                algodonColor50.push(el)
            }
        })
    })



                let algodonBlanco52 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='52'){  
                algodonBlanco52.push(el)
            }
        })
    })


    let algodonColor52 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='52'){  
                algodonColor52.push(el)
            }
        })
    })


                  let algodonBlanco54 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='54'){  
                algodonBlanco54.push(el)
            }
        })
    })


    let algodonColor54 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='54'){  
                algodonColor54.push(el)
            }
        })
    })




                     let algodonBlanco56 = []

    algodonBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='56'){  
                algodonBlanco56.push(el)
            }
        })
    })


    let algodonColor56 = []

    algodonColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='56'){  
                algodonColor56.push(el)
            }
        })
    })





// =================== lino ========================================//// =================== lino ========================================//
// =================== lino ========================================//// =================== lino ========================================//
// =================== lino ========================================//// =================== lino ========================================//



    let linoBlanco36 = []

    linoBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='ch'){  
                linoBlanco36.push(el)
            }
        })
    })


    let linoColor36 = []

    linoColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='ch'){  
                linoColor36.push(el)
            }
        })
    })




console.log('l-blanco:',linoBlanco36, 'l-color:',linoColor36 )




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

<h4>INVENTARIO</h4>
            {/*<h4>  <span className='number'>  {tallas.flat().length} Productos en Total </span> </h4>*/}



            <h4>  
                <span className='number'>{tallasAlgodonGua.flat().length}</span>  Guayaberas de Algodon
                <span className='number'>{algodonColor.flat().length}</span> Color, 
                <span className='number'>{algodonBlanco.flat().length}</span> Blancas
            </h4>




              <h4> <span className='number'>  { tallasLinoGua.flat().length } Guayaberas de Lino </span> </h4>

          

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


