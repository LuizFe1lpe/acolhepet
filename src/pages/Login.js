import Logo from '../components/Logo';
import LoginText from '../components/LoginText';
import BotaoLogin from '../components/ButtonLogin'

import { useNavigate } from "react-router-dom";

function Login(){
    let navigate = useNavigate(); 
    
    const routeChange = (p) =>{
        navigate(p);
    }

    return(
        <form>
            <Logo></Logo>
            <LoginText typeText="email" placeholderText="e-mail" idname="email"></LoginText>
            <LoginText typeText="password" placeholderText="senha" idname="senha"></LoginText>
            <BotaoLogin></BotaoLogin>
            <a href='#' target='_self' onClick={() => routeChange('/singup')}>não tenho cadastro</a>
            <a href='#'target='_self'>esqueci minha senha</a>
        </form>
    );
}
export default Login;