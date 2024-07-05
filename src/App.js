import React, { useRef } from 'react';
import './App.css';

function App() {
  const softwareDevRef = useRef(null);

  const scrollToRef = () => softwareDevRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="App flex flex-col justify-between h-screen bg-dark text-light">
    <div className="flex flex-col items-center justify-center flex-grow">
      <h1 className="text-6xl font-bold p-10" style={{ textShadow: '5px 5px #758694' }}>
        Christian Bookout
      </h1>
      <p className="text-light p-5">
        I'm a software engineer with a passion for meaningful innovation.
      </p>
      <div className="flex flex-row items-center justify-center">
        <a href="https://github.com/christianbookout" target="_blank">
          <img src={"/svgs/github.svg"} alt="GitHub" className="inline-block w-6 h-6 mx-2 text-light" />
        </a>
        <a href="https://www.linkedin.com/in/christian-bookout/" target="_blank">
          <img src={"/svgs/linkedin.svg"} alt="LinkedIn" className="inline-block w-6 h-6 mx-2" />
        </a>
        <a href="mailto:christianmbookout@gmail.com">
          <img src={"/svgs/email.svg"} alt="Email" className="inline-block w-6 h-6 mx-2" />
        </a>
      </div>
    </div>
    <div className="flex items-end justify-center pb-8 w-full">
    <button onClick={scrollToRef} style={{ background: 'none', border: 'none' }}>
          <img src={"/svgs/down-arrow.svg"} alt="Scroll Down" className="w-6 h-6 fill-light"/>
        </button>
    </div>
  </div>
  );
}

export default App;
