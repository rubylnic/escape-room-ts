
import { setCity } from "../store/citySlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeModal } from "../store/modalSlice";
import Modal from "./Modal";


export default function ModalCity() {
    type ButtonProps = {
        item: string,
        active: boolean
    }
    const city = useAppSelector((state) => state.city.value);
    const activeCity = city;
    const dispatch = useAppDispatch();

    const cities = ['Новосибирск', 'Иркутск', 'Смоленск', 'Волгоград', 'Комсомольск-на-Амуре'];

    const CityButton = ({ item, active }: ButtonProps) => {
        function onCityClick() {
            dispatch(setCity(item))
            dispatch(closeModal('city'))
        }
        return (
            <li className="modal-city__item">
                <button className={active ? "modal-city__link modal-city__link--active" : "modal-city__link"} onClick={onCityClick}>{item}</button>
            </li>
        )
    }
    return (
        <Modal type='city' title='Ваш город'>
            <ul className="modal-city__list">
                {cities.map((item, i) => {
                    return item === activeCity ? <CityButton item={item} active={true} key={i} /> : <CityButton item={item} active={false} key={i} />
                })}

            </ul>
        </Modal>
    )
}
