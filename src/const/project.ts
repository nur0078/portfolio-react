import PagliImg from '../assets/pagli.png'
import Biz from '../assets/bizzz.jpeg';
import CarGIF from '../assets/carGIF.gif';
import myTravels from '../assets/myTravels.png';
import Olaf from '../assets/olaf.jpeg';

export const Projects = [
    {
      title: "Car Hub",
      url: "https://car-showroom-five.vercel.app/",
      description: "A web application for author.",
      tools: ["ReactJS", "Tailwind", "TypeScript", "API", "Git/Github"],
      img: CarGIF,
    },
    {
      title: "Pagli Writes",
      url: "https://pagli-writes.vercel.app/",
      description: "A web application for author.",
      tools: ["ReactJS", "Tailwind", "TypeScript", "Figma", "Git/Github"],
      img: PagliImg,
    },
    {
      title: "Travel Journal",
      url: "https://travel-journal-bice.vercel.app/",
      description: ` Travel journal thats simply yours`,
      tools: ["ReactJS", "TypeScript", "Tailwind CSS", "Figma","Git/Github"],
      img: myTravels,
    },
    {
      title: "Digital Business",
      url: "https://business-card-virid-omega.vercel.app/",
      description: ` A digital business card.`,
      tools: ["ReactJS", "JavaScript", "CSS", "Figma"],
      img: Biz,
    },
    {
      title: "Don't Melt Olaf",
      url: "https://dont-melt-olaf.vercel.app/",
      description: "Word Guessing Game",
      tools: ["ReactJS", "TypeScript", "Tailwind CSS", "Figma"],
      img: Olaf,
    }


];

