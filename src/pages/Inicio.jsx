import { useEffect, useState } from "react";




export default function Inicio({arr, setGetArr, getArr, UpdateByIdInventario}) {


    const formateador = new Intl.DateTimeFormat("es-MX", {
        dateStyle: "long",
        timeStyle: "short",
    });

    const milisegundosComoFecha = (milisegundos) => {
        return formateador.format(new Date(milisegundos));
    };



     useEffect(() => {
        setGetArr(!getArr);
        setTimeout(() => {
            localStorage.removeItem("look");
        }, 14000);
    }, []);





    let look = localStorage.look?.slice(41, 61);

    const [valueState, setValueState] = useState(look || "");

    const handleSearch = (e) => {
        const { value } = e.target;
        setValueState(value);
    };


    if (valueState.length > 3) {
        arr = arr.filter((el) => el.id == valueState);
    } else {
        arr = [];
    }

    const[noteState, setNoteState]=useState('')




    let currentDate = new Date();

    let dueDate = currentDate.setHours(
        currentDate.getHours() /* + itemDuration.current.value */,
    );



    const[tallaState, setTallaState]=useState('')

    const handleTallaState=(e)=>{
        let talla = e.target.value

        if(e.target.value.length>2){
            return
        }
        setTallaState(talla)
    }





    const handleSales = (id, el) => {

        let newTallasValue = el.talla.filter(el => el !== tallaState)

        el.takenByCustomer = true;
        el.tallaComprada = tallaState
        el.talla = newTallasValue

        if (el.historiSales === undefined) {

                el.historiSales = [];
                el.historiSales.push(dueDate);

                el.notaDeVenta = []
                el.notaDeVenta.push(noteState)

        } else {

                el.historiSales.push(dueDate);
                el.notaDeVenta.push(noteState)

        }




        if (el?.stockHermosillo === undefined) {

                el.stockSanCarlos = el?.stockSanCarlos - 1;
                UpdateByIdInventario(el.id, el);

        } else {

                el.stockHermosillo = el?.stockHermosillo - 1;
                UpdateByIdInventario(el.id, el);
        }

        setTimeout(() => {
            setGetArr(!getArr);
            setTallaState('')
            setNoteState('')
        }, 500);

    };



   









    return (
        <>
            {/*<input
                //style={{display:'none'}}
                type="search"
                className="searchInput"
                value={valueState}
                placeholder="buscar"
                onChange={handleSearch}
            />*/}

            <h3> QR SCANNER</h3>

            {arr.map((el, i) => (
                <div
                    key={i}
                    className="item"
                    onClick={() => setValueState(el.id)}
                >
                    <hr />

                    {valueState.length > 3 && (
                        <div>
                            <img style={{width:'180px'}} src={el.imgUrl} alt="img" />
                        </div>
                    )}

                    <div className="texto">
                        <h3>Nombre: {el.name}</h3>
                        <p>ID: {el.id}</p>
                        <p>Sucursal: {el.sucursal}</p>
                        <span>Tallas: </span>
                        {el.talla.map((el, i)=>(
                            <span key={i+'ta'}> {el},</span>
                        ))}

                        {/*<p>Inventario: {milisegundosComoFecha(el.duration)}</p>*/}
                    </div>

                    <div className="texto">
                        <p>
                            Stock: {el?.stockSanCarlos}
                            {el?.stockHermosillo}
                        </p>


                        <b>Precio: $ {el.price}</b>
                    </div>

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

                    <br />

                    <input type="text" placeholder='Talla Escogida' value={tallaState} onChange={(e)=>handleTallaState(e)}/><br />

                    <input className='mb-3 mt-1' type="number" min='0' placeholder='# Nota de Venta' value={noteState} onChange={(e)=>setNoteState(e.target.value)}/>


                    <br />

                    <button
                        disabled={el?.stockSanCarlos < 1 || el?.stockHermosillo < 1 ? true : false}
                        style={{ backgroundColor: "yellow" }}
                        onClick={() => {

                            if(tallaState.length <= 0){
                                alert('Falta la Talla del Producto')
                                return
                            }

                            if(noteState.length <= 0){
                                alert('Falta el Numero Nota de Venta')
                                return
                            }

                            if (window.confirm(`Marcar ${el.name} como Pagado?`)) {
                                handleSales(el.id, el);
                            }

                        }}
                    >
                        {el?.stockSanCarlos < 1 || el?.stockHermosillo < 1 ? "Producto Agotado" : 'Marcar como Pagado'} 
                    </button>
                    <hr />
                </div>
            ))}
        </>
    );
}
