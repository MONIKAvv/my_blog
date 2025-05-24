import Image from "next/image";
import React from "react";

const Tophome = () => {
  return (
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          Hi, <span className="font-semibold">My name is Monika </span>,{" "}
          <br className="hidden lg:block" /> a Software Developer{" "}
          <span className="font-semibold underline decoration-primary"></span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          I am passionate about building user-friendly digital experiences.{" "}
          <br className="hidden lg:block" />
          I love reading, exploring new technologies,  <br className="hidden lg:block" />
          and constantly learning to
          grow as a developer.
        </p>
        <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
          <form
            action="https://www.creative-tim.com/twcomponents/search"
            className=" flex flex-wrap justify-between md:flex-row"
          ></form>
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <img
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="tailwind css components"
          className="w-full h-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Tophome;
