import React, { FC } from "react";
import { useQuery } from "react-query";

import Post from "../../components/Post";

import { PostsType, PostType } from "../../models/postsType";
import { getPosts } from "../../utils/api/getPosts";

const PostsContainer: FC<PostsType> = ({ posts }: PostsType) => {
  const [blogs, setBlogs] = React.useState([]);

  const { data, isLoading } = useQuery("tracks", getPosts, {
    initialData: posts,
  });

  React.useEffect(() => {
    setBlogs(data);
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="decoy">...</div>
      </>
    );
  }

  return (
    <div className="py-5">
      {blogs &&
        blogs.map((blog: PostType) => (
          <Post
            key={blog.id}
            title={blog.title.charAt(0).toUpperCase() + blog.title.slice(1)}
            body={blog.body}
          />
        ))}
    </div>
  );
};

export default PostsContainer;
