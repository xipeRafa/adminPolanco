export default function OrdersHillo({ arrOrders }) {
    return (
        <>
        <h3>PRODUCTOS YA ENTREGADOS <span className='number'> { arrOrders.filter((el) => el.takenByCustomer === true).length}</span></h3>
            {arrOrders
                .filter((el) => el.takenByCustomer === true)
                .map((el, i) => (
                    <div key={i} className="item">

                       <hr />

                        <div className="texto">
                            <h3>Comprador: {el.buyer.name}</h3>

                            {el.items.map((el, i) => (
                                  <b>Producto ID: {el.id} <br /><br /></b>
                            ))}

                            <p>Correo: {el.buyer.email}</p>
                            <p>Celular: {el.buyer.phone}</p>
                            <p>Ciudad: {el.city}</p>
                            <p>Clave de Compra: {el.id}</p>

                            <p>
                                Fecha:
                                {new Date(el.date).toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                            <p>Total: {el.total}</p>
                            <b>Status: {el.takenByCustomer ? 'Entregado' : 'Pendiente'}</b>
                        </div>

                           <hr />

                    </div>
                ))}
        </>
    );
}
