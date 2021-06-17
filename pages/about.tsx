import React, { FC } from "react";

import PageHeading from "../components/PageHeading";
import Post from "../components/Post";

import { motion } from "framer-motion";
import { PageAnimate } from "../animations/PageTransition";

const about: FC = () => {
  return (
    <>
      <motion.div
        variants={PageAnimate}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PageHeading bigTitle="About Me">
          <p className="my-3">
            Hey, I’m Ipsum. I'm a developer, writer, and the creator of
            <a className="blue-links" href="#">
              Mastering Next.js
            </a>
            and
            <a className="blue-links" href="#">
              React
            </a>
            2025. I work at ▲Vercel as the Head of Developer Relations.
          </p>
          <p className="my-3">
            I’ve spoken across the country at conferences and meet-ups about
            front-end development, design, and recruiting. I write about
            development, tech careers, and my personal life on
            <a className="blue-links" href="#">
              my newsletter.
            </a>
          </p>
          <p className="my-3">
            I grew up in small-town Iowa and went to school at Iowa State,
            graduating with a degree in Computer Engineering. I spend my free
            time playing music, creating videos, and enjoying time with friends
            and family in Des Moines, IA.
          </p>
        </PageHeading>
        <h1 className="my-5 text-4xl font-bold dark:text-white">
          Conference Talks
        </h1>
        <Post
          title="How Core Web Vitals Will Impact Google Rankings in 2021"
          body="Landing a top spot on Google can have a multi-million dollar impact on your business. Starting in June 2021, the performance of your site (determined by Core Web Vitals) will be critical to your search ranking. Learn how Next.js can help you optimize your site’s performance, user experience, and SEO."
        />
        <Post
          title="Data Fetching with Next.js"
          body="Next.js is a hybrid React framework allowing you to choose your data fetching strategy on a per-page basis. In this talk, you’ll learn more about CSR (Client-Side Rendering), SSR (Server-Side Rendering), SSG (Static-Site Generation), ISR (Incremental Static Regeneration), and when to use each one. I’ll also give a quick introduction to Next.js and share some of the main features of the framework."
        />
        <Post
          title="Building Static Sites with Prisma and Next.js
        "
          body="During this workshop, you'll learn how to integrate Prisma with Next.js and build a statically-generated site that displays a list of your favorite songs. We'll use Chakra UI for styling and deploy our site with Vercel.
        "
        />
        <Post
          title="Building Component Libraries with a Monorepo"
          body="Learn why your organization needs a component library and discover the best practices for building, scaling, and adopting it across all platforms. We'll be using industry-standard technology (React, JavaScript, Storybook) alongside cutting-edge solutions (CSS-in-JS, Monorepo)."
        />
        <Post
          title="Recruiting Engineers (From An Engineer's Perspective)
        "
          body="Hiring talent is becoming increasingly difficult with low unemployment rates and the tech industry booming. What you can do to stick out? Learn from an engineer who's been involved on both sides - both as a candidate and with hiring - on what candidates really want out of a position."
        />
      </motion.div>
    </>
  );
};

export default about;
