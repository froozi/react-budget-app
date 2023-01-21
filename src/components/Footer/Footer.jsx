import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Главная
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">
                            О нас
                        </NavLink>
                    </li>

                    
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;