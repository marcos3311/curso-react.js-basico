import './TodoListSkeleton.css';

function TodoListSkeleton({ children }) {
    return (
        <ul className="TodoListSkeleton">
            { children }
        </ul>
    )
} 

export { TodoListSkeleton };