import "./sec1.css"
import hero from "../../../assets/img/hero.png"





function Section1() {
    return (
        <div>
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

export default Section1;