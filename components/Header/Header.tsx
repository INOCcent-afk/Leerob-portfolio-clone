import React from "react";

import Link from "next/link";

const Header = () => {
  const [theme, setTheme] = React.useState(null);
  const colorTheme = theme === "light" ? "dark" : "light";

  React.useEffect(() => {
    setTheme(window.localStorage.theme);
  }, []);

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className="fixed sticky-nav bg-white dark:bg-black bg-opacity-30 top-0 w-full">
        <header className="flex justify-between items-center px-2 py-8 dark:bg-black max-w-screen-md mx-auto md:pt-12 md:pb-8">
          <div
            className="cursor-pointer flex-shrink-0 w-10 h-10 rounded-sm bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
            onClick={() => setTheme(colorTheme)}
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </div>
          <nav>
            <ul className="flex items-center justify-end">
              <li className="normal-links">
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li className="normal-links">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="normal-links">
                <Link href="/about">About</Link>
              </li>
              <li className="normal-links">
                <Link href="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
