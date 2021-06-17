import React, { FC } from "react";

const SearchInput: FC = () => {
  return (
    <>
      <input
        placeholder="Search articles"
        className="my-5 dark:text-gray-200 font-medium tracking-wider border-gray-300 border dark:bg-gray-800 dark:border-gray-800 px-4 py-2 rounded-md"
        type="text"
      />
    </>
  );
};

export default SearchInput;
