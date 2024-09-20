
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

    let pantalonesHombre = []

    let mujeresArr = []

    let mujeresPantalonArr = []
     

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

        if(el.name === 'Pantalon' && el.stockHermosillo >= 0 && el.para === 'hombre'){
           pantalonesHombre.push(el.talla) 
        }

        if(el.stockHermosillo >= 0 && el.para === 'mujer'){
            mujeresArr.push(el.talla) 
        }

        if(el.name === 'Pantalon' && el.stockHermosillo >= 0 && el.para === 'mujer'){
            mujeresPantalonArr.push(el.talla) 
        }
    })



    console.log(mujeresPantalonArr)


     let pantalonesHombre30 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='30'){  
                pantalonesHombre30.push(el)
            }
        })
    })

      let pantalonesHombre32 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='32'){  
                pantalonesHombre32.push(el)
            }
        })
    })

        let pantalonesHombre34 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='34'){  
                pantalonesHombre34.push(el)
            }
        })
    })

    let pantalonesHombre36 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='36'){  
                pantalonesHombre36.push(el)
            }
        })
    })

     let pantalonesHombre38 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='38'){  
                pantalonesHombre38.push(el)
            }
        })
    })

      let pantalonesHombre40 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='40'){  
                pantalonesHombre40.push(el)
            }
        })
    })

       let pantalonesHombre42 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='42'){  
                pantalonesHombre42.push(el)
            }
        })
    })

       let pantalonesHombre44 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='44'){  
                pantalonesHombre44.push(el)
            }
        })
    })

         let pantalonesHombre46 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='46'){  
                pantalonesHombre46.push(el)
            }
        })
    })

            let pantalonesHombre48 = []

    pantalonesHombre.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='48'){  
                pantalonesHombre48.push(el)
            }
        })
    })


