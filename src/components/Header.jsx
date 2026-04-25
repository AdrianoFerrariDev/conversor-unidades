import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <h1>Conversor de Unidades</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/comprimento">Comprimento</Link>
                    <Link to="/area">Área</Link>
                    <Link to="/volume">Volume</Link>
                    <Link to="/massa">Massa</Link>
                    <Link to="/velocidade">Velocidade</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;