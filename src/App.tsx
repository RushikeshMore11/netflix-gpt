import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { IExampleInitialState } from "./store/example/example.interface";
import { incrementCount } from "./store/actions";

function App() {
  const { count } = useAppSelector<IExampleInitialState>(
    (state) => state.Example
  );
  const dispatch = useAppDispatch();

  const handleIncrement = () => dispatch(incrementCount());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {count}
        <button onClick={handleIncrement}>INCREMENT</button>
      </header>
    </div>
  );
}

export default App;
