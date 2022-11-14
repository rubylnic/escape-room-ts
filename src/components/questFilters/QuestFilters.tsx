import React, { useEffect, useState } from 'react'
import AsyncContent from "../AsyncContent";
import { fetchFilters, selectFilters, selectFiltersError, selectFiltersStatus } from '../../store/filtersSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import QuestFilter from './QuestFilter';
import type { Filter } from '../../store/filtersSlice';

export default function QuestFlters() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(selectFilters);
    const filtersError = useAppSelector(selectFiltersError);
    const filtersStatus = useAppSelector(selectFiltersStatus);
    const [activeTab, setActiveTab] = useState<Filter>({ name: 'Приключения', genre: 'adventure' })

    useEffect(() => {
        dispatch(fetchFilters())
    }, [])

    return (
        <AsyncContent status={filtersStatus} error={filtersError}>
            <ul className="quests__list">
                {filters.map((item, i) => (
                    <QuestFilter item={item} key={i} setActive={setActiveTab} active={activeTab} />
                ))}

            </ul>
        </AsyncContent>
    )
}