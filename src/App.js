import github from './github.svg';
import linkedin from './linkedin.svg';
import email from './email.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-6 text-center">
      <h1 className="text-3xl font-bold">Christian Bookout</h1>
        <p>
          I'm a software engineer with a passion for meaningful innovation.
        </p>
        <img src={github} alt="GitHub" className="inline-block w-6 h-6 mx-2" />
        <img src={linkedin} alt="LinkedIn" className="inline-block w-6 h-6 mx-2" />
        <img src={email} alt="Email" className="inline-block w-6 h-6 mx-2" />
      </header>
    </div>
  );
}

export default App;
