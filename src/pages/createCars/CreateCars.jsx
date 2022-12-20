import React from 'react'
import css from './CreateCars.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { carsSliceAction } from '../../redux/carsSlice';

function CreateCars() {
    const {data} = useSelector((state) => state.cars)
    console.log(data);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [year,setYear] = useState("")
    const [price,setPrice] = useState("")
    const [seats,setSeats] = useState("")
    const [baggage,setBaggage] = useState("")
    const [transmission,setTran] = useState("")
    const [door,setDoor] = useState("")
    const [img,setImg] = useState("")
    const [id,setId] = useState("")

    const handleName = (e) => setName(e.target.value);
    const handleYear = (e) => setYear(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleSeats = (e) => setSeats(e.target.value);
    const handleBaggage = (e) => setBaggage(e.target.value);
    const handleTran = (e) => setTran(e.target.value);
    const handleDoor = (e) => setDoor(e.target.value);
    const handleImg = (e) => setImg(e.target.value);
    const handleId = (e) => setId(e.target.value);

    const newData = [{
        id: id,
        name: name,
        year: year,
        price: price,
        numberOfSeats: seats,
        baggage: baggage,
        transmission: transmission,
        door: door,
        imgUrl: img
    }]
    console.log(newData);

    const create = () => {
        Array.prototype.push.apply(newData, data)
        dispatch(carsSliceAction.setCars(newData));
        console.log(data);
        navigate('/Dashboard');
    }

  return (
    <div className={css.wrapper}>
        <div className={css.inputCars}>
            <input type="text" placeholder='name cars'  value={name} onChange={handleName} />
            <input type="text" placeholder='year cars' value={year} onChange={handleYear}/>
            <input type="text" placeholder='price cars' value={price} onChange={handlePrice}/>
            <input type="text" placeholder='number of seats cars' value={seats} onChange={handleSeats}/>
            <input type="text" placeholder='baggage cars' value={baggage} onChange={handleBaggage}/>
            <input type="text" placeholder='transmission cars' value={transmission} onChange={handleTran}/>
            <input type="text" placeholder='door cars' value={door} onChange={handleDoor}/>
            <input type="text" placeholder='photo cars' value={img} onChange={handleImg}/>
            <input type="text" placeholder='id cars' value={id} onChange={handleId}/>
        </div>
        <button className={css.createBtn} onClick={create}>Создать</button>
    </div>
  )
}

export default CreateCars