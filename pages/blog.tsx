import React, { FC } from "react";

import PageHeading from "../components/PageHeading";
import SearchInput from "../components/SearchInput";
import PostsContainer from "../containers/PostsContainer";
import { PostsType } from "../models/postsType";

import { getPosts } from "../utils/api/getPosts";
import { motion } from "framer-motion";
import { PageAnimate } from "../animations/PageTransition";

const blog: FC<PostsType> = ({ posts }: PostsType) => {
  return (
    <>
      <motion.div
        variants={PageAnimate}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PageHeading bigTitle="Blog">
          <p>
            I've been writing online since 2014, mostly about web development
            and tech careers. In total, I've written 68 articles on this site.
            Use the search below to filter by title.
          </p>
        </PageHeading>
        <SearchInput />
        <h1 className="my-5 text-4xl font-bold dark:text-white">All Posts</h1>
        <PostsContainer posts={posts} />
      </motion.div>
    </>
  );
};

export default blog;

export const getStaticProps = async () => {
  const posts = await getPosts();

  return { props: { posts } };
};
