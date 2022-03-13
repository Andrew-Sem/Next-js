import { useState, useEffect } from "react";
import MainLayout from "./../components/MainLayout";
import Link from "next/link";

export default function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:4200/posts");
      const data = await res.json();
      setPosts(data);
    }
    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Posts Page"}>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts,
  };
};
