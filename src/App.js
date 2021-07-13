import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./components/todo/TodoList";
import TodoCreate from "./components/todo/TodoCreate";
import TodoDetail from "./components/todo/TodoDetail";
import { TodoContext } from "./context/TodoContext";
import todolist from "./data/todoinit.json";
import Home from "./components/home/Home";
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="register">Singup</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/timeentry">Time Entry</Link>
          </li>
          <li>
            <Link to="/todos">Todo List</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <TodoContext.Provider value={todolist}>
            {/* <UserContext.Provider value={user}> */}
            {/* <Route exact path="/register" component={Signup} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/todos" component={TodoList} />
            <Route exact path="/todos/:id" component={TodoDetail} />
            <Route exact path="todos/create" component={TodoCreate}/>
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/timeentry" component={TimeEntry} /> */}
            {/* </UserContext.Provider> */}
          </TodoContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
