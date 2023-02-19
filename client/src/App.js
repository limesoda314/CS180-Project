import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {!data ? "Loading..." : data}
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
