import "../styles/MainPage.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import "../styles/adocoes.css";

function Adocoes(){
    return(
        <div class="main">
        <div>
            <SideMenu></SideMenu>
        </div>
        <div class="content">
            <div>
                <RerturnButton></RerturnButton>
            </div>
            <div class="adocoes">
                <p>Nenhuma adoção realizada ainda :(</p>
            </div>
        </div>
    </div>
    );
}
export default Adocoes;