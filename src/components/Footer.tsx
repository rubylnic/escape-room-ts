import { useAppDispatch } from "../store/hooks"
import { openModal } from "../store/modalSlice";

export default function Footer() {
    const dispatch = useAppDispatch();
    return (
        <footer className="footer">
            <div className="footer__container">
                <section className="socials">
                    <h2 className="visually-hidden">Социальные сети</h2>
                    <ul className="socials__list">
                        <li className="socials__item socials__item--instagram">
                            <a href="https://www.instagram.com/" className="socials__link" aria-label="instagram"></a>
                        </li>
                        <li className="socials__item socials__item--vk">
                            <a href="https://www.vk.com/" className="socials__link" aria-label="vk"></a>
                        </li>
                    </ul>
                </section>
                <button className="footer__link" onClick={() => { dispatch(openModal('question')) }}>Задать вопрос</button>
            </div>
        </footer>
    )
}
