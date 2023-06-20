import './App.css';
import { GiRaven } from 'react-icons/gi';
import { BsFillMoonStarsFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import DP from '../src/assets/og.png';

function App() {
  return (
    <div className="bg-white px-10 font-poppins">
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
          <h2 className="text-5xl py-2 text-rdrPurp font-semibold ">Anurodh Pandey</h2>
          <h3 className=" font-mulish text-2xl py-2 text-nur"> React Dveloper </h3>
          <p className="font-mulish text-md py-5 leading-8 text-gray-800 text-justify">
            Hi, I'm a Front-end React Developer from Sydney, Australia.Labore Lorem aliquip amet
            voluptate. Qui commodo aliquip sint cupidatat in commodo nulla ullamco occaecat aliquip
            laboris non laboris incididunt exercitation.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-00">
          <BsGithub />
          <BsLinkedin />
          <GiRaven />
        </div>
        <div className="relative  mt-20  ">
          <img src={DP} alt="Anurodh Pandey" className="rounded-full w-80 h-80 mx-auto" />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1"> My Portfolio</h3>
          <p className="font-mulish text-md py-2 leading-8 text-gray-800 text-justify">
            Hi, I'm a Front-end React Developer from Sydney, Australia.Labore Lorem aliquip amet
            voluptate. Qui commodo aliquip sint cupidatat in commodo nulla ullamco occaecat aliquip
            laboris non laboris incididunt exercitation.
          </p>
        </div>
        <div>
          <div>
            <img src= />
          </div>
        </div>
      </section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
