import React, { FC } from "react";

type Props = {
  title: string;
  views: string;
};

const DataViews: FC<Props> = ({title, views}: Props) => {
  return (
    <div className="border-2 border-gray-200 dark:border-gray-800 p-5 rounded-md dark:text-white">
      <p>{title}</p>
      <h1>{views}</h1>
    </div>
  );
};

export default DataViews;
