import "../styles/MainPage.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import Emptypet from "../components/emptypet";
import "../styles/MeusPets.css";

import { useNavigate } from "react-router-dom";

function MeusPets(){
    return(
        <div class="main">
            <div>
                <SideMenu></SideMenu>
            </div>
            <div class="content">
                <div class="top_buttons">
                    <RerturnButton></RerturnButton>
                    <button class="cadastrarpet" onClick={''}>+ Cadastrar Pet</button>
                </div>
                <div class="meuspets">
                    <p>MeusPets</p>
                    <div class="pets">
                        <Emptypet></Emptypet>
                        <Emptypet></Emptypet>
                        <Emptypet></Emptypet>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MeusPets;