import React from 'react'
import { useAppDispatch } from '../store/hooks';
import { closeModal } from '../store/modalSlice';
import QuestionForm from '../components/QuestionForm';
import Modal from './Modal';


export default function ModalQuestion({ setFormResponse }: any) {
    return (
        <Modal type="question" title='Задайте вопрос'>
            <QuestionForm setFormResponse={setFormResponse} />
        </Modal>
    )
}
