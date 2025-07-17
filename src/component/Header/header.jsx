

import './header.css'
import logo from '../../assets/img/logo.png'



function Header() {
    return(
        <header>
                <img src={logo} alt="" />
                <ul>
                    <li><a href="">Как это работает</a></li>
                    <li><a href="">Инструкции</a></li>
                    <li><a href="">Продукты</a></li>
                    <li><a href="">Инструкции</a></li>
                    <li><a href="">Инструкции</a></li>
                </ul>
        </header>
    )
}

export default Header;