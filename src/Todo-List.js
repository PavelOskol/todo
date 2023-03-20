import TodoItem from "./Todo-Item";

const TodoList = ({todos}) => {
    return (
        <ul>
            { todos.map( todo => <TodoItem {...todo} />)  }
        </ul>
    )
}

export default TodoList;