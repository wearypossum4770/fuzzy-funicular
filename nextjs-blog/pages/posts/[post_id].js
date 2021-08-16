import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function getStaticProps() {}
let post = {
  id: "ec0eeca0-9307-4ae8-9b02-d2bb92ee5b9b",
  title: "initial title",
  content:
    "Thank you testuser2 for using our service. This is a test blog post. If you are seeing this please send a help desk ticket",
  date_posted: "2021-03-25T00:19:58.413Z",
  date_modified: "2021-03-25T00:19:58.413Z",
  author: 1,
  comments: [
    {
      username: "User2",
      content: "I guess",
    },
    {
      username: "User3",
      content: "Yeah she is always doing the most",
    },
  ],
};
const handleLike = () => null;
const handleShare = () => null;
const handleComment = () => null;
export default function PostDetails() {
  const [props, setProps] = useState();
  const router = useRouter();
  const { post_id } = router.query;

  return (
    <div className="w3-container">
      {post && (
        <div class="w3-card-4">
          <header class="w3-container w3-blue">
            <img
              src="/default.webp"
              style={{ width: "5%" }}
              className="w-image"
            />
            <span className="w3-margin-left">{post.title}</span>
          </header>

          <div className="w3-container">
            <p>{post.content}</p>
          </div>

          <footer className="w3-container w3-blue">
            <button className="w3-btn" name="like">
              Like
            </button>
            <button className="w3-btn" name="comment">
              Comment
            </button>
            <button className="w3-btn" name="share">
              Share
            </button>
            <button className="w3-btn">Flag</button>
          </footer>
        </div>
      )}
      {post.comments.map((comment) => (
        <div className="comment">
          <div className="comment-heading"></div>
        </div>
      ))}
    </div>
  );
}
