import Logo from './Logo';
import '../styles/SideMenu.css';

import iconeUsuario from "../assets/icone_usuario.png";
import iconePet from "../assets/icone_pet.png";
import iconeHistorico from "../assets/icone_histórico.png";

import { useNavigate } from "react-router-dom";

function SideMenu(){
    
    let navigate = useNavigate(); 
    const routeChange = (p) =>{
        navigate(p);
    }

    return(
        <div className="side-container">
            <nav>
                <Logo></Logo>
                <ul>
                    <li onClick={() => routeChange('/profile')}>
                        <img src={iconeUsuario} ></img>
                        <a>MEUS<br></br> DADOS</a>
                    </li>
                    <li onClick={() => routeChange('/meuspets')}>
                        <img src={iconePet}></img>
                            <a>MEUS<br></br> PETS</a>
                        </li>
                    <li onClick={() => routeChange('/adocoes')}>
                        <img src={iconeHistorico}></img>
                        <a>ADOÇÕES</a>
                    </li>
                    <li onClick={() => routeChange('/adocoes')}>
                        <a>SOLICITAÇÕES</a>
                    </li>
                    <li className="exit" onClick={() => routeChange('/')}>
                        <a>SAIR</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default SideMenu;