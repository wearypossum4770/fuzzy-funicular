import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./components/blog/Blog";
import Post from "./components/blog/Post";
import EmployeeCreate from "./components/employee/EmployeeCreate";
import TodoCreate from "./components/todo/TodoCreate";
import TodoDetail from "./components/todo/TodoDetail";
import EmployeeList from './components/employee/EmployeeList'
import TodoList from "./components/todo/TodoList";
import Weather from "./components/weather/Weather";
import { BlogContext } from "./context/BlogContext";
import { TodoContext } from "./context/TodoContext";
import posts from "./data/posts.json";
import todolist from "./data/todoinit.json";
import About from "./pages/about/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home/Home";
import TimeClock from "./pages/TimeClock";
export default function App() {
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
          <li>
            <Link to="/timeclock">Time Clock</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/employees">Employee</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <TodoContext.Provider value={todolist}>
            {/* <UserContext.Provider value={user}> */}
            {/* <Route exact path="/register" component={Signup} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/todos/create" component={TodoCreate} />
            <Route exact path="/todos" component={TodoList} />
            <Route exact path="/todos/edit/:id" component={TodoDetail} />
            <Route exact path="/todos/create" component={TodoCreate} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/timeclock" component={TimeClock} />
            <Route exact path="/about" component={About} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/employees" component={EmployeeList}/>
            <Route exact path="/employees/create" component={EmployeeCreate} />
            <BlogContext.Provider value={posts}>
              <Route exact path="/blog" component={Blog} />
              <Route path="/blog/:id" component={Post} />
            </BlogContext.Provider>
            {/* 
            
            <Route exact path="/timeentry" component={TimeEntry} /> */}
            {/* </UserContext.Provider> */}
          </TodoContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}
