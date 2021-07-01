import React, { useState } from "react";
import Container from "./Components/Container";
import Jumbotron from "./Components/Jumbotron";
import Header from "./Components/Header";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container-fluid">
      <Header count={count} />
      <br />
      <br />
      <br />
      <Jumbotron />
      <hr />
      <Container count={count} setCount={setCount} />
    </div>
  );
}
