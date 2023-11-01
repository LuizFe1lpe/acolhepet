import '../styles/loginText.css';

let placeholderText;
let typeText;

function LoginText(props){
    return(
        <input type={props.typeText} placeholder={props.placeholderText} required id={props.idname}></input>
    );
}
export default LoginText;