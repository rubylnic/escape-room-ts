import React from 'react'
import { date, time } from '../store/questInfoSlice';
import { selectChosenQuest } from '../store/questsSlice';
import { useAppSelector } from '../store/hooks'

export default function SuccessfulPayment() {
    const chosenDate = useAppSelector(date);
    const chosenTime = useAppSelector(time);
    const chosenQuest = useAppSelector(selectChosenQuest);
    return (
        <div className='quests__container' style={{ color: 'white' }}>
            <h1>Квест успешно забронирован</h1>
            <h2>{`Мы ждем вас  ${chosenDate.day}  ${chosenDate.month} в ${chosenTime}`}</h2>
            <div>{`на квест ${chosenQuest?.name}`}</div>
        </div>
    )
}
