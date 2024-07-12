


export default function Inventario({arr}) {

console.log(arr)



    return (
      <>
        
        {arr.map((el, i) => (
          <div key={i} className='item'> 

            <div className='img'>
                <img src={el.imgUrl} alt='img' />
            </div>

            <div className='texto'>
                <h3>{el.name}</h3>
                <p>Categoria: {el.category}</p>
                <p>Color: {el.color}</p>
                <p>Tela: {el.tela}</p>

                <p>Fecha: {el.duration}</p>
                <p>Correo: {el.email}</p>
                <p>Id: {el.id}</p>
            </div>

            <div className='texto'>
                <p>Marca: {el.marca}</p>
                <p>Para: {el.para}</p>
                <p>Precio: {el.price}</p>

                <p>Stock Hermosillo: {el.stockHermosillo}</p>
                <p>Stock San Carlos: {el.stockSanCarlos}</p>
                <p>Talla: {el.talla}</p>
            </div>

            <div className='texto'> 
                <p>Descrpcion: {el.description}</p>
            </div>
    
          </div>
        ))}

      </>
    )
  }
  