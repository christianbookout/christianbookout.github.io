import React, { useState, useRef } from "react";
const java = {
  content: "/svgs/tools/java.svg",
  title: "Java",
};
const rust = { content: "/svgs/tools/rust.svg", title: "Rust" };
const opengl = { content: "/svgs/tools/opengl.svg", title: "OpenGL" };
const flutter = { content: "/svgs/tools/flutter.svg", title: "Flutter" };
const dart = { content: "/svgs/tools/dart.svg", title: "Dart" };
const python = { content: "/svgs/tools/python.svg", title: "Python" };
const flask = { content: "/svgs/tools/flask.svg", title: "Flask" };
const haskell = { content: "/svgs/tools/haskell.svg", title: "Haskell" };
const maven = { content: "/svgs/tools/maven.svg", title: "Maven" };
const godot = { content: "/svgs/tools/godot.svg", title: "Godot" };
const blender = { content: "/svgs/tools/blender.svg", title: "Blender" };
const audacity = { content: "/svgs/tools/audacity.svg", title: "Audacity" };
const unity = { content: "/svgs/tools/unity.svg", title: "Unity" };
const procreate = { content: "/svgs/tools/procreate.svg", title: "Procreate" };
const aseprite = { content: "/svgs/tools/aseprite.svg", title: "Aseprite" };
const csharp = { content: "/svgs/tools/csharp.svg", title: "C#" };
const mysql = { content: "/svgs/tools/mysql.svg", title: "MySQL" };

