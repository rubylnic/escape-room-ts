
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeModal } from "../store/modalSlice";

type PropTypes = {
    type: string,
    children?: any,
    title: string
}

export default function Modal(props: PropTypes) {
    const dispatch = useAppDispatch();
    const type = props.type;
    const children = props.children;
    const title = props.title;

    function onCloseModal() {
        dispatch(closeModal(type))
    }

    return (
        <section className={`modal modal-${type}`}>

            <div className="modal__overlay" onClick={onCloseModal}>
                <button className="modal__button-close" type="button" aria-label="Закрыть окно" onClick={onCloseModal}></button>
                <div className="modal__container" onClick={e => e.stopPropagation()}>
                    <h2 className="modal__heading">{title}</h2>
                    {children}
                </div>
            </div>
        </section>
    )
}
