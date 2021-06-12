import React from "react";

import PageHeading from "../components/PageHeading";

export default function Home() {
  return (
    <>
      <PageHeading title="Hey, I'm Dave Inoc">
        <p>
          I'm a developer, writer, and creator. I work as the Head of Developer
          Relations at Vercel. You’ve found my personal slice of the internet –
          <a className="blue-links" href="">
            sign my guestbook
          </a>
          while you're here or
          <a className="blue-links" href="">
            learn more about me.
          </a>
        </p>
      </PageHeading>
    </>
  );
}
