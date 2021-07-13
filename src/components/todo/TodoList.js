import { TodoContext } from "../../context/TodoContext";
import { useContext } from "react";
export default function TodoList() {
  let todoList = useContext(TodoContext);
  const renderTodoList = () =>
    todoList.map((todo) => (
      <li key={todo.id}>
        <a href={`/todos/${todo.id}`}>{todo.title}</a>
      </li>
    ));
  return (
    <div className="w3-container">
      <h2>Todo List</h2>
      <ul className="w3-ul w3-hoverable">{renderTodoList()}</ul>
    </div>
  );
}
