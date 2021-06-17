import React from "react";

import PageHeading from "../components/PageHeading";
import Post from "../components/Post";

import { motion } from "framer-motion";
import { PageAnimate } from "../animations/PageTransition";

export default function Home() {
  return (
    <>
      <motion.div
        variants={PageAnimate}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PageHeading bigTitle="Hey, I'm Lorem Ipsum">
          <p>
            I'm a developer, writer, and creator. I work as the Head of
            Developer Relations at Vercel. You’ve found my personal slice of the
            internet –
            <a className="blue-links" href="">
              sign my guestbook
            </a>
            while you're here or
            <a className="blue-links" href="">
              learn more about me.
            </a>
          </p>
        </PageHeading>
        <h1 className="my-5 text-4xl font-bold dark:text-white">
          Conference Talks
        </h1>
        <Post
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          body="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
        />
        <Post
          title="How Stripe Designs Beautiful Websites"
          body="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
        />
        <Post
          title="Creating a Monorepo with Lerna & Yarn Workspaces"
          body="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
        />
      </motion.div>
    </>
  );
}
