import React from "react";
import { getPosts } from "../../../utils/getPosts";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
      {posts.map((post) => (
        <p>
          <Link href={`/posts/${post._id}`}>
            <p>{post.title}</p>
          </Link>
        </p>
      ))}
      <h1>Posts</h1>
    </div>
  );
};
export default Posts;
