import "./App.css";

function App() {
  function callHello() {
    fetch("/hello").then(console.log).catch(console.error);
  }

  return (
    <div className="App">
      <button onClick={callHello}>Call hello</button>
    </div>
  );
}

export default App;
