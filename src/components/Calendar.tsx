import { Dispatch, SetStateAction } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useAppDispatch } from '../store/hooks';
import type { DateType } from '../store/questInfoSlice'
import { setDate } from '../store/questInfoSlice';
import setTranslatedMonth from '../helpers/setTranslatedMonth';


type MyCalendarProps = {
    ifOpen: boolean,
    setIfOpen: Dispatch<SetStateAction<boolean>>
}

export default function MyCalendar({ ifOpen, setIfOpen }: MyCalendarProps) {
    const dispatch = useAppDispatch();
    const minDate = new Date();

    const onClickDate = (value: Date) => {
        const date: DateType = {
            day: new Date(value).getDate(),
            month: setTranslatedMonth(new Date(value).getMonth())
        };
        setIfOpen(false);
        dispatch(setDate(date))
    }

    return (
        <div className={ifOpen ? 'my-calendar' : 'my-calendar hidden'}>
            <Calendar locale="ru-RU" minDate={minDate} onClickDay={onClickDate} />
        </div>
    )
}
