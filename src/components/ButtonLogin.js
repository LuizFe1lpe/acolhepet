import '../styles/buttonlogin.css';
import { useNavigate } from "react-router-dom";


function ButtonLogin(){
    let navigate = useNavigate(); 
    const routeChange = () =>{
        let path = '/main';
        navigate(path);
    }

    return(
        <button onClick={routeChange}>Entrar</button>
    );
}
export default ButtonLogin;