import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { modalToggle, createTodo } = React.useContext(TodoContext);
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Terminar proyecto de react.js"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type=""
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={modalToggle}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    onClick={() => createTodo(document.querySelector('textarea').value)}
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }