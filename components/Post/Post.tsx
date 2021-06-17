import React, { FC } from "react";
import { PostType } from "../../models/postsType";

const Post: FC<PostType> = ({ title, body }: PostType) => {
  return (
    <div className="py-1">
      <h1 className="text-gray-800 dark:text-white py-3 text-2xl font-medium">
        {title}
      </h1>
      <p className="font-medium text-base text-gray-600 dark:text-gray-400">
        {body}
      </p>
    </div>
  );
};

export default Post;
