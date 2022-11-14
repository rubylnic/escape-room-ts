
import { useEffect } from "react";
import AsyncContent from "../components/AsyncContent";
import QuestFilters from "../components/questFilters/QuestFilters";
import QuestItem from "../components/QuestItem";
import { setBg } from "../store/bgSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectFilteredQuests, getQuestsError, getQuestsStatus, fetchQuests } from "../store/questsSlice";


export default function Quests() {
    const dispatch = useAppDispatch();

    const quests = useAppSelector(selectFilteredQuests);
    const questsStatus = useAppSelector(getQuestsStatus);
    const questsError = useAppSelector(getQuestsError);

    useEffect(() => {
        if (questsStatus === 'idle') {
            dispatch(fetchQuests())
        }
        dispatch(setBg(''));

    }, [questsStatus])

    return (
        <section className="quests">
            <div className="quests__container">
                <h2 className="quests__heading">квесты в Новосибирске</h2>
                <h3 className="quests__heading-choose">Выберите тематику</h3>
                <div className="quests__limiter">
                    <QuestFilters />
                </div>
                <div className="quests__list-limiter">
                    <AsyncContent status={questsStatus} error={questsError}>
                        <ul className="quests__list-container">
                            {quests.map((item, i) => (
                                <QuestItem quest={item} key={i} />
                            ))}
                        </ul>
                    </AsyncContent>
                </div>
            </div>
        </section>
    )
}
