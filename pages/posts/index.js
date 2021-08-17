import Link from "next/link";
import { useRouter } from "next/router";

let postList = [
  {
    id: "2f04cb56-c668-4b6a-96c0-787b113bfadc",
    title: "Two Forms of Pre-rendering",
    date: "2020-01-01",
    content:
      "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.\n- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.\n- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.<br/>Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a 'hybrid' Next.js app by using Static Generation for most pages and using Server-side Rendering for others.",
  },
  {
    id: "ec0eeca0-9307-4ae8-9b02-d2bb92ee5b9b",

    title: "initial title",
    content:
      "Thank you testuser2 for using our service. This is a test blog post. If you are seeing this please send a help desk ticket",
    date_posted: "2021-03-25T00:19:58.413Z",
    date_modified: "2021-03-25T00:19:58.413Z",
    author: 1,
  },
];
export default function PostList() {
  const router = useRouter();
  return postList.map((post) => (
    <ul class="w3-ul w3-card-4">
      <li className="w3-bar" onClick={() => router.push(`/posts/${post.id}`)}>
        <span
          onClick="this.parentElement.style.display='none'"
          className="w3-bar-item w3-button w3-white w3-xlarge w3-right"
        >
          ×
        </span>
        <img
          src="/default.webp"
          className="w3-bar-item w3-circle w3-hide-small"
          style={{ width: "85px" }}
        />
        <div class="w3-bar-item">
          <span class="w3-large">{post.title}</span>
          <br />
          <span>{post.content.slice(0, 50)}</span>
        </div>
      </li>
    </ul>
  ));
}
