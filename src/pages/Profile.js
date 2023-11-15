import "../styles/MainPage.css"
import "../styles/Profile.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";

function Profile(){
    return(
        <div class="main">
            <div>
                <SideMenu></SideMenu>
            </div>
            <div class="content">
                <div>
                    <RerturnButton></RerturnButton>
                </div>
                <div class="profile">
                    <div class="box-profile"> 
                        <div class="info-profile">
                            <p>NOME:</p>
                            <p>DOCUMENTO</p>
                            <p>E-MAIL:</p>
                            <p>CELULAR:</p>
                            <p>RUA:</p>
                            <p>BAIRRO:</p>
                            <p>N°:</p>
                            <p>CIDADE:</p>
                            <p>CEP:</p>
                        </div>
                        <div class="info-profile">
                            <p>João Tadeu Silva</p>
                            <p>123.123.123-12</p>
                            <p>tadeusilva@exemplo.com</p>
                            <p>(15)99999-8888</p>
                            <p>Kleber Vicente Lima</p>
                            <p>-------------</p>
                            <p>-------------</p>
                            <p>-------------</p>
                            <p>-------------</p>
                        </div>
                    </div>
                    <button>Editar</button>
                </div>
            </div>
        </div>
    );
}
export default Profile;