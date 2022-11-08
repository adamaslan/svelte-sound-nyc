import React from "react";
import Adam from "../Assets/adam.JPG";
import Emph2 from "../Emph2";
import Button from "../Button";
export default function Adamaslan() {
  return (
    <div>
      <Emph2>
        <img src={Adam} alt="adam" /> <br />
        Adam Aslan is a sound mixer boom op, and sound designer with years of
        experience handling audio both on set and in post. Based in New York
        City, he is available for jobs in the tristate area as well as travel
        shoots all over the U.S. and the world. From narrative features,
        reality, and documentaries to commercials, corporate, and ENG.
        <br />
        He has the equipment and expertise to get great results and make audio
        one less thing for you to worry about
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
