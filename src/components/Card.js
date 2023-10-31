import '../styles/card.css'

function Card(){
    return(
        <div class="card">
            <div class="image-holder">
                <img src={require("../assets/fred.png")} class="pet-thumbnail"></img>
            </div>
            <div class="info-container">
                <div class="info1">
                    <p class="pet-name">Fred</p>
                    <p>Golden Retriver</p>
                    <p>Filhote, 1 ano</p>
                </div>
                <div class="info2"> 
                    <img class="genre" src={require("../assets/icone_macho.png")}></img>
                    <p>dono: Marcos</p>
                    <p class="location">Sorocaba-SP</p>
                </div>
            </div>
        </div>
    );
}

export default Card;