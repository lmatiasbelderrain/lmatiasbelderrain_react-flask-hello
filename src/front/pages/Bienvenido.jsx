import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

const Bienvenido = () => {
    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container text-center mt-4">
            <h1>Bienvenido:</h1>
            <h3>{store.profile.email}</h3>
            <hr/>
        </div>
    )
}
export default Bienvenido