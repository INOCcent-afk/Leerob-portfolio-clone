import React from "react";

import PageHeading from "../components/PageHeading";

const about = () => {
  return (
    <>
      <PageHeading title="About Me">
        <p className="my-3">
          Hey, I’m Lee. I'm a developer, writer, and the creator of
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
          graduating with a degree in Computer Engineering. I spend my free time
          playing music, creating videos, and enjoying time with friends and
          family in Des Moines, IA.
        </p>
      </PageHeading>
    </>
  );
};

export default about;
