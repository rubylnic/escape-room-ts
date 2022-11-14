import React from 'react'
import type { BookInfo } from '../../store/bookInfoSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPrice, setTime, time } from '../../store/questInfoSlice';

export default function ChooseSlot(item: BookInfo) {
    const dispatch = useAppDispatch();
    const chosenTime = useAppSelector(time);
    let className = "";
    function onChoose() {
        if (item.taken) {
            return null;
        }
        dispatch(setTime(item.time))
        dispatch(setPrice(item.price))
    }
    if (item.taken) {
        className = "choose__item--taken"
    }
    if (item.time === chosenTime) {
        className = "choose__item--chosen"
    }
    return (
        <li className={`choose__item ${className}`} onClick={onChoose}>
            {item.time}
            <span>{item.price} ₽</span>
        </li>
    )

}
