import "../styles/Return.css";

function RerturnButton(){
    return(
        <a class="return">
            <img src={require("../assets/icone_voltar.png")}></img>
        </a>
    );
}

export default RerturnButton;