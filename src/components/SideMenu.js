import Logo from './Logo';
import '../styles/SideMenu.css';

import iconeUsuario from "../assets/icone_usuario.png";
import iconePet from "../assets/icone_pet.png";
import iconeHistorico from "../assets/icone_histórico.png";

import { useNavigate } from "react-router-dom";

let path = '/';
function SideMenu(){

    let navigate = useNavigate(); 
    const routeChange = (p)=>{
        navigate(path);
    }

    return(
        <div class="side-container">
            <nav>
                <Logo></Logo>
                <ul>
                    <li><img src={iconeUsuario}></img><a>MEUS<br></br> DADOS</a></li>
                    <li><img src={iconePet}></img><a>MEUS<br></br> PETS</a></li>
                    <li><img src={iconeHistorico}></img><a>ADOÇÕES</a></li>
                    <li class="exit"><a onClick={routeChange}>SAIR</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default SideMenu;