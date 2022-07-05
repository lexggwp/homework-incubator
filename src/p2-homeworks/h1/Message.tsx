import React from 'react'
import c from './Message.module.css';

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessagePropsType) {
    return (
        <div className={c.message}>
            <div className={c.message__avatar}>
                <img src={props.avatar} alt=""/>
            </div>


            <div className={c.message__block}>
                <div className={c.message__name}>{props.name}</div>
                <div className={c.message__text}>{props.message}</div>
                <div className={c.message__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
