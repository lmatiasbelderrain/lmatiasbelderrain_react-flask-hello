import { Link } from "react-router-dom";

export const Navbar = () => {
	let token = localStorage.getItem("token")
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				{token=="" ?
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
							<button className="btn btn-primary">cerrar sesion</button>
						</Link>
				}
			</div>

		</nav>
	);
};