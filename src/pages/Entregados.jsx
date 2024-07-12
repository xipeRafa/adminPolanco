

export default function ({arrOrders}) {


    return (
      <>
        
        {arrOrders.filter(el => el.city === 'hermosillo').map((el, i) => (
          <div key={i} className='item'> 

            <div className='texto'>
                <h3>Comprador: {el.buyer.name}</h3>

                    {
                      el.items.map((el,i)=>(
                          <h3>Producto ID: {el.id}</h3>

                        ))
                    }

                <p>Correo: {el.buyer.email}</p>
                <p>Celular: {el.buyer.phone}</p>
             <p>Ciudad: {el.city}</p>
             <p>Clave de Compra: {el.id}</p>

             <p>Fecha: {el.date}</p>
             <p>Total: {el.total}</p>
            </div>
          </div>
        ))}

      </>
    )

  }