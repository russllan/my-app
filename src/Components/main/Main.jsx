import { useSelector } from 'react-redux';
import './Main.css';


const Main = () => {
    
    // async function dateBase(){
    //     let response = await fetch('https://632ee37cb56bd6ac45a69446.mockapi.io/db/marks')
    //     let data = await response.json();
    //     console.log(data);
    // }
    // dateBase();

    const { data } = useSelector((state) => state.cars)
    const renderCarts = (d) => {
        
    }
    return(
        <div className="wrapper">
            <h1>ПРОКАТ АВТОМОБИЛЕЙ В БИШКЕКЕ</h1>
            <p>Выберите подходящий Вам вариант</p>
            <div>
                <select name="" id="mark">
                    <option value="allMark">Все Марки</option>
                    <option value="huyndaiMark">Аренда Hyundai</option>
                    <option value="huyndaiMark">Аренда Lexus</option>
                    <option value="huyndaiMark">Аренда Mercedec</option>
                    <option value="huyndaiMark">Аренда Nissan</option>
                    <option value="huyndaiMark">Аренда Moto</option>
                </select>
                <select name="" id="class">
                    <option value="allClass">Все классы</option>
                    <option value="vipClass">Вип Авто</option>
                    <option value="vneClass">Внедорожник</option>
                    <option value="crosClass">Кроссовер</option>
                    <option value="minClass">Минивэн</option>
                    <option value="motoClass">Мотоцикл</option>
                    <option value="retroClass">Ретро</option>
                    <option value="dopClass">Доп. оборудование</option>
                </select>
                <select name="" id="price">
                    <option value="priceBig">Цены по возрастанию</option>
                    <option value="priceSmall">Цены по убыванию</option>
                </select>
                <button className='btn' onClick>
                    Поиск
                </button>
            </div>
        </div>
    )
}

export default Main;