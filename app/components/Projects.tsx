import React from 'react'
import Heading from "@/app/components/Heading";
import Card from "@/app/components/Card";
import "@/app/styles/projects.css"

const data = [
    {
        id: 0,
        title: "Weather Widget App",
        desc: "A Next.js & ypescript tool for fetching and displaying real-time weather data.",
        img: "/weather.jpg",
        tags: ["Next.js", "Node", "React", "CSS"],
    },
    {
        id: 1,
        title: "Count Down Timer App",
        desc: "A React & Typescript based app for managing and organizing you task efficiently.",
        img: "/countdown.jpg",
        tags: ["Next.js", "Node", "React", "CSS"],
    },
    {
        id: 2,
        title: "Static-Resume-Builder",
        desc: "A Typescript-based interactive resume build with HTML, CSS allowing user to showcase their skills dynamically.",
        img: "/resumebld.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    }
];
const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <Heading title="My Projects"/>
            <div className="project-grid projects-grid-xl projects-grid-md-2 projects-center">
                {data.map((el) => (
                    <Card
                    key={el.id}
                    title={el.title}
                    desc={el.desc}
                    img={el.img}
                    tags={el.tags}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;
