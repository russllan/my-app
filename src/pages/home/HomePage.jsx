import React from 'react'
import css from './HomePage.module.css';
import Carts from '../../Components/carts/Carts';

function HomePage({ res }) {

    const renderCarts = (d) => {
        return d.length ? (
            d.map((item)=> (
                <Carts
                key = {item.id}
                text = {item.name}
                year = {item.year}
                price = {item.price}
                numberOfSeats = {item.numberOfSeats}
                baggage = {item.baggage}
                transmission = {item.transmission}
                door = {item.door}
                img = {item.imgUrl}
                id = {item.id}
                isAdmin = {false}
                />
            ))
        ) : (
            <h2 className='waterMark'>К сожалению сейчас нет объявлений</h2>
        )
    }

  return (
    <div className={css.HomePage}>
        <h2>Последние объявления</h2>
        <div className={css.cardsWrapper}>
          {
            renderCarts(res)
          }
        </div>
        <br />
    </div>
  )
}

export default HomePage