import '../styles/buttonlogin.css';
import { useNavigate } from "react-router-dom";


function ButtonLogin(){
    let navigate = useNavigate(); 

    const Authentication =() =>{
        let e = document.getElementById('email').value;
        let s = document.getElementById('senha').value;
        console.log(e,s);


        if(e =="teste@teste.com" && s =="123456"){
            routeChange();
        }
    }

    const routeChange = () =>{
        let path = '/main';
        navigate(path);
    }

    return(
        <button onClick={Authentication}>Entrar</button>
    );
}
export default ButtonLogin;