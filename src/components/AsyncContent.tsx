import React from 'react'
import Loader from './Loader';

type PropsType = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: any,
    children: React.ReactNode
}

export default function AsyncContent({ status, error, children }: PropsType) {

    let content: React.ReactNode;
    switch (status) {
        case 'loading':
            content = <Loader />
            break;
        case 'succeeded':
            content = children;
            break;
        case 'failed':
            content = <p>{error}</p>
            break;
        default:
            content = ''
    }
    return (
        <div>{content}</div>
    )
}
