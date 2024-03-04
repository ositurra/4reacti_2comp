import { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña1, setContraseña1] = useState("");
    const [contraseña2, setContraseña2] = useState("");
    const [error,setError]=useState(false)

    const validarDatos = (e) => {
        //funcion antes de enviar el formulario
        e.preventDefault()

        //validacion si es que input esta vacio
        if (nombre === '' || email === '' || contraseña1 === "" | contraseña2 === '') {
            setError(true);
            return;
        }
        setError(false);
        setNombre('');
        setEmail('');
        setContraseña1('');
        setContraseña2('');

    };


    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                <div className="form-group">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                        placeholder="Nombre"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="tuemail@ejemplo.cl"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password1"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setContraseña1(e.target.value)}
                        value={contraseña1}
                        placeholder="Contraseña"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password2"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setContraseña2(e.target.value)}
                        value={contraseña2}
                        placeholder="Confirma tu constraseña"
                    />
                </div>
                <br />

                <button type="submit" className="btn btn-primary">Enviar</button>{error ? <p className="error">Todos los campos son obligatorios</p> : null}
            </form>


        </>
    )


}

export default Formulario