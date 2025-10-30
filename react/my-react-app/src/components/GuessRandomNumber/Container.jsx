import React from "react";
import { useState } from "react";
export default function Container() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [numOfTries, setNumOfTries] = useState(0);
  const [hintMessage, setHintMessage] = useState("");
  return <div>Container</div>;
}
