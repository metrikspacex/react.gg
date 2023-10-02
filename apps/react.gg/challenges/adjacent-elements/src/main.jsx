import "./main.scss";

import clsx from "clsx";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Complete from "./components/complete/Complete";
import Starter from "./components/starter/Starter";

export default function App() {
  return (
    <div className={clsx("layout")}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Starter />} path="/starter" />
          <Route element={<Complete />} path="/complete" />
          <Route element={<Navigate to="/starter" />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
