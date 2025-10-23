"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DARK, LIGHT, showTime, themeSwitcher } from "./helpers/utilities";

const Navbar = () => {
  const [time, setTime] = useState(showTime());
  const pathName = usePathname();
  const toggleTheme = () => {
    themeSwitcher(localStorage.theme === DARK ? LIGHT : DARK);
  };

  useEffect(() => {
    themeSwitcher(localStorage.theme);
    const timer = setInterval(() => {
      setTime(showTime());
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-screen sticky top-0 backdrop-opacity-97 backdrop-blur-[5px] z-10 bg-bg/40">
      <div className="flex items-center flex-row justify-center">
        <div></div>
        <div className="2xl:w-1/2 lg:w-3/4 py-[12px] px-4">
          <nav>
            <ul className="w-full flex flex-col text-xl items-center lg:flex-row">
              <li className="lg:w-[50%] xl:w-[60%] 2xl:w-[50%]">
                <Link
                  href="/"
                  className="border-b-0 no-underline shadow-none hover:shadow-none text-primary"
                >
                  {time}
                </Link>
              </li>
              <div className="flex flex-row w-full mt-3 justify-center lg:mt-0 lg:w-[50%] xl:w-[40%] 2xl:w-[50%]">
                <li className="mx-4">
                  <Link
                    href="/projects"
                    className={
                      pathName.endsWith("projects") ? "text-primary" : "special"
                    }
                  >
                    Projects
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/winnings"
                    className={
                      pathName.endsWith("winnings") ? "text-primary" : "special"
                    }
                  >
                    Winnings
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/posts"
                    className={
                      pathName.endsWith("posts") ? "text-primary" : "special"
                    }
                  >
                    Posts
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/knowledge"
                    className={
                      pathName.endsWith("knowledge")
                        ? "text-primary"
                        : "special"
                    }
                  >
                    Knowledge
                  </Link>
                </li>
                <li>
                  <button
                    onMouseDown={toggleTheme}
                    className="w-auto h-full flex items-center justify-center cursor-pointer mx-3 text-3xl"
                  >
                    {/* <svg className="h-6 w-full m-2 text-primary" viewBox="0 0 24 24">
                <desc>Theme Switcher Icon</desc>
                <g fill="currentColor">
                  <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"></path>
                </g>
              </svg> */}
                    <div className="bg-[rgb(var(--color-primary))] text-primary w-3 h-3 relative text-center rotate-[20deg]"></div>
                    <div className="bg-[rgb(var(--color-primary))] w-3 h-3 absolute text-center rotate-[155deg]"></div>
                  </button>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="w-full text-secondary border-[1px]" />
    </div>
  );
};

export default Navbar;
