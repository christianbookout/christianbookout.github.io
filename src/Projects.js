import React, { useState, useRef } from 'react';
const java = "/svgs/tools/java.svg";
const rust = "/svgs/tools/rust.svg";
const opengl = "/svgs/tools/opengl.svg";
const flutter = "/svgs/tools/flutter.svg";
const dart = "/svgs/tools/dart.svg";
const python = "/svgs/tools/python.svg";
const flask = "/svgs/tools/flask.svg";
const haskell = "/svgs/tools/haskell.svg";
const maven = "/svgs/tools/maven.svg";
const godot = "/svgs/tools/godot.svg";
const blender = "/svgs/tools/blender.svg";
const audacity = "/svgs/tools/audacity.svg";
const unity = "/svgs/tools/unity.svg";
const procreate = "/svgs/tools/procreate.svg";
const aseprite = "/svgs/tools/aseprite.svg";
const csharp = "/svgs/tools/csharp.svg";
const mysql = "/svgs/tools/mysql.svg";

const Project = ({ title, description, about, screenshots, widget, tools, wip }) => {
    const cardRef = useRef(null);
    const descriptionRef = useRef(null);

    const toggleHover = (expand) => {
        if (expand) {
            cardRef.current.style.transform = 'scale(1.1)';
            cardRef.current.style.zIndex = '10';
            cardRef.current.style.position = 'relative';
            cardRef.current.parentNode.style.position = 'relative';
            const fullHeight = descriptionRef.current.scrollHeight;
            descriptionRef.current.style.maxHeight = fullHeight + 'px';
        } else {
            cardRef.current.style.transform = 'none';
            cardRef.current.style.zIndex = '1';
            descriptionRef.current.style.maxHeight = '0';
        }
    };

    return (
        <div ref={cardRef} className="bg-light shadow-lg m-10 p-10 transition-all duration-500 ease-in-out flex-none"
             style={{
                 width: '30vw',
                 boxShadow: '20px 20px #758694',
                 overflow: 'hidden',
                 transition: 'transform 0.5s ease',
                 gridArea: 'auto'
             }}
             onMouseEnter={() => toggleHover(true)}
             onMouseLeave={() => toggleHover(false)}>
            <h2 className="text-center text-2xl font-bold mb-2 break-words">{title}</h2>
            <div className="flex justify-center gap-2 mb-2">
                {tools?.map((tool, index) => (
                    <img key={index} src={tool} alt="tool" className="w-8 h-8 rounded-full overflow-hidden shadow-lg bg-white" />
                ))}
            </div>
            {wip && <p className="text-center text-lg">&#x26A0; Work in Progress &#x26A0;</p>}
            {screenshots && screenshots.length > 0 && <img src={screenshots[0]} alt="Project screenshot" className="w-full mb-2"/>}
            <p className="text-center text-base mb-2">{about}</p>
            <div ref={descriptionRef} style={{maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out'}}>{description}</div>
            <div>{widget}</div>
        </div>
    );
};


const Projects = () => {
    const softwareDev = [
        {   title: "Spiderweb Simulator",
            about: "A spiderweb simulation with realistic web generation and physical modelling.", 
            description: "",
            screenshots : [
                "/screenshots/spiderweb-ui.png",
                "/screenshots/teaser.png",
                "/screenshots/wind1.png",
                "/screenshots/wind2.png"
            ],
            tools: [
                rust,
                opengl
            ]
        },
        {   title: "Can't See Chess",
            about: "A Discord bot for playing blind chess, storing ratings, analyzing games, and visually interacting with finished games.", 
            description: "",
            screenshots: [],
            tools: [
                java,
                maven
            ]
        },
        {   title: "The Watering Hole",
            about: "A social media application for posting pictures of animals.", 
            description: "",
            tools: [
                flutter,
                dart,
                python,
                flask,
                mysql
            ]
        },
        {   title: "Glisser", 
            wip: true,
            about: "A multiplayer game platform mimicking Chick-a-Pig, developed using Haskell.",
            description: "",
            tools: [
                haskell
            ]
        },
        {   title: "Rome Plugin",
            about: "A Minecraft plugin for simulating Roman civilization.", 
            description: "",
            tools: [
                java,
                maven,
                mysql
            ]
        },
        
    ];

    const gameDev = [
        {   title: "Banana Slip",
            wip: true,
            about: "A 3D platformer game with a hint of nostalgia, developed using Godot 4.", 
            description: "My most recent game jam, Banana Slip, is my personal favourite game development project. This was my first in-person jam, and lasted two days. Working in a team of five, I learned the level of quality and polish that can be achieved by working with amazing people in such a short time frame. We created a full three-level game with timed progression and a working, hosted leaderboard. This project is ongoing development, with plans to release on Steam.",
            widget: <iframe frameBorder="0" src="https://itch.io/embed/2499721" width="208" height="167"><a href="https://christianbookout.itch.io/banana-slip">Banana Slip by christianbookout, Sikowny</a></iframe>,
            tools: [
                godot,
                blender,
                audacity
            ]
        },
        {   title: "Slay Bells Ring",
            about: "A 3D atmospheric horror game about repairing Santa's sleigh. ",
            description: "Slay Bells Ring was my first experience with game development in a professional team, with specific roles and expectations. The result was my first fully completed game. Taking place over Christmas break, this game jam lasted a week. I learned a lot about the development of fun-yet-challenging AI, as well as the importance of audio and visual design.",
            widget: <iframe frameBorder="0" src="https://itch.io/embed/2432661" width="208" height="167"><a href="https://christianbookout.itch.io/slay-bells-ring">Slay Bells Ring by christianbookout, DisguisedGrandpa, Kibblez, Frigid</a></iframe>,
            tools: [
                unity,
                csharp
            ]
        },
        {   title: "Solitoad",
            about: "An ambient 2D game about a frog using insects for entertainment.",
            description: "As a solo project and my first game jam, Solitoad was a fantastic experience which helped me fall in love with game development. I learned the crunch of game jams, and the necessity for rapid prototyping and iteration.",
            widget: <iframe frameBorder="0" src="https://itch.io/embed/2113985" width="208" height="167"><a href="https://christianbookout.itch.io/solitoad">Solitoad by christianbookout</a></iframe>,
            tools: [
                unity,
                csharp,
                procreate
            ]
        },
        {   title: "Dungeon Detox",
            about: "A 2D/3D hybrid game about keeping your dungeon clean.",
            description: "",
            widget: <iframe frameBorder="0" src="https://itch.io/embed/2247847" width="208" height="167"><a href="https://christianbookout.itch.io/dungeon-detox">Dungeon Detox by christianbookout, DisguisedGrandpa</a></iframe>,
            tools: [
                unity,
                csharp,
                aseprite
            ]
        },
        {   title: "Corn Gobblin",
            about: "A 2D platformer game about a goblin fighting squirrels for corn.",
            description: "As an introduction to Godot, 2D animation, and audio design, Corn Gobblin was an excellent learning experience. I worked in a team of five for a three-day game jam, most of which I spent scribbling down character designs and animations. I worked as a mentor for the team, as all of the other members but one were completely new to game development.",
            widget: <iframe frameBorder="0" src="https://itch.io/embed/2459577" width="208" height="167"><a href="https://christianbookout.itch.io/corn-gobblin">Corn Gobblin by christianbookout, goolent`, intrnlerr, Clial</a></iframe>,
            tools: [
                godot,
                procreate,
                audacity
            ]
        }
    ];

    const archive = [
        // java chess game
        // python chat server
        // java game engine
        // 
        //
        // Some other projects I've worked on before I used version control include:
        // https://maddergaboon.itch.io/chronofowl
        // OpenCV Python Peggle AI
        // Remote Desktop Java Application
        // Chrome Extension to listen to voice input and play the move in lichess
    ];

    return (
        <div className="bg-dark">
            <header className="bg-dark bg-dark p-4 shadow-lg"/>
            <h1 className="text-6xl font-bold p-10 text-light flex justify-center"
          style={{'textShadow': '5px 5px #758694', id: 'software-dev'}}>Software Dev</h1>
            <div className="flex flex-wrap items-start justify-center gap-20">
                {[].concat(softwareDev, gameDev, archive).map((project, index) => (
                <Project class=""
                    key={index} 
                    title={project.title} 
                    about={project.about} 
                    description={project.description} 
                    screenshots={project.screenshots}
                    widget={project.widget}
                    tools={project.tools}
                    wip={project?.wip}
                />
                ))}
            </div>
        </div>
    );
}

export default Projects;