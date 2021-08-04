import { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
export default function Blog() {
  let { url } = useRouteMatch();
  let posts = useContext(BlogContext);
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <Link to={`${url}/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
