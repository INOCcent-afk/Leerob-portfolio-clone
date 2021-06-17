import React, { FC, ReactNode } from "react";

type Props = {
  bigTitle?: string;
  smallTitle?: string;
  children: ReactNode;
};

const PageHeading: FC<Props> = ({ smallTitle, bigTitle, children }: Props) => {
  return (
    <div>
      <h1 className="mt-28 text-5xl font-bold dark:text-white">{bigTitle}</h1>
      <h1 className="text-3xl font-bold dark:text-white">{smallTitle}</h1>
      <div className="py-5 font-semibold text-gray-700 dark:text-gray-400 text-base">
        {children}
      </div>
    </div>
  );
};

export default PageHeading;
