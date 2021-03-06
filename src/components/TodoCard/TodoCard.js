import { useDispatch } from 'react-redux';
import { deleteTodoThunk, updateTodoThunk } from "../../store/todos/operations";
import "./TodoCard.scss";

const TodoCard = (props) => {
    const { task: { id, title, completed }, handleUpdateTodo } = props
    const dispatch = useDispatch()

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodoThunk(id))
    }

    const handleDoneTodo = () => {
        const newTask = { ...props.task }
        newTask.completed = !completed
        dispatch(updateTodoThunk(newTask))
    }

    return (<li className="task__item" style={{ backgroundColor: completed ? "#d3d3d3" : "inherit", textDecoration: completed ? "line-through" : "inherit" }}>
        <button type="button" onClick={() => handleDeleteTodo(id)} className="task__delete-btn" title="Delete task">&times;</button>
        <button type="button" onClick={() => handleUpdateTodo(id)} className="task__edit-btn" title="Edit task">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square task__edit-svg" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg>
        </button >
        <button type="button" className="task__edit-btn task__edit-btn--done" onClick={handleDoneTodo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square task__edit-svg" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
            </svg></button>
        <p>{title}</p>
    </li>)

}

export default TodoCard