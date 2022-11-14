import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useQuery } from 'react-query';
import axios from 'axios';
import { nanoid } from 'nanoid'
import { useAppDispatch } from '../store/hooks';
import { closeModal } from '../store/modalSlice';


type FormValues = {
    name: string;
    email: string;
    text: string;
};

export default function QuestionForm({ setFormResponse }: any) {
    const [validation, setValidation] = useState(false);
    const dispatch = useAppDispatch();
    let validationClassName = "";
    if (validation) {
        validationClassName = "validation"
    }

    const schema = yup.object().shape({
        name: yup.string().required("Введите ваше имя"),
        email: yup.string().email().required("Введён некорректный e-mail, попробуйте заново"),
        text: yup.string().required("Введите текст своего вопроса"),
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        reset();
        dispatch(closeModal('question'))

        const fetchData = {
            data: data,
            id: nanoid()
        }
        axios.post('http://localhost:7777/questions', fetchData).then((res) => { setFormResponse('Ваш вопрос успешно отправлен. Постараемся ответить на него как можно скорее') }).catch((err) => setFormResponse('Извините, возникла ошибка при отправке. Попробуйте еще раз'))
    }

    return (
        <form onSubmit={(handleSubmit(onSubmit))}>
            <ul className="list">
                <li>
                    <label htmlFor="modal-name"> Чтобы мы смогли обращаться к вам, оставьте ваше имя </label>
                    <input className={`${validationClassName} ${(Object.keys(errors).length === 0 || errors.name) ? 'invalid' : 'valid'}`} placeholder="Имя" {...register('name')} onChange={() => { setValidation(true) }} />
                    <strong className="modal-question__error-message">{errors.name?.message}</strong>
                </li>
                <li>
                    <label htmlFor="modal-email">Чтобы вы получили ответ, оставьте ваш e-mail </label>
                    <input className={`${validationClassName} ${(Object.keys(errors).length === 0 || errors.email) ? 'invalid' : 'valid'}`} placeholder="E-mail" {...register('email')} onChange={() => { setValidation(true) }} />
                    <strong className="modal-question__error-message">{errors.email?.message}</strong>
                </li>
                <li>
                    <label htmlFor="modal-text">Ваш вопрос</label>
                    <textarea className={`${validationClassName} ${(Object.keys(errors).length === 0 || errors.text) ? 'invalid' : 'valid'}`} placeholder="Начните вводить..." {...register('text')} onChange={() => { setValidation(true) }} />
                    <strong className="modal-question__error-message">{errors.text?.message}</strong>
                </li>
            </ul>
            <div className="modal-question__form-container">
                <label htmlFor="modal-checkbox">
                    <input className="visually-hidden" type="checkbox" id="modal-checkbox" name="terms" defaultChecked />
                    <span className="modal-question__checkbox-indicator"></span>
                    Я согласен с <a className="modal-question__rules" href="#">правилами обработки персональных данных </a> и
                    пользовательским соглашением
                </label>
                <button type="submit" onClick={() => { setValidation(true) }}>Задать вопрос</button>
            </div>
        </form>
    )
}
