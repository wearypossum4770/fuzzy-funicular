import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
export default function Post() {
  let { id } = useParams();
  let post = useContext(BlogContext).filter(
    (post) => post.id === parseInt(id)
  )[0];
  console.log(post);
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.content}</div>
    </div>
  );
}
