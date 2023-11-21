import "../styles/MainPage.css"
import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import "../styles/MeusPets.css";
import "../styles/cadastrapet.css";
import React from "react";


function CadastarPet(){
    return(
        <div className="main">
                <div>
                    <SideMenu></SideMenu>
                </div>
            <div className="content">
                <div>
                    <RerturnButton></RerturnButton>
                </div>
                <div className="cadastracontainer">
                    <div className="cadastrapet">
                        <label id="nome">Nome:<input type="text" id="nome"></input></label>
                        <label id="data">Data de Nascimento:<input type="date" id="data"></input></label>
                        <label id="desc">Descrição:<input type="textbox" id="desc"></input></label>
                        <label id="foto">Foto do pet:<input type="file" id="foto" accept="image/png, image/jpeg"></input></label>
                    </div>
                    <div className="cadastrapet2">
                        <fieldset className="castrado">
                            <legend>Castrado?</legend>
                            <label>Sim<input type="radio" id="sim" name="c" defaultChecked></input></label>
                            <label>Não<input type="radio" id="nao" name="c" ></input></label>
                        </fieldset>
                        <select id="tipo" name="tipo">
                            <option value="cachorro" defaultValue="cachorro">Cachorro</option>
                            <option value="gato">Gato</option>
                        </select>
                        <label>Raça:</label>
                        <select id="racas">
                            <option value="indefiunido">Indefinido</option>
                        </select>
                    </div>
                </div>
                <div className="cadastrapetbtn">
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                </div>
            </div>
        </div>
    );
}
export default CadastarPet;