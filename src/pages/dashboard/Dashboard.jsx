import React from "react";
import css from "./Dashboard.module.css";
import Carts from "../../Components/carts/Carts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Dashboard() {
  const { data } = useSelector((state) => state.cars)
  const { id } = useSelector((state) => state.cars)
  const { fio } = useSelector((state) => state.cars)
  const { paw } = useSelector((state) => state.cars)
  const { date } = useSelector((state) => state.cars)
  const [commission, setCommission ] = useState()
  const [sum,setSum] = useState()
  const newDate = Date.parse(date)
  const past = new Date(newDate)
  const now = new Date()
  const past2 = past.getDate()
  const now2 = now.getDate()

  console.log(id);
  console.log(fio);
  console.log(paw);
  console.log(date);
  console.log(newDate);
  console.log(past + 'past');
  console.log(now+ 'now');
  console.log(past2 + 'past2');
  console.log(now2+ 'now2');
  const navigate = useNavigate()
  const [isRequest, setRequest] = useState(false)

  const renderCards = (e) => {
    return e.length ? (
      e.map((item) => (
        <Carts
          key={item.id}
          text={item.name}
          year={item.year}
          price={item.price}
          numberOfSeats={item.numberOfSeats}
          baggage={item.baggage}
          transmission={item.transmission}
          door={item.door}
          img={item.imgUrl}
          id={item.id}
        />
      ))
    ) : (
      <h2 className="waterMark">К сожалению сейчас нет объявлений</h2>
    );
  };
  const createCard = () => {
    navigate('/createCars')
  }
  const requestClick = () => {
    setRequest(true)
  }

  const res = data.filter(item => item.id==id);
  console.log(res);
  const newRes = data.find(item=>item.id == id);
  console.log(newRes);

  // console.log(res[0].price);

  const getDate = () => {
    if(past2 < now2){
      let resl = res[0].price + res[0].price;
      let comisionResult = resl * 0.1;
      console.log(comisionResult);
      setCommission(comisionResult)
      setSum(resl)
      console.log(resl);
    }else if(past2 == now2){
      let resl = res[0].price + 0
      let comisionResult = resl * 0.1;
      console.log(comisionResult);
      setCommission(comisionResult)
      setSum(resl)
      console.log(resl);
    }else{
      let resl = res[0].price - res[0].price
      let comisionResult = resl * 0.1;
      console.log(comisionResult);
      setCommission(comisionResult)
      setSum(resl)
      console.log(resl);
    }
  }

  if(isRequest){
    return (
      <div className={css.requsetWrap}>
        <div className={css.reqLeft}>
          {renderCards(res)}
          <h2 className={css.h20}>Название машины: {newRes.name} {newRes.year}</h2>
          <h3>Цена: ${newRes.price}</h3>
          <p>Клиент: {fio}</p>
          <p>Контактные данные клиента: {paw}</p>
          <p>Дата начало бронирования: {date}</p>
          <button className={css.btnDate} onClick={getDate}>Рассчитать цену</button>
          <p>Сумма составляет: {sum}</p>
          <p>Учёт комиссии: {commission}</p>
          <p></p>
        </div>
      </div>
    )
  }

  return (
    <div className={css.Dashboard}>
      <div className={css.createCard}>
        <div className={css.admin}>
          <h1>Админ панель</h1>
          <button className={css.btnRequest} onClick={requestClick}>+ Бронь клиентов</button>
          <button className={css.btnCreate} onClick={createCard}>
            + Создать карточку объявления
          </button>
        </div>
        <h2>Мои объявления</h2>
        <div className={css.cardsWrapper}>{renderCards(data)}</div>
      </div>
      <div className={css.requestt}>Заявки и прокаты</div>
    </div>
  );
}

export default Dashboard;
