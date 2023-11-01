import Logo from './Logo';
import '../styles/SideMenu.css';

import iconeUsuario from "../assets/icone_usuario.png";
import iconePet from "../assets/icone_pet.png";
import iconeHistorico from "../assets/icone_histórico.png";

import { useNavigate } from "react-router-dom";
let navigate;

function SideMenu(){
    navigate = useNavigate(); 
    return(
        <div class="side-container">
            <nav>
                <Logo></Logo>
                <ul>
                    <li onClick={navigate("/profile")}>
                        <img src={iconeUsuario}></img>
                        <a>MEUS<br></br> DADOS</a>
                    </li>
                    <li onClick={navigate("/meuspets")}>
                        <img src={iconePet}></img>
                            <a>MEUS<br></br> PETS</a>
                        </li>
                    <li onClick={navigate("/adocoes")}>
                        <img src={iconeHistorico}></img>
                        <a>ADOÇÕES</a>
                    </li>
                    <li class="exit" onClick={navigate("/")}>
                        <a>SAIR</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default SideMenu;