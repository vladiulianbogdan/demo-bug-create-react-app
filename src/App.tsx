import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as test from "test-getting-started-genezio-typescript-newest_us-east-1";
import { TestNewType } from "test-getting-started-genezio-typescript-newest_us-east-1/cjs/taskService.sdk";

function App() {
  const x: TestNewType | undefined = undefined;
  test.TaskService.createTask("token", "title");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reloa d.
          {}
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
