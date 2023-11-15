import { useNavigate } from "react-router-dom";

function Cpet(){
    let navigate = useNavigate(); 
    const routeChange = (p) =>{
        navigate(p);
    }
    
    return(
        <button class="cadastrarpet" onClick={() => routeChange('/cadastrapet')}>+ Cadastrar Pet</button>
    );
}

export default Cpet;