import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-blue">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
       Connect with your fitness app
        </p>
        <a
          className="bg-white"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      <button className="btn gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Welcome to tracki
</button>
        </a>
      </header>
    </div>
  );
}

export default App;
