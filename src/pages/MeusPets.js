import "../styles/MainPage.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import "../styles/MeusPets.css";

function MeusPets(){
    return(
        <div class="main">
        <div>
            <SideMenu></SideMenu>
        </div>
        <div class="content">
            <div class="top_buttons">
                <RerturnButton></RerturnButton>
                <button class="cadastrarpet">+ Cadastrar Pet</button>
            </div>
            <div>

            </div>
        </div>
    </div>
    );
}
export default MeusPets;