import React from 'react'
import { useAppDispatch } from '../../store/hooks';
import { filterQuests } from '../../store/questsSlice';
import SvgFilter from './SvgFilter';
import type { Filter } from '../../store/filtersSlice';


type FilterProps = {
    item: Filter,
    setActive: React.Dispatch<React.SetStateAction<Filter>>,
    active: Filter | undefined
}

export default function QuestFilter(
    { item, setActive, active }: FilterProps) {
    const dispatch = useAppDispatch();

    function onFilterClick() {
        dispatch(filterQuests(item.genre))
        setActive(item)
    }

    return (
        <li className="quests__item" onClick={onFilterClick}>
            <div className={active?.name === item.name ? "quests__link quests__link--active" : "quests__link quests__link"}>
                <SvgFilter type={item.genre} />
                <span className="quests__link-text">{item.name}</span>
            </div>
        </li>
    )

}
