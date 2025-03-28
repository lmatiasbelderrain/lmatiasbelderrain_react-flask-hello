import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	

	return (
		<div className="text-center mt-5">
			<h1 className="display-4">Sistema de autentificacion</h1>
			<p className="lead">
				<img src={"https://th.bing.com/th/id/OIP.9oDLu41VuYFe5sj_wvsoxAHaHa?rs=1&pid=ImgDetMain"} className="img-fluid rounded-circle mb-3" alt="Rigo Baby" />
			</p>
			
		</div>
	);
}; 