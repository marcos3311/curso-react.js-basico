import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
        const {
            item: todos, 
            saveItem: saveTodos,
            loading,
            error
        } = useLocalStorage('TODOS_V1', []);
        
            // Estado del buscador
        const [searchValue, setSearchValue] = React.useState('');

            // Estado del modal para crear TO-DO
        const [openModal, setOpenModal] = React.useState(false);

            // Int que almacena la cantidad de TO-DO'S con la pp: completed === true
        const completedTodos = todos.filter(todo => !!todo.completed).length;
            // Int que almacena la cantidad total de TO-DO's 
        const totalTodos = todos.length;
        
            // Funcion para buscar cada vez que se modifica el valor en el input de busqueda
        const searchedTodos = todos.filter((todo) => { // estado derivado del estado "todos" 
            // Funcion para eliminar tildes, y hacer una busqueda mas global
            const deleteTildes = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
        
            const todoText = deleteTildes(todo.text.toLowerCase());
            const searchText = deleteTildes(searchValue.toLowerCase());
            return todoText.includes(searchText)
        });
        
            // Funcion para modificar la propiedad 'completed' de un TO-DO
        const completeTodo = (id) => {
            const newItem = [...todos];
            const todoIndex = newItem.findIndex((todo) => todo.text === id);
        
            newItem[todoIndex].completed = !newItem[todoIndex].completed;
        
            saveTodos(newItem);
        };

            // Funcion para crear un TO-DO
        const createTodo = (text) => {
            const todoList = [...todos];
        
            todoList.push({
                text,
                completed: false
            })
            modalToggle();
            saveTodos(todoList);
        }
        
          // Funcion para eliminar un TO-DO
        const deleteTodo = (id) => {
            const newItem = [...todos];
            const todoIndex = newItem.findIndex((todo) => todo.text === id);
        
            newItem.splice(todoIndex, 1);
        
            saveTodos(newItem);
        };

        const modalToggle = () => { setOpenModal(!openModal)}
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            modalToggle,
            createTodo
        }}>
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };