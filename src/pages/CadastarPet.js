import "../styles/MainPage.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import "../styles/MeusPets.css";

function CadastarPet(){
    return(
        <div class="main">
                <div>
                    <SideMenu></SideMenu>
                </div>
            <div class="content">
                <div>
                    <RerturnButton></RerturnButton>
                </div>
            </div>
        </div>
    );
}
export default CadastarPet;