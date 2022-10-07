import React from "react";
import { getPosts } from "../../utils/getPosts";

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
    </div>
  );
};

export default Posts;
