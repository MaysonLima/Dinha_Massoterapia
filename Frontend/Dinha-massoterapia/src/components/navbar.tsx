import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <Link to="/">Início</Link> |{" "}
            <Link to="/servicos">Serviços</Link> |{" "}
            <Link to="/sobre">Sobre</Link> |{" "}
            <Link to="/contato">Contato</Link> |{" "}
        </nav>
    )
}