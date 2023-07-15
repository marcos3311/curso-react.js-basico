import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    if (totalTodos === 0) {
        return(
            <h1 className="TodoCounter">
                No tienes ningun TO-DO! Crea uno pulsando el boton azul en la esquina inferior derecha
            </h1>
        )
    }

    if( completedTodos === totalTodos ) {
        return(
            <h1 className="TodoCounter">
                Felicitaciones! Haz completado todos los TO-DO'S
            </h1>
        )
    }

    return (
        <h1 className="TodoCounter">
            Haz completado <span>{ completedTodos }</span> de <span>{ totalTodos }</span> TO-DO'S
        </h1>
    )
}

export { TodoCounter };