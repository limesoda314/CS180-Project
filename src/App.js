import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alphanumerical recognizer
        </p>
        

        <p>Dataset</p>
        <a
          className="App-link"
          href="https://www.nist.gov/itl/products-and-services/emnist-dataset"
          target="_blank"
          rel="noopener noreferrer"
        >
          EMNIST dataset
        </a>
      </header>
    </div>
  );
}

export default App;
