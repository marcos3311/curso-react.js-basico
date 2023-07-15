import React from "react";
import {BsCheck} from 'react-icons/bs';
import {RxCross2} from 'react-icons/rx';
import "./TodoItem.css"

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="TodoItem">
            <BsCheck 
                className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                onClick={onComplete}
                color={completed ? "green" : "gray"}
            />
            <p className={`Todo-Item-p ${completed && "TodoItem-p--complete"}`}>{ text }</p>
            <RxCross2 
                className="Icon-delete Icon"
                onClick={onDelete}
            />
        </li>
    );
}

export { TodoItem };