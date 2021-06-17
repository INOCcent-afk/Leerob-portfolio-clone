import React, { FC } from "react";

type Props = {
  trackNumber: number;
  trackName: string;
  trackAuthor: string;
  trackUri: string;
};

const Track: FC<Props> = ({
  trackName,
  trackAuthor,
  trackNumber,
  trackUri,
}: Props) => {
  const Redirect = () => {
    window.open(`${trackUri}`, "_blank");
  };

  return (
    <div
      onClick={Redirect}
      className="flex border-b border-gray-200 dark:border-gray-900 py-5 cursor-pointer"
    >
      <div className="mr-5 text-gray-600 dark:text-gray-400 font-medium">
        {trackNumber}.
      </div>
      <div className="flex flex-col">
        <div className="text-gray-600 dark:text-white font-bold">
          {trackName}
        </div>
        <div className="font-medium text-gray-400">{trackAuthor}</div>
      </div>
    </div>
  );
};

export default Track;
