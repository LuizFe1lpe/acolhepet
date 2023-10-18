import Logo from './Logo';
import LoginText from './LoginText';
import BotaoLogin from './ButtonLogin'

function Login(){
    return(
        <form>
            <Logo></Logo>
            <LoginText typeText="email" placeholderText="e-mail" ></LoginText>
            <LoginText typeText="password" placeholderText="senha"></LoginText>
            <BotaoLogin></BotaoLogin>
            <a href='#' target='_self'>não tenho cadastro</a>
            <a href='#'target='_self'>não consigo logar</a>
        </form>
    );
}
export default Login;