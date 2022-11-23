import React, { useEffect } from 'react'
import { fetchBookInfo, selectBookInfo, selectBookInfoStatus, selectBookInfoError } from '../../store/bookInfoSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import ChooseSlot from './ChooseSlot'
import type { BookInfo } from '../../store/bookInfoSlice';
import AsyncContent from '../AsyncContent';


export default function ChooseSlots() {
    const bookInfo = useAppSelector(selectBookInfo);
    const bookInfoStatus = useAppSelector(selectBookInfoStatus);
    const bookInfoError = useAppSelector(selectBookInfoError);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (bookInfoStatus === 'idle') {
            dispatch(fetchBookInfo())
        }

    }, [bookInfoStatus])

    return (
        <AsyncContent status={bookInfoStatus} error={bookInfoError}>
            <ul className="choose__list">
                {bookInfo.map((item: BookInfo, i) => (
                    <ChooseSlot{...item} key={i} />
                ))}
            </ul>
        </AsyncContent>

    )
}
