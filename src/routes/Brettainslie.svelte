import React from "react";

import brettainslie from "../Assets/brettainslie.jpg";
import Button from "../Button";
import Emph2 from "../Emph2";

export default function Brettainslie() {
  return (
    <div>
      <Emph2>
        <img src={brettainslie} alt="Brett" /> <br /> <br />
        Brett Ainslie is a NYC based freelance Production Sound Mixer / Boom
        Operator. Brett's sound work ranges from TV commercials to corporate
        videos, network reality shows, web-series, documentaries, narrative
        shorts and feature films. <br />
        Over the last 7 years, he's done work for Bravo, HBO, Showtime, TBS,
        A&E, MTV, Discovery, Disney, ABC, ESPN, Oxygen, National Geographic and
        more.
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
