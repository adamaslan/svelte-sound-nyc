import React from "react";

import pfeil from "../Assets/pfeil.jpg";
import Button from "../Button";
import Emph2 from "../Emph2";

export default function Joepfeil() {
  return (
    <div>
      <Emph2>
        <img src={pfeil} alt="Joe" /> <br />
        With over 10 years experience in location sound engineering, Joe Pfeil
        is the owner/operator of State of Sound LLC. Born and raised in Alaska,
        Joe has worked extensively across the country as an audio engineer for
        the film, TV and video game industries.
        <br />
        <br />
        Outside of video production, Joe has worked 8 years as an Alaskan
        commercial fisherman. He also worked on Yukon and Arctic expeditions to
        land survey and provide demarcation for 100 miles of the Alaska/Canada
        border.
        <br />
        <br />
        <Button onClick={() => alert("8432843462")}>
          Click here to get our number
        </Button>
        <br />
        <Button onClick={() => alert("nycsoundpeople@gmail.com")}>
          Click here to get our email
        </Button>{" "}
      </Emph2>
    </div>
  );
}
