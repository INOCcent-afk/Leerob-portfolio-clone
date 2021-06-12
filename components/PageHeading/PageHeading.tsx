import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const PageHeading: FC<Props> = ({ title, children }: Props) => {
  return (
    <div>
      <h1 className="text-5xl font-bold dark:text-white">{title}</h1>
      <div className="py-5 font-semibold text-gray-700 dark:text-gray-400 text-base">
        {children}
      </div>
    </div>
  );
};

export default PageHeading;
