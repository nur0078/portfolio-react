export default function Resume() {
  return (
    <div className=" lg:px-80 lg:py-4 bg-white md:p-10">
      <div className="bg-gray-900 px-10 rounded-md leading-normal text-white">
        <h1 className="text-center text-4xl text-gray-300 mb-10 pt-4">Anurodh Pandey | Resume</h1>
        <h2 className=" text-3xl text-gray-300 mb-3 pt-4">Primary Information</h2>
        <p className=" text-md text-gray-300 mb-6 pt-4 leading-7">
          <strong>Name:</strong>&nbsp; Anurodh Pandey <br />
          <strong>Employment Status:</strong>&nbsp; Student
          <br />
          <strong>College:</strong>&nbsp; Federation University of Australia <br />
          <strong>Undergraduate:</strong>&nbsp; Bachelor in Information Technology
        </p>
        <p className=" text-md text-gray-300 pt-4">
          <strong>Address:</strong>
        </p>
        <p className=" text-md text-gray-300 pt-4 px-10 leading-7">Primary: Kohalpur, Banke</p>
        <p className=" text-md text-gray-300 mb-4 pt-4">
          <strong>Email:</strong> &nbsp;{' '}
          <a href="mailto:anurodhp7@gmail.com">anurodhp7@gmail.com</a>
        </p>
        <hr />
        <strong>
          <h2 className=" text-2xl text-gray-300 mb-4 pt-4">Skills and Experiences</h2>
        </strong>

        <strong>
          <h4 className=" text-lg text-gray-300 mb-4 pt-4">Relevant Skills:</h4>
        </strong>
        <ul className=" text-md px-10 text-gray-300 mb-4 pt-4 leading-7">
          <li>
            <p>Programming Languages: Python, Javascript, C , Typescript</p>
          </li>
          <li>
            <p>Web Development</p>
            <ul className=" text-md text-gray-300 mb-4 pt-4 px-20">
              <li>
                Front End: HTML5, CSS3, JavaScript, React, Redux , Next.js <br />
              </li>
              <li>
                Backend: Django, FastApi, Node (Express)
                <br />
              </li>
              <li>Database: SQLite3 , SQL , Mongo</li>
            </ul>
          </li>

          <li>
            <p>App Developmentx: Flutter and Dart.</p>
          </li>
          <li>
            <p>Others:LaTex, Git, Docker .</p>
          </li>
        </ul>

        <strong>
          <h4 className=" text-lg text-gray-300 mb-4 pt-4">Highlighted Projects:</h4>
        </strong>

        <ul className=" text-lg text-gray-300 mb-4 pt-4 px-10">
          <li>
            <p>
              <a href="https://pagli-writes.vercel.app/">Pagli Blog</a>
            </p>
            <ul className=" text-md text-gray-300 mb-4 pt-4 pl-20">
              <li>
                Web platform for author where they are can publish their literature from anywhere.
              </li>
              <li>Developed using React, TypeScrit, Node.js, TailwindCSS, Figma</li>
            </ul>
          </li>
          <li>
            <p>
              <a href="https://business-card-virid-omega.vercel.app/">Digital Business Card</a>
            </p>
            <ul className=" text-md text-gray-300 mb-4 pt-4 pl-20">
              <li>
                A digital business card solution, incorporating responsive design and interactive
                elements, which streamlined networking processes and facilitated seamless sharing of
                contact information.
              </li>
              <li>Developed using Node.js, React, JavaScript , CSS</li>
            </ul>
          </li>
          <li>
            <p>
              <a href="https://github.com/Sital999/Letter-Recommendation">Recommendation Letter</a>
            </p>
            <ul className=" text-md text-gray-300 mb-4 pt-4 pl-20">
              <li>Web application for generating Recommendation Letter.</li>
              <li>Developed using Django, Javascript, Bootstrap.</li>
            </ul>
          </li>
        </ul>

        <hr />

        <strong>
          <h4 className=" text-lg text-gray-300 mb-4 pt-4 ">Relevant Links:</h4>
        </strong>

        <ul className=" text-md text-gray-300 mb-4 pt-4 px-20 ">
          <li>
            GitHub: <a href="https://github.com/nur0078">https://github.com/nur0078</a>{' '}
          </li>
          <li>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/sital-nagarkoti-b62409241/">
              https://www.linkedin.com/in/pandeyanurodh/
            </a>
          </li>
        </ul>
        <hr className="  pb-4 pt-4  " />
      </div>
    </div>
  );
}
