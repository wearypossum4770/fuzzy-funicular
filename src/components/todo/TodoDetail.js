import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";
export default function TodoDetail() {
  let { id } = useParams();
  let todoList = useContext(TodoContext);
  let todo = todoList.filter((_todo) => _todo.id === parseInt(id))[0];
  return (
    todo && (
      <div className="w3-container">
        <div className="w3-card-4" style={{ width: "50%" }}>
          <header className="w3-container w3-blue">
            <h1>{todo.title}</h1>
          </header>
          <div className="w3-container">
            <p>{todo.content}</p>
          </div>
          <footer className="w3-container w3-blue">
            <h5>Footer</h5>
          </footer>
        </div>
      </div>
    )
  );
}
