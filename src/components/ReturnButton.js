import "../styles/Return.css";
import { useNavigate } from "react-router-dom";

function RerturnButton(){
    let navigate = useNavigate(); 
    const routeChange = (p) =>{
        navigate(p);
    }
    return(
        <a className="return" onClick={() => routeChange('/main')}>
            <img src={require("../assets/icone_voltar.png")} ></img>
        </a>
    );
}

export default RerturnButton;