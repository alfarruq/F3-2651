
import './header.css'
import logo from '../../assets/img/logo.png'




function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <img src={logo} alt="Logo" />
                    <nav>
                        <ul>
                            <li><a href="#">Как это работает</a></li>
                            <li><a href="#">Инструкции</a></li>
                            <li><a href="#">Продукты</a></li>
                            <li><a href="#">База знаний</a></li>
                            <li><a href="#">О нас</a></li>
                            <button>Вход</button>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Header;