// =================== lino Algodon ========================================//// =================== lino Algodon ========================================//
// =================== lino Algodon ========================================//// =================== lino Algodon ========================================//
// =================== lino Algodon ========================================//// =================== lino Algodon ========================================//

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
            if(el==='ch' || el==='36'){  
                linoBlanco36.push(el)
            }
        })
    })


    let linoColor36 = []

    linoColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='ch' || el==='36'){  
                linoColor36.push(el)
            }
        })
    })


    let linoBlanco38 = []

    linoBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='m' || el==='38'){  
                  linoBlanco38.push(el)
            }
        })
    })



    let linoColor38 = []

    linoColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='m' || el==='38'){  
                linoColor38.push(el)
            }
        })
    })


     let linoBlanco40 = []

    linoBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='g' || el==='40' || el==='l'){  
                linoBlanco40.push(el)
            }
        })
    })


    let linoColor40 = []

    linoColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='g' || el==='40' || el==='l'){  
                linoColor40.push(el)
            }
        })
    })


     let linoBlanco42 = []

    linoBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='xl' || el==='42'){  
                linoBlanco42.push(el)
            }
        })
    })


    let linoColor42 = []

    linoColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='xl' || el==='42'){  
                linoColor42.push(el)
            }
        })
    })


      let linoBlanco44 = []

    linoBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='xxl' || el==='44'){  
                linoBlanco44.push(el)
            }
        })
    })


    let linoColor44 = []

    linoColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='xxl' || el==='44'){  
                linoColor44.push(el)
            }
        })
    })


    let linoBlanco46 = []

    linoBlanco.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='xxxl' || el==='46'){  
                linoBlanco46.push(el)
            }
        })
    })


    let linoColor46 = []

    linoColor.forEach((el, i)=>{
        el.forEach((el,i)=>{
            if(el==='xxxl' || el==='46'){  
                linoColor46.push(el)
            }
        })
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

            <hr />

            <h4>INVENTARIO</h4>


            {/*<h4>  <span className='number'>  {tallas.flat().length} Productos en Total </span> </h4>*/}



            <h4> 
                <span className='number'>{tallasAlgodonGua.flat().length}</span>  Guayaberas de Algodon. 
                 <span className='number'>{algodonColor.flat().length}</span> de Color
                <span className='number'>{algodonBlanco.flat().length}</span> Blancas. 
            </h4>


            <h4> 
                <span className='number'>{tallasLinoGua.flat().length}</span>  Guayaberas de Lino. 
                 <span className='number'>{linoColor.flat().length}</span> de Color 
                <span className='number'>{linoBlanco.flat().length}</span> Blancas.
            </h4>

            <h4> 
                <span className='number'>{pantalonesHombre.flat().length}</span>  Pantalones de Lino. 
            </h4>

            <h4> 
                <span className='number'>{mujeresArr.flat().length}</span> Piezas en Ropa de Mujer. 
            </h4>

            <hr />

            <p>Guayaberas Blancas Algodon Talla 36: <span className='number'>{algodonBlanco36.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 38: <span className='number'>{algodonBlanco38.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 40: <span className='number'>{algodonBlanco40.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 42: <span className='number'>{algodonBlanco42.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 44: <span className='number'>{algodonBlanco44.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 46: <span className='number'>{algodonBlanco46.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 48: <span className='number'>{algodonBlanco48.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 50: <span className='number'>{algodonBlanco50.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 52: <span className='number'>{algodonBlanco52.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 54: <span className='number'>{algodonBlanco54.length}</span> Piezas</p>
            <p>Guayaberas Blancas Algodon Talla 56: <span className='number'>{algodonBlanco56.length}</span> Piezas</p>

            <hr />

            <p>Guayaberas Color Algodon Talla 36: <span className='number'>{algodonColor36.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 38: <span className='number'>{algodonColor38.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 40: <span className='number'>{algodonColor40.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 42: <span className='number'>{algodonColor42.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 44: <span className='number'>{algodonColor44.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 46: <span className='number'>{algodonColor46.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 48: <span className='number'>{algodonColor48.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 50: <span className='number'>{algodonColor50.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 52: <span className='number'>{algodonColor52.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 54: <span className='number'>{algodonColor54.length}</span> Piezas</p>
            <p>Guayaberas Color Algodon Talla 56: <span className='number'>{algodonColor56.length}</span> Piezas</p>

               <hr />


            <h4>Guayaberas Lino </h4>

            <p>Guayaberas Blancas Lino Talla 36: <span className='number'>{linoBlanco36.length}</span> Piezas</p>
            <p>Guayaberas Blancas Lino Talla 38: <span className='number'>{linoBlanco38.length}</span> Piezas</p>
            <p>Guayaberas Blancas Lino Talla 40: <span className='number'>{linoBlanco40.length}</span> Piezas</p>
            <p>Guayaberas Blancas Lino Talla 42: <span className='number'>{linoBlanco42.length}</span> Piezas</p>
            <p>Guayaberas Blancas Lino Talla 44: <span className='number'>{linoBlanco44.length}</span> Piezas</p>
            <p>Guayaberas Blancas Lino Talla 46: <span className='number'>{linoBlanco46.length}</span> Piezas</p>
                

            <hr />



            <p>Guayaberas Color Lino Talla 36: <span className='number'>{linoColor36.length}</span> Piezas</p>
            <p>Guayaberas Color Lino Talla 38: <span className='number'>{linoColor38.length}</span> Piezas</p>
            <p>Guayaberas Color Lino Talla 40: <span className='number'>{linoColor40.length}</span> Piezas</p>
            <p>Guayaberas Color Lino Talla 42: <span className='number'>{linoColor42.length}</span> Piezas</p>
            <p>Guayaberas Color Lino Talla 44: <span className='number'>{linoColor44.length}</span> Piezas</p>
            <p>Guayaberas Color Lino Talla 46: <span className='number'>{linoColor46.length}</span> Piezas</p>



            <hr />

            <h4>Pantalones</h4>

            <p>Pantalones Hombre Lino Talla 30: <span className='number'>{pantalonesHombre30.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 32: <span className='number'>{pantalonesHombre32.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 34: <span className='number'>{pantalonesHombre34.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 36: <span className='number'>{pantalonesHombre36.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 38: <span className='number'>{pantalonesHombre38.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 40: <span className='number'>{pantalonesHombre40.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 42: <span className='number'>{pantalonesHombre42.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 44: <span className='number'>{pantalonesHombre44.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 46: <span className='number'>{pantalonesHombre46.length}</span> Piezas</p>
            <p>Pantalones Hombre Lino Talla 48: <span className='number'>{pantalonesHombre48.length}</span> Piezas</p>

   {/*         <h4>Pantalones Mujer</h4>

             <p>Pantalones mujer <span className='number'>{ mujeresPantalonArr.filter(el=>el==='ch').length}</span> Piezas</p>*/}
           


   <hr />


          

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


