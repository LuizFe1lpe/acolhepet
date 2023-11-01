import "../styles/MainPage.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import SearchArea from "../components/SearchArea";
import Card from "../components/Card";

function MainPage(){
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
                    <SearchArea></SearchArea>
                </div>
                <div>
                    <Card></Card>
                </div>
            </div>
        </div>
    );
}

export default MainPage;