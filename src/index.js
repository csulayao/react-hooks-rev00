import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  const [status, setStatus] = useState("Not Delivered");
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h1>The package is: {status}</h1>
      <h2>Welcome to React Hooks!</h2>

      <button onClick={() => setStatus("Delivered")}>Deliver</button>
      <br />
      <br />

      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
