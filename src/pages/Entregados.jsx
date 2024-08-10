
import { useEffect, useState } from 'react';


import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);


export default function OrdersHillo({ arrOrders, setGetArrOrders, getArrOrders, arr, setGetArr, getArr}) {

 

    useEffect(()=>{
        setGetArrOrders(!getArrOrders)
        setGetArr(!getArr)
    },[])




    const formateador = new Intl.DateTimeFormat("es-MX", {
        dateStyle: "long",
        timeStyle: "short",
    });

    const milisegundosComoFecha = (milisegundos) => {
            return formateador.format(new Date(milisegundos));
    };










    ////==-=-=-=-=-=-=- datePicker


        const [ hoy, setHoy ]=useState() // miliseconds 

        const [fecha, setFecha]=useState() //Fri Feb 03 2023 00:00:00 GMT-0700 (hora estándar del Pacífico de México)

        const handlerDuration = e => setHoy(e.target.value)

        const onChangeDatePicker = fecha => {
                setFecha(fecha);
                /* console.log('parse:', Date.parse(fecha)) parse te convierte con horas */
                let today = fecha.getTime()   // .getTime() convierte la fecha en microsegundos
                setHoy(today)
        }  
 

        let date = new Date(Number(hoy)).toLocaleDateString("es-CL", {
                weekday: "long", // narrow, short
                year: "numeric", // 2-digit
                month: "long", // numeric, 2-digit, narrow, long
                day: "numeric", // 2-digit
        })

        const hora = new Date(Number(hoy)).toLocaleTimeString("es-CL") 


        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        let fechaDate = fecha?.toLocaleDateString('es-ES', options)

        //_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_//
        //_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_//
        //_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_////_+_+_++_+_+_+_++_+_+_+_+_+_+_+_+_//


let a = []
arrOrders.map((el, i)=>{
    a.push(el.items)
})

let b = a.flat().filter(el => el.historiSales[0] > hoy && el.historiSales[0] < hoy+86400000)


    return (
        <>
         <div className="datePicker">
              <DatePicker 
                selected={fecha}
                onChange={onChangeDatePicker} 
                locale="es" 
                className="pickers" 
                dateFormat="dd 'de' MMMM 'de' yyyy"
              />
          </div>
          

      {/*  <h3>ENTREGADOS OnLine: <span className='number'> { arrOrders.filter((el) => el.takenByCustomer === true).length}</span></h3>
        <h3>PRODUCTOS YA ENTREGADOS <span className='number'> { arr.filter((el) => el.takenByCustomer === true).length}</span></h3>*/}

          <h2>{b.length <= 0 ? 'Selecciona un Dia en el Calendario' : `Cantidad de Productos Vendidos: ${ b.length} `}</h2>




{/*
            {arrOrders
                .filter((el) => el.takenByCustomer === true)
                .map((el, i) => (
                    <div key={i} className="item">

                       <hr />

                        <div className="texto">
                            <h3>Comprador de Internet: {el.buyer.name}</h3>

                            {el.items.map((el, i) => (
                                    <b key={i}>
                                        Producto ID: {el.id} - Cantidad: { el.quantity} { 
                                            el.historiSales.map((el,i)=>{

                                                let date2 = new Date(Number(el)).toLocaleDateString("es-CL", {
                                                    weekday: "long", // narrow, short
                                                    year: "numeric", // 2-digit
                                                    month: "long", // numeric, 2-digit, narrow, long
                                                    day: "numeric", // 2-digit
                                                    hour: "numeric",
                                                    minute: "numeric",
                                                    second: "numeric"
                                                })

                                                return <p key={i+'v'}>venta: {i+1} {date2}</p>
                                            }) 
                                        }
                                    </b>
                            ))}

                            <p>Correo: {el.buyer.email}</p>
                            <p>Celular: {el.buyer.phone}</p>
                            <p>Ciudad: {el.city}</p>

                            <p>
                                Fecha: {' '}
                                 { new Date(el.date).toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour:'numeric',
                                    minute: 'numeric'
                                })}
                            </p>



                            <b>Total: {el.total}</b>*/}
                            {/*<p><span className={!el.takenByCustomer ? 'bg-danger' : 'bg-blue'}>Status: {el.takenByCustomer ? 'Entregado' : 'Pendiente'}</span></p>*/}
               {/*         </div>

                           <hr />

                    </div>
                ))}*/}


                {b.map((el, i) => (
                <div key={i} className="item">
                    <hr />

                    <div className="texto">
                    <h3>Sucursal {el.sucursal}</h3>
                           <b>ID: {el.id}</b>
                        <p>Producto: {el.name}</p>
                 

                        {/*<p>Fecha: {milisegundosComoFecha(el.duration)}</p>*/}
                        
                    </div>

                    {el?.historiSales?.map((fecha, i) => {
                        return (
                            <p key={i} >
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

                    <div className="texto">

                        <p>Stock: {el?.stockSanCarlos}{el?.stockHermosillo}</p>

                       
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
