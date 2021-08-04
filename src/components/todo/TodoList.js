import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";
export default function TodoList() {
  let history = useHistory();
  let todoList = useContext(TodoContext);
  const renderTodoList = () =>
    todoList.map((todo) => (
      <li key={todo.id}>
        <a href={`/todos/edit/${todo.id}`}>{todo.title}</a>
      </li>
    ));
  return (
    <div className="w3-container">
      <h2>Todo List</h2>
      <div>
        <button onClick={() => history.push("todos/create")}>✏️</button>
      </div>
      <ul className="w3-ul w3-hoverable">{renderTodoList()}</ul>
    </div>
  );
}
