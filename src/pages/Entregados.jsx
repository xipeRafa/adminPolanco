
import { useEffect } from 'react';


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



    return (
        <>
        <h3>PRODUCTOS YA ENTREGADOS <span className='number'> { arrOrders.filter((el) => el.takenByCustomer === true).length}</span></h3>



            {arrOrders
                .filter((el) => el.takenByCustomer === true)
                .map((el, i) => (
                    <div key={i} className="item">

                       <hr />

                        <div className="texto">
                            <h3>Comprador de Internet: {el.buyer.name}</h3>

                            {el.items.map((el, i) => (
                                    <b key={i}>
                                        Producto ID: {el.id} - Cantidad: { el.quantity}<br />
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



                            <b>Total: {el.total}</b>
                            {/*<p><span className={!el.takenByCustomer ? 'bg-danger' : 'bg-blue'}>Status: {el.takenByCustomer ? 'Entregado' : 'Pendiente'}</span></p>*/}
                        </div>

                           <hr />

                    </div>
                ))}


                {arr.filter((el) => el.takenByCustomer === true).map((el, i) => (
                <div key={i} className="item">
                    <hr />

                    <div className="texto">
                    <h3>Sucursal {el.sucursal}</h3>
                           <b>ID: {el.id}</b>
                        <p>Producto: {el.name}</p>
                 

                        <p>Fecha: {milisegundosComoFecha(el.duration)}</p>
                        
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
