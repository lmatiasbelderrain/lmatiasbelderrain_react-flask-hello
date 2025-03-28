import { Link } from "react-router-dom";
import { logout } from "../store";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	let token = store.token



	useEffect(() => {
		console.log("hola")
	}, [token])
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="navbar-brand mb-0 h1">🏚️</span>
				</Link>
				{token == null ?
					<div className="ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary mx-2">Iniciar session</button>
						</Link>
						<Link to="/demo">
							<button className="btn btn-primary">Registrarse</button>
						</Link>
					</div>
					:
					<Link to="/">
						<button className="btn btn-primary" onClick={() => logout(dispatch)}>cerrar sesion</button>
					</Link>

				}
			</div>

		</nav>
	);
};