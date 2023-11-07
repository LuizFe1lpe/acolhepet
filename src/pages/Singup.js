import Logo from '../components/Logo';
import '../styles/singup.css';

function Singup(){
    return(
        <form class="singup">
            <Logo></Logo>
            <label for="nome">Nome<input type="text" id="nome" name="nome"></input></label>
            <label for="email">E-mail<input type="email" id="email" name="email"></input></label>
            <label for= "cpf">CPF/CNPJ<input type="text" id="cpf" name="cpf"></input></label>
            <label for= "celular">Celular<input type="text" id="celular" name="celular"></input></label>
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default Singup;