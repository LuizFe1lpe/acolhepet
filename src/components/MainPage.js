import "../styles/MainPage.css"
import SideMenu from "./SideMenu";
import RerturnButton from "./ReturnButton";
import SearchArea from "./SearchArea";
import Card from "./Card";

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