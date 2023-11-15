import "../styles/MainPage.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import "../styles/MeusPets.css";
import "../styles/cadastrapet.css";

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
                <div class="cadastracontainer">
                    <div class="cadastrapet">
                        <label for="nome">Nome:<input type="text" id="nome" name="nome"></input></label>
                        <label for="nome">Data de Nascimento:<input type="date" id="data" name="data"></input></label>
                        <label for="nome">Descrição:<input type="textbox" id="desc" name="desc"></input></label>
                        <label for="nome">Foto do pet:<input type="file" id="foto" name="foto" accept="image/png, image/jpeg"></input></label>
                    </div>
                    <div class="cadastrapet2">
                        <fieldset class="castrado">
                            <legend>Castrado?</legend>
                            <label for="nome">Sim<input type="radio" id="sim" name="castrado" checked></input></label>
                            <label for="nome">Não<input type="radio" id="nao" name="castrado"></input></label>
                        </fieldset>
                        <fieldset class="castrado">
                            <label for="nome">Gato<input type="radio" id="gato" name="tipo" checked></input></label>
                            <label for="nome">Cachorro<input type="radio" id="cachorro" name="tipo"></input></label>
                        </fieldset>
                        <label for="cars">Raça:</label>
                            <select id="racas" name="racas">
                            <option value="Indefinida">Indefinida</option>
                            <option value="Chiuaua">Chiuaua</option>
                            <option value="Labrador">Labrador</option>
                            <option value="Beagle">Beagle</option>
                            <option value="Huskey">Huskey</option>
                            <option value="São Bernado">São Bernado</option>
                            <option value="Buldog">Buldog</option>
                            <option value="Pastor Alemão">Pastor Alemão</option>
                            <option value="Border Collie">Budercolie</option>
                        </select>
                    </div>
                </div>
                <div class="cadastrapetbtn">
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                </div>
            </div>
        </div>
    );
}
export default CadastarPet;