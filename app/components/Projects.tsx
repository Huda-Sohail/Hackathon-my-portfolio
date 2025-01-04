import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Simple calculator",
    desc: "A basic HTML, CSS, and Typescript calculator for performing essential arithmetic operations.",
    img: "/simple calulator.PNG",
    width: 300,   // specify width and height here
    height: 200,  // specify height here
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Todo List",
    desc: "A react and typescript based app for managing and organizing your tasks efficiently.",
    img: "/todo list.PNG",
    width: 300,
    height: 200,
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Countdown Timer",
    desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature.",
    img: "/countdown timerrrrr.png",
    width: 300,
    height: 200,
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "Static Initiative Resume",
    desc: "A Typescript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/milestone 1.PNG",
    width: 300,
    height: 200,
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "Dynamic Resume Builder",
    desc: "A Typescript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/milestone 3.PNG",
    width: 300,
    height: 200,
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 5,
    title: "Shareable Resume Builder",
    desc: "A Typescript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/milestone 5.PNG",
    width: 300,
    height: 200,
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      
      {/* Grid layout for project cards */}
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          width={el.width}  
          height={el.height}
          tags={el.tags}
        />
      ))}
    </div>
  </div>
);
};

export default Projects;
