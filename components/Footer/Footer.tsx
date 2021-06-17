import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 text-gray-600 font-medium dark:text-gray-400 flex items-start pt-4 mt-10 justify-between text-base">
      <div>
        <p className="py-2">Home</p>
        <p className="py-2">About</p>
        <p className="py-2">Newsletter</p>
      </div>
      <div>
        <p className="py-2">Twitter</p>
        <p className="py-2">Github</p>
        <p className="py-2">Youtube</p>
      </div>
      <div>
        <p className="py-2">Uses</p>
        <p className="py-2">Guestbook</p>
        <p className="py-2">Snippets</p>
        <p className="py-2">Tweets</p>
      </div>
    </div>
  );
};

export default Footer;
