import logo from './logo.svg';
import sauteeLogo from './images/Full Logo.svg';
// import {ReactComponent as sauteeLogo} from './images/SimplifiedLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sauteeLogo} className="App-logo" alt="logo" />
        {/* <SauteeLogo/> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
