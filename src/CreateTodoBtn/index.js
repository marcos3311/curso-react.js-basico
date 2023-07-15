import React from "react";
import "./CreateTodoBtn.css"
import { TodoContext } from "../TodoContext";

function CreateTodoBtn() {
    const { modalToggle } = React.useContext(TodoContext);


    return (
        <button className="CreateTodoButton" onClick={modalToggle}>+</button>
    );
}

export { CreateTodoBtn };