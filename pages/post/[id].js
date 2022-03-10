import MainLayout from "../../components/MainLayout";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <MainLayout title="Post Page">
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts">
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return {
    post,
  };
};
