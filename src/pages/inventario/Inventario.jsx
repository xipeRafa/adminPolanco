



export default function Inventario({ arr }) {



    const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  
    const milisegundosComoFecha = (milisegundos) => {
          return formateador.format(new Date(milisegundos));
    }; 

    return (
        <>
            <h3>INVENTARIO <span className='number'> { arr.length}</span></h3>
            {arr.map((el, i) => (
                <div key={i} className="item">
                    <hr />

                    {/*<div className='img'>
                <img src={el.imgUrl} alt='img' />
            </div>*/}

                    <div className="texto">
                        <h3>Nombre: {el.name}</h3>
                        <b>ID: {el.id}</b>
                        <p>Sucursal: {el.sucursal}</p>
                        <p>Categoria: {el.category}</p>
                        <p>Color: {el.color}</p>
                        <p>Tela: {el.tela}</p>

                        <p>Fecha: {milisegundosComoFecha(el.duration)}</p>
                        <p>Correo: {el.email}</p>
                        
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
