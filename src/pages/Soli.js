import SideMenu from "../components/SideMenu";
import RerturnButton from "../components/ReturnButton";
import "../styles/solicitacoes.css";

function Soli(){
    return(
        <div className="main">
            <div>
                <SideMenu></SideMenu>
            </div>
            <div className="content">
                <div className="top_buttons">
                    <RerturnButton></RerturnButton>
                </div>
                <div className="pedido">
                    <div class="pedidoinfo">
                        <p>Dono: Marcos</p>
                        <p>Data: 01/11/2023</p>
                        <p>Nome do pet: Faisca</p>
                        <p>Raça: Beagle</p>
                    </div>
                    <div class="pedidobtns">
                        <button>Ver perdil do Dono</button>
                        <button>Visualizar Pet</button>
                        <button id="aceitar">Aceitar</button>
                        <button id="recusar">Recusar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Soli;