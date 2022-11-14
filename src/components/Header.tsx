import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { openModal } from '../store/modalSlice';
import SvgLogo from './SvgLogo';

export default function Header() {
    const dispatch = useAppDispatch();
    const [hidden, setHidden] = useState(false);
    const city = useAppSelector((state) => state.city.value);
    useEffect(() => {
        if (window.screen.availWidth < 1024) {
            setHidden(true)
        }
    }, [])
    return (
        <header className="main-header">
            <div className="main-header__container">
                <div className="main-header__logo-menu">
                    <Link className="main-header__logo" to="/escape" aria-label="Ссылка на главную страницу">
                        <SvgLogo />
                    </Link>
                    <button className={hidden ? "main-header__menu-button main-header__menu-button--closed" : "main-header__menu-button"} type="button" onClick={() => { setHidden(!hidden) }}>Меню</button>
                </div>
                <nav className={hidden ? "main-nav--closed" : "main-nav"}>
                    <ul className="main-nav__list main-nav__list--menu">
                        <li className="main-nav__item">
                            <Link className="main-nav__link" to="escape/quests">Квесты</Link>
                        </li>

                    </ul>
                    <ul className="main-nav__list main-nav__list--contacts">
                        <li className="main-nav__item">
                            <button className="main-nav__link main-nav__link--location" onClick={() => { dispatch(openModal('city')) }}>{city}</button>
                        </li>
                        <li className="main-nav__item">
                            <a className="main-nav__link" href="tel:+73832840160">8 (383) 284 01 60</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
