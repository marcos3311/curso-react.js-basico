import "./TodoSkeleton.css"

function TodoSkeleton() {
    return (
        <li className="TodoSkeleton">
            <div className="check"/>
            <div className="paragraph"></div>
            <div className="cross"/>
        </li>
    );
}

export { TodoSkeleton };