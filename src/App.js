import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Jenkins
        </a>
      </header>
      <h2
        style={{
          marginTop: "1em",
          fontSize: "1.2em",
          fontWeight: "bold",
          color: "#33e",
          backgroundColor: "#ffc107",
          height: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Application version: 1
      </h2>
    </div>
  );
}

export default App;
