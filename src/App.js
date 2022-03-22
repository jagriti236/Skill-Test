import React from "react";
import { Rnd } from "react-rnd";
const style = {
display: "flex",
alignItems: "center",
border: "solid 1px #ddd",
background: "#f0f0f0"
};
const App = () => (
  <Rnd
  style={style}
  default={{
    x: 0,
    y: 0,
    width: 320,
    height: 200
  
  }}
>
  <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"/>
  </Rnd>
);





export default App;
