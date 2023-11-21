import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import '../styles/fred.css';

function Fred(){
    return(
    <div class="main">
        <div>
            <SideMenu></SideMenu>
        </div>
        <div class="content">   
            <div class="top_buttons">
                <RerturnButton></RerturnButton>
            </div>
            <div className="fred">
                <img src={require("../assets/fred.png")}></img>
                <div className="colunas">
                    <div className="coluna1">
                         <h4>Fred</h4>
                         <p>Golden Retriver</p>
                        <p>Filhote</p>
                        <p>Nasceu: 01/08/2023</p>
                        <img class="genre" src={require("../assets/icone_macho.png")}></img>
                    </div>
                    <div className="coluna2">
                        <h4>Contato</h4>
                        <p>dono: Marcos Tadeu de S.</p>
                        <p>Contato: </p>
                        <p>(15)9987-6543</p>
                        <p>marcosts@gmail.com</p>
                    </div>
                    <div className="coluna1">
                        <h4>Localização</h4>
                        <p>Arnaldo Barboza Santos, 93</p>
                        <p>Piazza di Roma 2</p>
                        <p>Sorocaba-SP</p>
                        <p>CEP: 18051819</p>
                    </div>
                </div>
                <div className="colunas">
                    <div className="coluna1">
                        <h4 className="descricao">Descrição</h4>
                        <p>Fofo e brincalhão</p>
                    </div>
                    <div className="colunas2">
                        <h4>Digite uma mensagem para o dono</h4>
                        <input type="textarea"></input>
                    </div>
                </div>
            </div>
            <button id="btnsolicita">Solicitar<br></br> Adoção</button>
        </div>
    </div>  
    );
}
export default Fred;