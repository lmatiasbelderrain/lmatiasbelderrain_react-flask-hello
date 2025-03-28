import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";
import { login, registro } from "../store";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const iniciar = async (e) => {
        e.preventDefault()
        let user = {
            email: email,
            password: password
        }
        let reg = await registro(user, dispatch)
        if (reg) {
            alert("registro exitoso")
            let resp = await login(user, dispatch)
            if (resp) {
                navigate("/bienvenido")
            } else {
                alert("algo salio mal")
            }
        } else {
            alert("algo salio mal con el registro")
        }
    }

    return (
        <div className="container">
            <h1 className="text-center">Registrar</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary mx-2" onClick={(e) => iniciar(e)}>Registrarse</button>

                <Link to="/">
                    <button className="btn btn-primary">Back home</button>
                </Link>
            </form>
        </div>
    )
}
export default Registro