const Project = ({
  title,
  description,
  about,
  screenshots,
  widget,
  tools,
  githubUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalContent = widget ? [widget] : screenshots;
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleNavigation = (direction) => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + direction;
      if (nextIndex >= totalContent.length) {
        return 0;
      } else if (nextIndex < 0) {
        return totalContent.length - 1;
      }
      return nextIndex;
    });
  };

  const toggleHover = (expand) => {
    if (expand) {
      cardRef.current.style.transform = "scale(1.05)";
      cardRef.current.style.zIndex = "10";
      cardRef.current.style.position = "relative";
      cardRef.current.parentNode.style.position = "relative";
      const fullHeight = descriptionRef.current.scrollHeight;
      descriptionRef.current.style.maxHeight = fullHeight + "px";
    } else {
      cardRef.current.style.transform = "none";
      cardRef.current.style.zIndex = "1";
      descriptionRef.current.style.maxHeight = "0";
    }
    setIsHovered(expand);
  };

  return (
    <div
      ref={cardRef}
      className="bg-light rounded-xl shadow-lg m-10 p-10 md:w-[35vw] w-[70vw]"
      style={{
        boxShadow: "20px 20px #758694",
        transition: "transform 0.5s ease",
        gridArea: "auto",
      }}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      onFocus={() => toggleHover(true)}
      onBlur={() => toggleHover(false)}
      tabIndex="0"
    >
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          className="absolute right-2 top-2"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: isHovered ? 1 : 0,
          }}
        >
          <img src="/svgs/github.svg" alt="GitHub Link" className="w-6 h-6" />
        </a>
      )}
      <h2 className="text-center text-2xl font-bold mb-2 break-words">
        {title}
      </h2>
      <div className="flex justify-center gap-2 mb-2">
        {tools?.map((tool, index) => (
          <img
            key={index}
            src={tool.content}
            title={tool.title}
            alt={`${tool.title} SVG icon`}
            className="w-8 h-8 rounded-full overflow-hidden drop-shadow-lg bg-light"
          />
        ))}
      </div>
      <p className="text-dark text-center text-base mb-2 font-bold">{about}</p>
      <div
        ref={descriptionRef}
        style={{
          maxHeight: "0",
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        <div
          className="p-5 rounded-xl"
          style={{ boxShadow: "inset 0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
        >
          {description}
        </div>
      </div>
      {screenshots && (
        <div className="relative w-full h-64 shadow-xl rounded-xl flex justify-center items-center">
          <img
            src={totalContent[currentIndex].content}
            alt={totalContent[currentIndex].alt}
            className="shadow-xl object-cover h-64 w-full rounded-xl"
          />
          {totalContent.length > 1 && (
            <div
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isHovered ? 1 : 0,
              }}
            >
              <button
                onClick={() => handleNavigation(-1)}
                className="text-dark absolute left-[-20px] top-1/2 transform -translate-y-1/2"
              >
                ◀
              </button>
              <button
                onClick={() => handleNavigation(1)}
                className="text-dark absolute right-[-20px] top-1/2 transform -translate-y-1/2"
              >
                ▶
              </button>
            </div>
          )}
        </div>
      )}
      {widget && (
        <div className="flex justify-center items-center">
          {totalContent[0]}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const softwareDev = [
    {
      title: "Spiderweb Simulator",
      about:
        "A spiderweb simulation with realistic web generation and physical modelling.",
      description:
        "As my introduction to Rust, the Spiderweb Simulator was a tough but rewarding project. Built for my final project of CSC 473: Fundamentals of Computer Animation, I plunged face-first into the world of simulation, research papers, and low-level programming. I came out of this experience with a solid understanding of Rust, OpenGL, simulation algorithms, and developing algorithms of my own. The research paper I wrote for this project is available on the GitHub repository.",
      screenshots: [
        {
          content: "/screenshots/spiderweb-ui.png",
          alt: "The user interface for the spiderweb simulator, showing a variety of generation settings on the left hand side, a generated web in the center, and information pertaining to the simulation such as amount of webs, simulation time, etc. on the bottom-right side.",
        },
        {
          content: "/screenshots/teaser.png",
          alt: "An image of a generated spiderweb after it has been simulated, pushed down by gravity. The web contains many strands, appearing very similar to an actual web. The web has two insects attached to it, represented by green squares.",
        },
        {
          content: "/screenshots/wind1.png",
          alt: "A simple spiral web with few strands before simulation.",
        },
        {
          content: "/screenshots/wind2.png",
          alt: "The same simple spiral web as the previous screenshot but after being simulated and hit with a strong gust of wind.",
        },
      ],
      tools: [rust, opengl],
      githubUrl: "https://github.com/christianbookout/spiderweb-sim",
    },
    {
      title: "Glisser",
      about: "A WIP multiplayer game server for a game based on Chickapig.",
      description:
        "After over a year and a half of professional Haskell development at Leanpub, I decided to develop a multiplayer game server to demonstrate my Haskell knowledge. Haskell is fantastic as a parsing language, but can be used for so much more. My goal for this project is to have a fully functional multiplayer server, with a web interface for creating, joining, and playing board games. The project is still in its early stages, but I'm excited to see where it goes.",
      tools: [haskell],
      screenshots: [
        {
          content: "/screenshots/glisser.png",
          alt: "A screenshot of Haskell Glisser code for storing teams, directions, and game objects.",
        },
      ],
      githubUrl: "https://github.com/christianbookout/glisser",
    },
    {
      title: "The Watering Hole",
      about: "A social media application for posting pictures of animals.",
      description:
        "I worked on The Watering Hole in a team of four with the UVic Peacock Club as our client for SENG 321: Requirements Engineering. This project involved requirements gathering, prioritization, and implementation. I was responsible for implementing the Flask backend, MySQL database, and the Flutter-backend integration. While the frontend needed more polish, I was proud of the functionality we achieved given the time constraints.",
      tools: [flutter, dart, python, flask, mysql],
      widget: (
        <div className="rounded-xl shadow-xl">
          <iframe
            className="rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/px1kI4JNQcg"
            title="The Watering Hole Demo"
            allowFullScreen="true"
          ></iframe>
        </div>
      ),
      githubUrl: "https://github.com/christianbookout/the-watering-hole",
    },
    {
      title: "Can't See Chess",
      about:
        "A Discord bot for playing blind chess, storing ratings, analyzing games, and visually interacting with finished games.",
      description:
        "I've always been fascinated by those who can play chess without seeing a board in front of them. By creating a Discord bot that knows the rules of chess, can visually represent the board post-game, can analyze your game, and can store your rating, I was able to bring the blindfolded chess experience to Discord. Developing this bot improved my desire for creating a clean user experience.",
      screenshots: [
        {
          content: "/screenshots/cantseechess1.png",
          alt: "A Discord embed showing a chess board after moves 1. e4 e5 2. nc3 nf6. The score is +0.1 for white, and the opening is the Vienna Game: Falkbeer Variation. The FEN is displayed at the bottom.",
        },
      ],
      tools: [java, maven],
      githubUrl: "https://github.com/intrnlerr/cantseechess",
    },
    {
      title: "Rome Plugin",
      about: "A Minecraft plugin for simulating Roman civilization.",
      description:
        "One of my first major projects, the Rome Plugin was a Minecraft server plugin that simulated a Roman Empire. I gained an introduction to MySQL, storing all information relevant including user roles, elections, political parties, land claims, and more. The plugin ended up to be an amalgamation of many smaller projects, including its own blockchain and programming language.",
      tools: [java, maven, mysql],
      githubUrl: "https://github.com/christianbookout/rome-plugin",
    },
  ];

  const gameDev = [
    {
      title: "Banana Slip",
      about: "A 3D speedrunning platformer game with a hint of nostalgia.",
      description:
        "My most recent game jam, Banana Slip, is my personal favourite game development project. This was my first in-person jam, and lasted two days. Working in a team of five, I learned the level of quality and polish that can be achieved by working with amazing people in such a short time frame. We created a full three-level game with timed progression and a working hosted leaderboard. This project is ongoing development, with plans to release on Steam.",
      widget: (
        <iframe
          title="Banana Slip Itch Page"
          className="rounded-xl shadow-xl"
          src="https://itch.io/embed/2499721"
          width="208"
          height="167"
        >
          <a href="https://christianbookout.itch.io/banana-slip">
            Banana Slip by christianbookout, Sikowny
          </a>
        </iframe>
      ),
      tools: [godot, blender, audacity],
      githubUrl: "https://github.com/JDS890/GGJ2024",
    },
    {
      title: "Slay Bells Ring",
      about: "A 3D atmospheric horror game about repairing Santa's sleigh. ",
      description:
        "Slay Bells Ring was my first experience with game development in a professional team, with specific roles and expectations. The result was my first fully completed game. Taking place over Christmas break, this game jam lasted a week. I learned a lot about the development of fun-yet-challenging AI, as well as the importance of audio and visual design.",
      widget: (
        <iframe
          title="Slay Bells Ring Itch Page"
          className="rounded-xl shadow-xl"
          src="https://itch.io/embed/2432661"
          width="208"
          height="167"
        >
          <a href="https://christianbookout.itch.io/slay-bells-ring">
            Slay Bells Ring by christianbookout, DisguisedGrandpa, Kibblez,
            Frigid
          </a>
        </iframe>
      ),
      tools: [unity, csharp],
      githubUrl: "https://github.com/christianbookout/SlayBellsRing",
    },
    {
      title: "Solitoad",
      about: "An ambient 2D game about a frog using insects for entertainment.",
      description:
        "As a solo project and my first game jam, Solitoad was a fantastic experience which helped me fall in love with game development. I learned the crunch of game jams, and the necessity for rapid prototyping and iteration.",
      widget: (
        <iframe
          title="Solitoad Itch Page"
          className="rounded-xl shadow-xl"
          src="https://itch.io/embed/2113985?border_width=0"
          width="208"
          height="167"
        >
          <a href="https://christianbookout.itch.io/solitoad">
            Solitoad by christianbookout
          </a>
        </iframe>
      ),
      tools: [unity, csharp, procreate],
      githubUrl: "https://github.com/christianbookout/Solitoad",
    },
    {
      title: "Dungeon Detox",
      about: "A 2D/3D hybrid game about keeping your dungeon clean.",
      description:
        "Dungeon Detox was my first game jam with a team (thus using version control). With this in mind, we ran into many issues with Plastic SCM, Unity's old version control system. However, we were able to power through these issues and create a fun experience. I came out of this project with an appreciation for playtesting and iteration, as many aspects of the game were unintuitive to new players.",
      widget: (
        <iframe
          title="Dungeon Detox Itch Page"
          className="rounded-xl shadow-xl"
          src="https://itch.io/embed/2247847"
          width="208"
          height="167"
        >
          <a href="https://christianbookout.itch.io/dungeon-detox">
            Dungeon Detox by christianbookout, DisguisedGrandpa
          </a>
        </iframe>
      ),
      tools: [unity, csharp, aseprite],
      githubUrl: "https://github.com/christianbookout/dungeon-detox",
    },
    {
      title: "Corn Gobblin",
      about: "A 2D platformer game about a goblin fighting squirrels for corn.",
      description:
        "As an introduction to Godot, 2D animation, and audio design, Corn Gobblin was an excellent learning experience. I worked in a team of five for a three-day game jam, most of which I spent scribbling down character designs and animations. I worked as a mentor for the team, as all of the other members but one were completely new to game development.",
      widget: (
        <iframe
          title="Corn Gobblin Itch Page"
          className="rounded-xl shadow-xl"
          src="https://itch.io/embed/2459577"
          width="208"
          height="167"
        >
          <a href="https://christianbookout.itch.io/corn-gobblin">
            Corn Gobblin by christianbookout, goolent`, intrnlerr, Clial
          </a>
        </iframe>
      ),
      tools: [godot, procreate, audacity],
    },
  ];

  return (
    <div className="bg-dark">
      <header className="bg-dark bg-dark p-4 shadow-lg" />
      <h1
        className="text-6xl font-bold pt-20 text-light flex justify-center"
        style={{ textShadow: "5px 5px #758694" }}
        id="software-dev"
      >
        Software Dev
      </h1>
      <div
        className="flex md:flex-row flex-col justify-center md:items-stretch items-center p-10"
        style={{ maxWidth: "100vw" }}
      >
        <Column projects={softwareDev.filter((_, index) => index % 2 === 0)} />
        <Column projects={softwareDev.filter((_, index) => index % 2 === 1)} />
      </div>
      <h1
        className="text-6xl font-bold pt-20 text-light flex justify-center"
        style={{ textShadow: "5px 5px #758694", id: "software-dev" }}
      >
        Game Dev
      </h1>
      <div
        className="flex md:flex-row flex-col justify-center md:items-stretch items-center p-10"
        style={{ maxWidth: "100vw" }}
      >
        <Column projects={gameDev.filter((_, index) => index % 2 === 0)} />
        <Column projects={gameDev.filter((_, index) => index % 2 === 1)} />
      </div>
    </div>
  );
};

const Column = ({ projects }) => (
  <div className="flex flex-col space-y-30">
    {projects.map((project, index) => (
      <Project
        key={index}
        title={project.title}
        about={project.about}
        description={project.description}
        screenshots={project.screenshots}
        widget={project.widget}
        tools={project.tools}
        githubUrl={project.githubUrl}
      />
    ))}
  </div>
);

export default Projects;
