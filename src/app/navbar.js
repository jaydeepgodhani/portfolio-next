"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { showTime } from "./helpers/utilities";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
  const [time, setTime] = useState(showTime());
  const pathName = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(showTime());
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-screen sticky top-0 backdrop-opacity-97 backdrop-blur-[5px] z-10 bg-bg/40">
      <div className="flex items-center flex-row justify-center">

        <div className="w-6/12 py-[12px] px-4">
          <nav>
            <ul className="w-full flex flex-col text-xl items-center lg:flex-row justify-between">
              <li className="">
                <Link
                  href="/"
                  className="border-b-0 no-underline shadow-none hover:shadow-none text-primary"
                >
                  {time}
                </Link>
              </li>
              <div className="flex flex-row mt-3 justify-center lg:mt-0 ">
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
                  <ThemeToggle />
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
