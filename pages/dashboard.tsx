import React from "react";

import PageHeading from "../components/PageHeading";

const dashboard = () => {
  return (
    <>
      <PageHeading title="Dashboard">
        <p>
          This is my personal dashboard, built with Next.js API routes deployed
          as serverless functions. I use this dashboard to track various metrics
          across platforms like Unsplash, YouTube, GitHub, and more. Want to
          build your own? Check out my
        </p>
      </PageHeading>
    </>
  );
};

export default dashboard;
