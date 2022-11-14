import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks';
import { chooseQuests } from '../store/questsSlice';


export default function QuestPage() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const quest = location.state.quest;
    const { name, people, difficulty, img, genre, time, text } = quest;
    const changedDifficulty = difficulty === "средний" ? `${difficulty.slice(0, -2)}яя` : `${difficulty.slice(0, -2)}ая`;

    function onHandleClick() {
        dispatch(chooseQuests(quest))
    }

    return (
        <section className="info">
            <div className="info__container">
                <Link className="info__button-all" to="/escape/quests">Все квесты</Link>
                <img className="info__img" src={`../img/card-${img}@2x.jpg`} />
                <div className="info__main-item">
                    <p className="info__genre">
                        <span>{genre}</span>
                    </p>
                    <h2>{name}</h2>
                    <ul className="info__list">
                        <li className="info__item info__item--time">
                            <span>{time} мин</span>
                        </li>
                        <li className="info__item info__item--people">
                            <span>{people} чел</span>
                        </li>
                        <li className="info__item info__item--difficulty">
                            <span>{changedDifficulty} сложность</span>
                        </li>
                    </ul>
                    <div className="info__text">
                        <p>{text}</p>
                    </div>
                    <Link className="info__button" to="/escape/choose" onClick={onHandleClick}>Забронировать</Link>
                </div>




            </div>
        </section>
    )
}
