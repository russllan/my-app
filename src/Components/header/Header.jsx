import { Link } from 'react-router-dom';
import LoginPage from '../../pages/login/LoginPage';
import './Header.css';

const Header = () => {
    return(
        <header>
            <Link  to='/'><h1> <span> Auto</span>Park.kg</h1></Link>
            <a href="#">Наш автопарк</a>
            <a href="#">Услоивя аренды</a>
            <a href="#">О компании</a>
            <Link to="/LoginPage" element={<LoginPage/>}>Войти</Link>
        </header>
    )
}

export default Header;