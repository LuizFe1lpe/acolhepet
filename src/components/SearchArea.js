import '../styles/SearchArea.css'

function SearchArea(){    
    return(
        <div class='search'>
            <input type="text" placeholder="busque aqui seu futuro pet"></input>
            <button>BUSCAR</button>
            <button>FILTROS</button>
        </div>
    );
}
export default SearchArea;