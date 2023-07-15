import { TodoListSkeleton } from "./TodoListSkeleton";
import { TodoSkeleton } from "./TodoSkeleton";
import "./TodosLoading.css"

function TodosLoading() {
    return (
        <TodoListSkeleton>
            <TodoSkeleton />
            <TodoSkeleton />
            <TodoSkeleton />
            <TodoSkeleton />
            <TodoSkeleton />
        </TodoListSkeleton>
    );
}

export { TodosLoading };