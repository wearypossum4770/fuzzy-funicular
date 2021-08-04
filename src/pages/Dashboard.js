import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Eh</Link>
        </li>
      </ul>
    </div>
  );
}
