let postList = [
  {
    title: "initial title",
    content:
      "Thank you testuser2 for using our service. This is a test blog post. If you are seeing this please send a help desk ticket",
    date_posted: "2021-03-25T00:19:58.413Z",
    date_modified: "2021-03-25T00:19:58.413Z",
    author: 1,
  },
];
export default function PostList() {
  return postList.map((post) => (
    <div class="w3-card-4">
      <header class="w3-container w3-blue">
        <img />
        <h1>Header</h1>
      </header>
      <div class="w3-container">
        <p>{post.content}</p>
      </div>
      <footer class="w3-container w3-blue">
        <h5>Footer</h5>
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </footer>
    </div>
  ));
}
