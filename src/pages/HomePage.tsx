import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setBg } from '../store/bgSlice';
import { useAppDispatch } from '../store/hooks';



export default function HomePage() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setBg('background-container--home'));
    }, [])


    return (
        <section className="description description--closed">
            <div className="description__container">
                <h1 className="description__heading"><span className="visually-hidden">Escape Room. </span>Лучшие квесты в
                    Новосибирске </h1>
                <p>Надоело проводить свободное время лёжа на диване? Игровые площадки
                    questroom на целый час погружают вас в мир незабываемых авантюр. Ищите подсказки, решайте головоломки и
                    находите выход из комнаты!</p>
                <Link className="description__button description__button--d" to="/escape/quests">Выбрать квест</Link>
            </div>
        </section>
    )
}
