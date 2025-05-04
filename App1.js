import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";


const Title = () =>
{
    <h1>Namaste React.</h1>
}

const result = ReactDOM.createRoot(document.getElementById("root"));

result.render(<Title />);