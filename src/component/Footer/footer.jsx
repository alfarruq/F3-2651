import "./footer.css"
import logo from "../../assets/img/logo1.png"

function Footer() {
    return (
        <div>
            <footer >
                <div className="container">
                    <div className="oneSection">
                        <img src={logo} alt="logo" />
                        <div className="oneCentral">
                            <div className="phoneNumber">
                                <p>Линия консультации</p>
                                <h4>+7(495)-111-00-10</h4>
                            </div>
                            <div className="emailFooter">
                                <p>Наш e-mail</p>
                                <h4>info@rozn.info</h4>
                            </div>
                            <button>Заказать звонок</button>
                        </div>
                        <div className="oneBottom">
                            <p>Для активации перейдите на <a target="blanck" href="https://portal.1c.ru/" >portal.1c.ru</a> или обратитесь к Вашему партнеру 1С.</p>
                            <span>Инструкция по установке сервиса</span>
                        </div>
                    </div>
                    <div className="leftList">
                        <ul>
                            <h1>Информация</h1>
                            <li><a href="#">Как это работает</a></li>
                            <li><a href="#">Инструкции</a></li>
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">О нас</a></li>
                        </ul>
                    </div>
                    <div className="rightList">
                        <ul>
                            <h1>Продукты</h1>
                            <li><a href="#">1С-Ритейл Чекер Демо</a></li>
                            <li><a href="#">1С-Товары.Тестовый для магазина на 1 месяц</a></li>
                            <li><a href="#">1С-Ритейл Чекер</a></li>
                            <li><a href="#">1С-Товары 300</a></li>
                            <li><a href="#">1С-Товары 30000</a></li>
                        </ul>
                    </div>
                </div>  
            </footer>
        </div>
    )
}

export default Footer;