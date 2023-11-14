import "../styles/emptypet.css";
import Pet from "../assets/pet.png";

function emptypet(){
    return(
        <div class="empty">
            <img  src={Pet}></img>
        </div>
    );
}
export default emptypet;