import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { carsSliceAction } from '../../redux/carsSlice'
import css from './Request.module.css'

function RequestPage() {
    const dispatch = useDispatch()
    const [fio, setFio] = useState("")
    const [paw, setPaw] = useState("")
    const [date, setDate] = useState("")
    const [isShow, setShow] = useState(false)
    const [error, setError] = useState("")
    const handleFio = (e) => {
        setFio(e.target.value)
        dispatch(carsSliceAction.setFio(fio))
    }
    const handlePaw = (e) => {
        setPaw(e.target.value); 
        dispatch(carsSliceAction.setPaw(paw))
        // console.log(paw);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
        dispatch(carsSliceAction.setDate(date))
        // console.log(date);
    }

    const showForm = () => {
        if(fio && paw && date !== ""){
            setShow(true)
        }else{
            setError("Введите данные!")
        }
    }
  if ( isShow ) {
    return (
        <div className={css.isShow}>
            <h1>Ваша бронь активна!</h1>
            <p>Можете забрать свою машину по адресу: "Ахунбаева 133"</p>
            <p>По номеру 0777 888 999</p>
        </div>
    )
  }
  return (
    <div className={css.request}>
        <div>
            <input type="text" placeholder='Введите ФИО' onChange={handleFio} value={fio} />
            <input type="text" placeholder='Введите номер телефона' onChange={handlePaw} value={paw}/>
            <label>Введите дату бронирования</label>
            <input type="date" onChange={handleDate} value={date} className={css.date} />
            <button className={css.btnRequest} value={isShow} onClick={showForm}>Забронировоть</button>
            <h1>{error}</h1>
        </div>
    </div>
  )
}

export default RequestPage