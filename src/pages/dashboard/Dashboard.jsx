import React from "react";
import css from "./Dashboard.module.css";
import Carts from "../../Components/carts/Carts";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const { data } = useSelector((state) => state.cars)
  const navigate = useNavigate()

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

  return (
    <div className={css.Dashboard}>
      <div className={css.createCard}>
        <div className={css.admin}>
          <h1>Админ панель</h1>
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
