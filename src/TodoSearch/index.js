import React from 'react';
import "./TodoSearch.css"
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    return (
        <input placeholder="Ir al GYM" className="TodoSearch" value={searchValue} // con value={state} atamos el estado al valor del input
                onChange={event => {
                    setSearchValue(event.target.value)
                    }
                }
        />
    );
}

export { TodoSearch };