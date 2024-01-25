import '../App.css';

import { GiRaven } from 'react-icons/gi';
// import { BsFillMoonStarsFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import DP from '../assets/og.png';
import { Projects } from '../const/project';
import { useState } from 'react';
import { Stacks } from '../const/stacks';
// import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 font-poppins md:px-20 lg:px-40">
        <section className="min-h-screen">
          {/* navbar */}
          <nav className="py-10 mb-12 flex justify-between">
            <a href="/">
              <h1 className="text-5xl font-caveat">
                <span className="text-rdrPurp">a</span>nurodh
              </h1>
            </a>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li> */}
              <li>
                {/* <Link to="/resume">
                  <button className=" bg-gradient-to-tr from-rdrPurp  to-nur  text-white px-5 py-2 rounded-md ml-8">
                    Resume
                  </button>
                </Link> */}
              </li>
            </ul>
          </nav>
          {/* intro */}
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-rdrPurp font-semibold md:text-6xl">Anurodh Pandey</h2>
            <h3 className=" font-mulish text-2xl py-2 text-nur md:text-3xl"> React Developer </h3>
            <p className="font-mulish text-md py-5 leading-8 text-gray-800 text-center md:text-lg max-w-xl mx-auto">
              Hi, I'm a Front-end Developer from Sydney, Australia.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-00">
            <a href="https://www.github.com/nur0078/" target="_blank">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/pandeyanurodh/" target="_blank">
              <BsLinkedin />
            </a>
            <a href="mailto:anurodhp7@gmail.com">
              <GiRaven />
            </a>
          </div>
          <div className="relative  mt-20  ">
            <img
              src={DP}
              alt="Anurodh Pandey"
              className="rounded-full w-96 h-96 mt-20 mx-auto md:h-96 md:w-96"
            />
          </div>
        </section>
        <section className="pt-4 font-poppins text-xl">
          <div className="  text-center ">
            <h1>Tech Stack</h1>
            <br />
            <div className=" flex gap-6 mx-auto w-12 h-12 justify-center ">
              {Stacks.map((stack, index) => (
                <StackComponent key={index} src={stack.src} alt={stack.alt} />
              ))}
            </div>
          </div>
        </section>

        <section className="pt-12">
          <div className="text-center">
            <h3 className="text-3xl py-1"> My Portfolio</h3>
            <p className="font-mulish text-md py-2 leading-8 text-gray-800 ">
              Hi, These are the projects I have done so far.
            </p>
          </div>
          <div className=" flex gap-10 flex-wrap py-4 justify-center  ">
            {Projects.map((project, index) => {
              return <Card project={project} key={index} />;
            })}
          </div>
        </section>
      </main>
      <footer className="  text-center text-lg p-5 mt-10 bg-gradient-to-bl   text-black ">
        Copyright &copy; 2024. All rights are reserved
      </footer>
    </div>
  );
}
interface Project {
  title: string;
  url: string;
  description: string;
  tools: string[];
  img: string; // Change this if img is not a string
}
interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const [isCardClicked, setIsCardClicked] = useState(false);

  return (
    <div
      onClick={() => setIsCardClicked(!isCardClicked)}
      className={`transform ease-in-out duration-500 hover:scale-105 rounded-lg px-5 py-4 leading-normal shadow-md shadow-slate-300 w-80 h-104 dark:text-black text-center font-poppins dark:shadow-md dark:shadow-white dark:bg-white dark:opacity-80`}
    >
      {isCardClicked ? (
        <div className=" flex flex-col gap-6 shadow-md flex-1 bg-gray-200 h-72 ">
          <a href={project.url} target="_blank">
            <h1 className=" hover:text-[#A770EF] text-lg underline ">{project.title}</h1>
          </a>
          <h2>{project.description}</h2>
          <div className="flex gap-4 flex-wrap justify-center pb-4 ">
            {project.tools.map((tool: string, index: number) => {
              return (
                <div
                  key={index}
                  className="  rounded shadow  shadow-slate-400 px-5 py-2 bg-slate-600 text-red dark:bg-slate-50 dark:text-black"
                >
                  {tool}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col shadow-lg rounded-lg">
          <a href={project.url} target="_blank">
            <h1 className="  p-0 text-center font-poppins text-lg text-black underline ">
              {project.title}
            </h1>
          </a>
          <img src={project.img} alt={project.img} className="rounded-lg w-90 h-60" />
        </div>
      )}
    </div>
  );
};

type StackProps = {
  src: string;
  alt: string;
};

const StackComponent: React.FC<StackProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
