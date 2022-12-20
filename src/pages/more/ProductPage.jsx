import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from '../../Components/carousel/Carousel'
import Carts from '../../Components/carts/Carts'
import { data } from '../../constants/productPage/data'
import css from './ProductPage.module.css'

function ProductPage() {
  const {id} = useParams()
  const renderCarts = (d) => {
    return d.length ? (
      d.map((item)=>(
        <Carts 
        key= {item.id}
        text = {item.name}
        year = {item.year}
        price = {item.price}
        numberOfSeats = {item.numberOfSeats}
        baggage = {item.baggage}
        transmission = {item.transmission}
        door = {item.door}
        img = {item.imgUrl}
        id = {item.id}
        />
      ))
    ):(
      <h2>Error</h2>
    )
  }
  return (
    <div className={css.ProductPage}>
      <Carousel/>
      <h1>{renderCarts(data)}</h1>
    </div>
  )
}

export default ProductPage