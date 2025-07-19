
import './header.css'
import logo from '../../assets/img/logo.png'
import hero from "../../assets/img/hero.png"



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
            <section className='hero'>
                <div className="container">
                    <div className="textHero">
                        <h1>Управление запасами розничного магазина</h1>
                        <p>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
                        <button>Заказать демонстрацию</button>
                    </div>
                    <img src={hero} alt="hero png" />
                </div>
            </section>
        </div>
    )
}

export default Header;