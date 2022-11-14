import React from 'react'
import { Link } from 'react-router-dom'

type QuestProps = {
    quest: Quest
}
export interface Quest {
    "name": string,
    "address": string
    "people": string,
    "difficulty": "легкий" | "средний" | "сложный",
    "img": string,
    "hit": false,
    "genre": "adventure" | "detective" | "mistery" | "horror" | "scifi",
    "time": string,
    "text": string
}
export default function QuestItem({ quest }: QuestProps): JSX.Element {
    const { name, address, people, difficulty, img, hit } = quest;

    return (
        <li className={hit ? "quest quest--hit" : "quest"}>
            <Link to="/escape-room-ts/quest-item" state={{ quest: quest }}>
                <h4>{name}</h4>
                <p>{address}</p>
                <div className="quest__container">
                    <span className="quest__people">{people} чел</span>
                    <span className="quest__difficulty">{difficulty}</span>
                </div>
                <img className="quest__img" src={`/img/card-${img}@1x.jpg`} />
            </Link>
        </li>
    )
}
