import "../styles/MainPage.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";

function MeusPets(){
    return(
        <div class="main">
        <div>
            <SideMenu></SideMenu>
        </div>
        <div class="content">
            <div>
                <RerturnButton></RerturnButton>
            </div>
            <div>

            </div>
        </div>
    </div>
    );
}
export default MeusPets;