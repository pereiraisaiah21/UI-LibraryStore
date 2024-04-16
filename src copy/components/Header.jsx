import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <a className="header__logo" href="/" title="Voltar home">
                    Livraria do Senado
                </a>
                <nav className="header__pages">
                    <a href="#">Home</a>
                    <a href="#">Categorias</a>
                    <a href="#">Fale conosco</a>
                    <a href="#">Como comprar</a>
                    <a href="#">Livros</a>
                </nav>
                <div className="header__search">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="header__searchInput"
                    />
                    <AiOutlineSearch className="header__searchIcon" />
                </div>
                <div className="header__icons">
                    <AiOutlineShoppingCart className="header__cartIcon" />
                    <AiOutlineUser className="header__userIcon" />
                </div>
            </div>
        </header>
    )
}

export default Header
