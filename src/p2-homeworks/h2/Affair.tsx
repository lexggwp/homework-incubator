import React from 'react'
import {AffairType} from "./HW2";
import  "./Affairs.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void; // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
            <div className="">{props.affair.name}
                <button className={'btn'} onClick={deleteCallback}>X</button>
            </div>
            <div className="">{props.affair.priority}</div>

        </div>
    )
}

export default Affair
