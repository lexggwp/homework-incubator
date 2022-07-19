import React from 'react'
import s from '../Header.module.css'

function Error404() {
    return (
        <div className={s.notFound}>
            <div>404</div>
            <div>Page not found!</div>
            <div>¯\_(ツ)_/¯</div>
        </div>
    )
}

export default Error404
