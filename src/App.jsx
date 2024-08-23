import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/learn/MyComponent";
import SecondComponet from "./components/learn/SecondComponent";

//  () => {}
// component = html + css + js

const App = () => {
  const [count, setCount] = useState(0);

  // function myFunction(){
  //   console.log(">>>My Function");
  // }

  const myFunction = () => {
    console.log(">>> run my function");
  };
  myFunction();

  return (
    <>
      <SecondComponet />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Le Ngoc Huy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <MyComponent />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
