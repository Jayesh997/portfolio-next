"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "../../lib/utils";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiFramer,
  SiAmazonapigateway,
} from "react-icons/si";
import { GrConnect } from "react-icons/gr";

import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "../../data/confetti.json";
import MagicButton from "./MagicButton";
import { IoMdDownload } from "react-icons/io";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Redux", icon: <FaNodeJs /> }, // No specific Redux icon, using NodeJS as an example
    { name: "NextJS", icon: <FaReact /> }, // No specific NextJS icon, using React as an example
    { name: "git/github", icon: <FaGithub /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ];

  const rightLists = [
    { name: "TailWind CSS", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "Websocket", icon: <GrConnect /> },
    { name: "Rest API", icon: <SiAmazonapigateway /> },
  ];
  // const leftLists = ["ReactJS", "Redux", "NextJS", 'git/ github', 'HTML5', 'CSS3'];
  // const rightLists = ["TailWind CSS", "TypeScript", "GraphQL", 'Framer Motion', 'Websocket', 'Rest API'];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "jayeshgupta.997@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleDownload = async () => {
    try {
      const downloadUrl = "/JayeshGuptaResume.pdf"; // Path to your resume file in the public folder

      const response = await fetch(downloadUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "JayeshGuptaResume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Remove after download
    } catch (error) {
      console.error("Download error", error);
    }
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div
        className={
          id === 6 || id === 2
            ? "flex justify-center items-center text-center h-full"
            : "h-full"
        }
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 overflow-y-scroll"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div
            className={`${
              id === 3 ? "max-w-24" : ""
            } font-sans font-extralight  md:max-w-52 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 `}
          >
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && (
            <div className="pt-5 flex justify-center items-center">
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute right-3 top-3 overflow-hidden opacity-80">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 animate-scroll-up-down md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs  rounded-lg text-center bg-[#10132E] flex items-center gap-2"
                  >
                    {item.icon} {item.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 animate-scroll-down-up py-10 md:gap-3 lg:gap-8">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs rounded-lg text-center bg-[#10132E] flex items-center gap-2"
                  >
                    {item.icon} {item.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title="Download my resume"
                icon={<IoMdDownload />}
                position="left"
                handleClick={handleDownload}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
