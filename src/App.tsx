import './App.css';
import { GiRaven } from 'react-icons/gi';
import { BsFillMoonStarsFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import DP from '../src/assets/og.png';
import Blog from '../src/assets/blog.png';
import Project1 from '../src/assets/project1.png';
import Project2 from '../src/assets/project2.png';
import ID from '../src/assets/id.png';

function App() {
  return (
    <div>
      <main className="bg-white px-10 font-poppins md:px-20 lg:px-40">
        <section className="min-h-screen">
          {/* navbar */}
          <nav className="py-10 mb-12 flex justify-between">
            <a href="/">
              <h1 className="text-3xl font-caveat">
                <span className="text-rdrPurp">a</span>nurodh
              </h1>
            </a>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-tr from-rdrPurp  to-nur  text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  {/* hover:from-dskBlk  hover:to-dskRed /// dskBlk= gray-700 */}
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* intro */}
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-rdrPurp font-semibold md:text-6xl">Anurodh Pandey</h2>
            <h3 className=" font-mulish text-2xl py-2 text-nur md:text-3xl"> React Dveloper </h3>
            <p className="font-mulish text-md py-5 leading-8 text-gray-800 text-justify md:text-lg max-w-xl mx-auto">
              Hi, I'm a Front-end React Developer from Sydney, Australia.Labore Lorem aliquip amet
              voluptate. Qui commodo aliquip sint cupidatat in commodo nulla ullamco occaecat
              aliquip laboris non laboris incididunt exercitation.
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
              className="rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96"
            />
          </div>
        </section>
        <section>add Tech Stack | images of tools</section>

        <section>
          <div>
            <h3 className="text-3xl py-1"> My Portfolio</h3>
            <p className="font-mulish text-md py-2 leading-8 text-gray-800 text-justify">
              Hi, I'm a Front-end React Developer from Sydney, Australia.Labore Lorem aliquip amet
              voluptate. Qui commodo aliquip sint cupidatat in commodo nulla ullamco occaecat
              aliquip laboris non laboris incididunt exercitation.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img
                src={Blog}
                alt="Blog site for an author"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2"> Blog for an Author</h3>
              <p className="py-2 font-mulish">
                A blog site for an author where they can publish their literature.
              </p>
              <h4 className="py-4 text-rdrPurp  ">Design Tools I Use</h4>
              <p className="text-nur py-1">ReactJS</p>
              <p className="text-nur py-1">TypeScript</p>
              <p className="text-nur py-1">Tailwind CSS</p>
              <p className="text-nur py-1">Figma</p>
              <p className="text-nur py-1">Git/Github</p>
            </div>

            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img
                src={ID}
                alt="Digital Business Card"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2"> Digital Business Card</h3>
              <p className="py-2 font-mulish">A digital business card.</p>
              <h4 className="py-4 text-rdrPurp ">Design Tools I Use</h4>
              <p className="text-nur py-1">ReactJS</p>
              <p className="text-nur py-1">Javascript</p>
              <p className="text-nur py-1"> CSS</p>
              <p className="text-nur py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1"> My Portfolio</h3>
            <p className="font-mulish text-md py-2 leading-8 text-gray-800 text-justify">
              My portfolios are below:
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:h-90 lg:flex-row lg:flex-wrap">
            <div className="  flex-1 h-90">
              <img
                src={Project1}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
              />
            </div>
            <div className="  flex-1 ">
              <img
                src={Project2}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="  text-center text-lg p-5 mt-5 bg-gradient-to-bl from-rdrPurp  to-nur  text-white ">
        Copyright &copy; 2023. All rights are reserved
      </footer>
    </div>
  );
}

export default App;
