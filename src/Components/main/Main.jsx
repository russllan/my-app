import { useState } from "react";
import HomePage from "../../pages/home/HomePage";
import "./Main.css";
import { useSelector } from "react-redux";

const Main = () => {
  // async function dateBase(){
  //     let response = await fetch('https://632ee37cb56bd6ac45a69446.mockapi.io/db/marks')
  //     let data = await response.json();
  //     console.log(data);
  // }
  // dateBase();

  const data = useSelector((state) => state.cars.data)

  const [mark, setMark] = useState("allMark");
  const [price, setPrice] = useState("priceBig");
  const [res, setRes] = useState([]);
  const selectChange = (event) => {

    setMark(event.target.value);
    setPrice(event.target.value);
    console.log(event.target.value);
  };

  const search = () => {
    if(mark === 'allMark'){
       setRes(data)
    }else {
        let res = data.filter((name) => {
         return name.name.toLowerCase().includes(mark.toLowerCase());
    });
    setRes(res);
    console.log(res);
    }
  };

  return (
    <div className="wrapper">
      <div className="wrSelect">
        <h1>ПРОКАТ АВТОМОБИЛЕЙ в БИШКЕКЕ</h1>
        <p>Выберите подходящий Вам вариант</p>
        <div>
          <select
            name="selectMark"
            id="mark"
            value={mark}
            onChange={selectChange}
          >
            <option value="allMark">Всё Марки</option>
            <option value="Hyundai">Аренда Hyundai</option>
            <option value="Lexus">Аренда Lexus</option>
            <option value="Mercedes">Аренда Mercedes</option>
            <option value="Nissan">Аренда Nissan</option>
          </select>
          <select
            name="selectPrice"
            id="price"
            value={price}
            onChange={selectChange}
          >
            <option value="priceBig">Цены по возрастанию</option>
            <option value="priceSmall">Цены по убыванию</option>
          </select>
          <button className="btn" onClick={search}>
            Поиск
          </button>
        </div>
      </div>
      <HomePage res={res} />
    </div>
  );
};

export default Main;
