
import { useEffect, useState } from 'react';


import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);


export default function Entregados({ arrVentas, setGetArrVentas, getArrVentas}) {


    useEffect(()=>{
        setGetArrVentas(!getArrVentas)
    },[])




    const formateador = new Intl.DateTimeFormat("es-MX", {
            dateStyle: "long",
            timeStyle: "short",
    });

    const milisegundosComoFecha = (milisegundos) => {
            return formateador.format(new Date(milisegundos));
    };






    ////==-=-=-=-=-=-=- datePicker


        const [hoy, setHoy] = useState() // miliseconds 

        const [fecha, setFecha] = useState() //Fri Feb 03 2023 00:00:00 GMT-0700 (hora estándar del Pacífico de México)

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


// let a = []
// arrOrders.map((el, i)=>{
//     a.push(el.items)
// })

        let arrVentasFiltered = arrVentas.filter(el => (el.lastSale >= hoy) && (el.lastSale <= hoy+86400000))

        let totalVentas = []

        arrVentasFiltered.map(el=>{
                totalVentas.push(el.price)
        })

        let total = totalVentas.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)











    return (
        <>

            <h4>
                {
                    arrVentasFiltered.length <= 0 
                        ? 'Selecciona un Dia en el Calendario' 
                        : `Cantidad de Productos Vendidos: ${ arrVentasFiltered.length}`
                }
            </h4>


            <h4 className={arrVentasFiltered.length <= 0 ? 'd-none' : 'bg-dark'}>
                    Total en Ventas: $ <span className='total'>{total}</span>
            </h4>


            <div className="datePicker">
                <DatePicker 
                    selected={fecha}
                    onChange={onChangeDatePicker} 
                    locale="es" 
                    className="pickers" 
                    dateFormat="dd 'de' MMMM 'de' yyyy"
                />
            </div>
        

   
            {arrVentasFiltered.map((el, i) => (
                <div key={i} className="item">
                    <hr />

                    <div className="texto">
                        <h3>Sucursal {el.sucursal}</h3>
                        <p>Fecha de Venta: {milisegundosComoFecha(el.lastSale)}</p>
                        <b>ID: {el.pid}</b>
                        <p>Producto: {el.name}</p>                      
                        <p>Talla : { el.tallaComprada}</p>
                        <b>Precio: $ { el.price}</b>
                    </div>


                    <hr />
                </div>
            ))}


        </>
    );
}
