import React from "react";
import figmaIcon from "../assets/figma.png";
import githubIcon from "../assets/github.png";
import hero from "../assets/hero.png";
import HeroBtn from "./HeroBtn";
export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Building digital <br />
            products & brands.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This free and open-source landing page template was built using the
            utility classes from{" "}
            <a href="#" className="hover:underline">
              Tailwind CSS
            </a>{" "}
            and based on the components from the Flowbite Library and the Blocks
            System.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <HeroBtn title="View on GitHub" path={githubIcon} link="#" />
            <HeroBtn title="Get Figma File" path={figmaIcon} link="#" />
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={hero} alt="Illustration of hero section" />
        </div>
      </div>
    </section>
  );
}
