import React from "react";
import ReactDOM from "react-dom";
console.log("Run react script");

const link = React.createElement(
  "a",
  {
    href: "https://reactjs.org/",
    target: "_blank",
    rel: "noreferrer noopener",
  },
  "Ссылка на reactjs.org"
);

console.log(link);

ReactDOM.render(link, document.querySelector("header"));
