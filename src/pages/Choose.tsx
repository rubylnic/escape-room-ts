
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MyCalendar from '../components/Calendar';
import { setBg } from '../store/bgSlice';
import { date, time, price } from '../store/questInfoSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectChosenQuest } from '../store/questsSlice';
import ChooseSlots from '../components/choose/ChooseSlots';

export default function Choose() {
    const [ifOpenCalendar, setIfOpenCalendar] = useState(false)
    const dispatch = useAppDispatch();
    const chosenDate = useAppSelector(date);
    const chosenTime = useAppSelector(time);
    const chosenPrice = useAppSelector(price);
    const quest = useAppSelector(selectChosenQuest);


    useEffect(() => {
        dispatch(setBg(''));
    }, [])


    function onOpenCalendar() {
        setIfOpenCalendar(!ifOpenCalendar)
    }

    return (
        <section className="choose">
            <div className="choose__container">
                <div className="choose__genre">
                    <p>выбранный квест</p>
                    <span>{quest?.genre}</span>
                </div>
                <h2>{quest?.name}</h2>

                <div className="choose__link-container">
                    <MyCalendar ifOpen={ifOpenCalendar} setIfOpen={setIfOpenCalendar} />

                    <button className='choose__date-button' onClick={onOpenCalendar}>Выберите дату</button>
                    <div className="choose__link-date">
                        <a href="#">{chosenDate.day + ' ' + chosenDate.month}</a>
                    </div>
                </div>
                <ul className="choose__description-list">
                    <li className="choose__description-item">
                        <span className="choose__description-square choose__description-square--transparent"></span>
                        <span className="choose__description-text"> — сводобно</span>
                    </li>
                    <li className="choose__description-item">
                        <span className="choose__description-square choose__description-square--orange"></span>
                        <span className="choose__description-text"> — занято</span>
                    </li>
                    <li className="choose__description-item">
                        <span className="choose__description-square choose__description-square--green"></span>
                        <span className="choose__description-text"> — выбрано вами</span>
                    </li>
                </ul>

                <ChooseSlots />

                {chosenTime ? <div className="choose__info">
                    <div className="choose__info-text">
                        <span>Вы выбрали игру</span>
                        <div className="choose__info-date">
                            <span>{chosenDate.day + ' ' + chosenDate.month} в {chosenTime}. </span>
                        </div>
                        <div className="choose__info-price">
                            <span>К оплате {chosenPrice} рублей.</span>
                        </div>
                    </div>
                    <Link className="choose__info-pay" to='/escape-room-ts/payment'>Перейти к оплате</Link>
                </div> : ''}
            </div>
        </section>
    )
}
