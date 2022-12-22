import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel } from "../../Components/carousel/Carousel";
import css from "./ProductPage.module.css";
import { HiUsers, HiCheck } from "react-icons/hi2";
import { TfiBriefcase, TfiPanel } from "react-icons/tfi";
import { GiCarDoor } from "react-icons/gi";
import { carsSliceAction } from "../../redux/carsSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate()
  const { data } = useSelector((state) => state.cars);
  const ID = params.id;
  let result = data.find((item) => item.id == ID);
  console.log(result);
  
  useEffect(()=>{
    dispatch(carsSliceAction.setId(ID)); // Id save in redu
  },[]);

  const openAuth = () => {
    navigate('/request')
  }

  return (
    <div className={css.productPage}>
      <div className={css.carousel}>
        <Carousel />
      </div>
      <div className={css.container}>
        <div className={css.wrapperCard}>
          <div className={css.left}>
            <h1>Аренда {result.name} {result.year}</h1>

            <div className={css.icons}>
              <p>
                <HiUsers /> 
                {result.numberOfSeats}
              </p>
              <p>
                <TfiBriefcase /> 
                {result.baggage}
              </p>
              <p>
                <TfiPanel /> 
                {result.transmission}
              </p>
              <p>
                <GiCarDoor /> 
                {result.door}
              </p>
            </div>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              repellendus vero culpa a ipsa. Vero sunt quo omnis commodi.
              Numquam amet voluptates voluptatem voluptatibus quae possimus{" "}
              <br />
              asperiores nostrum necessitatibus doloribus, ex accusamus dolorem
              expedita nesciunt, odit earum id! Consectetur dicta quam facilis
              animi non et ea minus atque deleniti quidem est magnam, maiores
              vel, consequatur ipsam qui quae nam architecto.
            </span>

            <div className={css.priceCards}>
              <div className={css.card}>
                <div className={css.cardTop}>1-3 дней</div>
                <div className={css.cardBottom}>$35</div>
              </div>
              <div className={css.card}>
                <div className={css.cardTop}>4-7 дней</div>
                <div className={css.cardBottom}>$35</div>
              </div>
              <div className={css.card}>
                <div className={css.cardTop}>8 и более дней</div>
                <div className={css.cardBottom}>${result.price}</div>
              </div>
            </div>

            <div className={css.includes}>
              <div>
                <h3>Включено</h3>
              </div>
              <div>
                <p>
                  <HiCheck />
                  USB зарядка
                </p>
                <p>
                  <HiCheck />
                  Подогрев сидений
                </p>
                <p>
                  <HiCheck />
                  Видео регистратор
                </p>
              </div>
              <div>
                <p>
                  <HiCheck />
                  AUX
                </p>
                <p>
                  <HiCheck />
                  Bluetooth
                </p>
              </div>
            </div>
          </div>
          <div className={css.right}>
            <div className={css.wrapperRight}>
              <div className={css.wrTop}>
                  <p>$</p> <h1>  {result.price}  </h1> От / В Сутки
              </div>
              <div className={css.wrBottom}>
                <div className={css.wrLeft}>
                  <h4>Коробка передач</h4>
                  <h4>Тип кузова</h4>
                  <h4>Объём двигателя</h4>
                  <h4>Мощность</h4>
                  <h4>Комплектация</h4>
                  <h4>Цвет</h4>
                  <h4>Год выпуска</h4>
                  <h4>Тип топлива</h4>
                  <h4>Расход</h4>
                  <h4>Тип привода</h4>
                </div>
                <div className={css.wrRight}>
                  <p>автомат</p>
                  <p>седан</p>
                  <p>1.4L</p>
                  <p>108 л.с</p>
                  <p>Кондиционер</p>
                  <p>Белый</p>
                  <p>{result.year}</p>
                  <p>бензин</p>
                  <p>7 л/10 л</p>
                  <p>передний</p>
                </div>
              </div>
            </div>
            <button className={css.btnMake} onClick={openAuth}>Забронировоть</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
