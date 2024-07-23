import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "../data";
import MagicButton from "./ui/MagicButton";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[65vw] mb-10">
          Let's connect and discuss how we can{" "}
          <span className="text-purple">bring your dream website to life.</span>
        </h1>
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p> */}
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div className="flex gap-10 pt-10">
          <FaLinkedin size={30} color="#ffffff" />
          <FaGithubSquare size={30} color="#ffffff" />
          <FaInstagramSquare size={30} color="#ffffff" />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="text-xs font-light">Copyright © 2024 Jayesh Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
