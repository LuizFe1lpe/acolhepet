import Logo from './Logo';
import LoginText from './LoginText';
import BotaoLogin from './ButtonLogin'

function Login(){
    return(
        <form>
            <Logo></Logo>
            <LoginText typeText="email" placeholderText="e-mail" idname="email"></LoginText>
            <LoginText typeText="password" placeholderText="senha" idname="senha"></LoginText>
            <BotaoLogin></BotaoLogin>
            <a href='#' target='_self'>não tenho cadastro</a>
            <a href='#'target='_self'>não consigo logar</a>
        </form>
    );
}
export default Login;