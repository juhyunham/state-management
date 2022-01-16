import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import Counter2 from "./features/counter/Counter2";
import MobxExamples from "./components/MobxExamples";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <br />
      <br />
      <br />
      <Counter2 /> */}
      <MobxExamples />
    </div>
  );
}

export default App;
