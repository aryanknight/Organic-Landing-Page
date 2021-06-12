import React from "react";
import NavBar from "./NavBar/NavBar";
import IntroContent from './IntroContent/IntroContent';
import "./Section_1.css";

export default function Section_1() {
  return (
    <div className="rectangle-1">
      <NavBar />
      <IntroContent/>
    </div>
  );
}
