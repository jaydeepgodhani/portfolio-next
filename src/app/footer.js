import Link from "next/link";
import {
  emailSVG,
  githubSVG,
  leetcodeSVG,
  linkedInSVG,
  twitterSVG,
} from "./helpers/utilities";

const ExternalLink = ({ hyperlink, children }) => {
  return (
    <Link
      className="mx-3 text-primary"
      href={hyperlink}
      target="_blank"
      replace
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

const SVG = ({view, svg}) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox={view}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={svg}></path>
    </svg>
  );
}

const Footer = () => {
  // const dotLottieRef = useRef(null);

  // const handleMouseEnter = () => {
  //   if (dotLottieRef.current) {
  //     dotLottieRef.current.play();
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (dotLottieRef.current) {
  //     dotLottieRef.current.pause();
  //   }
  // };

  return (
    <footer className="pt-6">
      {/* <Heading text={"Contact"} />
      <Para>
        Feel free to reach me at{" "}
        <a className="special" href="mailto:jaydeepgodhani16@gmail.com">
          jaydeepgodhani16@gmail.com
        </a>
      </Para>
      <Para>
        You can also find me on{" "}
        <a className="special" href="https://www.twitter.com/jaydeepgodhani">
          Twitter
        </a>
        ,{" "}
        <a
          className="special"
          href="https://www.linkedin.com/in/jaydeepgodhani"
        >
          LinkedIn
        </a>
        , and{" "}
        <a className="special" href="https://www.leetcode.com/jaydeepgodhani">
          LeetCode
        </a>
      </Para> */}
      <div className="flex justify-center mt-16 text-primary text-2xl">
        <ExternalLink hyperlink="mailto:jaydeepgodhani16@gmail.com">
          <SVG view="0 0 24 24" svg={emailSVG} />
        </ExternalLink>
        <ExternalLink hyperlink="https://www.linkedin.com/in/jaydeepgodhani">
          <SVG view="0 0 448 512" svg={linkedInSVG} />
        </ExternalLink>
        <ExternalLink hyperlink="https://www.github.com/in/jaydeepgodhani">
          <SVG view="0 0 24 24" svg={githubSVG} />
        </ExternalLink>
        <ExternalLink hyperlink="https://www.x.com/jaydeepgodhani">
          <SVG view="0 0 512 512" svg={twitterSVG} />
        </ExternalLink>
        <ExternalLink hyperlink="https://www.leetcode.com/jaydeepgodhani">
          <SVG view="0 0 24 24" svg={leetcodeSVG} />
        </ExternalLink>
      </div>
      <div className="flex justify-center my-8 text-primary">
        <Link className="mx-3 text-primary" href="https://godhani.in">
          © Jaydeep Godhani
        </Link>
        |
        <ExternalLink hyperlink="https://creativecommons.org/licenses/by-nc/4.0/">
          CC BY-NC 4.0
        </ExternalLink>
      </div>
      {/* <div className="flex justify-center mt-16 text-primary transition-all duration-1000 text-xs">
        <div
          className="w-1/3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DotLottieReact
            src={catPlaying}
            loop={false}
            autoplay={false}
            dotLottieRefCallback={(dotLottie) => {
              dotLottieRef.current = dotLottie;
            }}
          />
        </div> */}
    </footer>
  );
};

export default Footer;
