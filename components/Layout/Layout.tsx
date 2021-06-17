import React, { FC, ReactNode } from "react";

import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className="dark:bg-black">
        <Header />
        <div className="max-w-screen-sm flex flex-col mx-2 sm:mx-auto py-10">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
