import React from "react";
import Mixer from "../Assets/mixer.gif";
import Carousel from "react-elastic-carousel";
import Caro from "../Caro";
import Img from "../Img";

import Moote from "../Assets/moote.JPG";
import Button from "../Button";
import Emph from "../Emph";
import Emph2 from "../Emph2";
import Boxy from "../Boxy";
import Maine from "../Maine";
import Allistair from "../Assets/Allistair.JPG";
import joy from "../Assets/joy.jpg";

import Footer1 from "../Footer1";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Landing() {
  return (
    <Boxy>
      <Emph>
        Our booking and consulatation services are FREE to all productions
        seeking one of our sound services.{" "}
      </Emph>
      <Emph2>
        Welcome to NYC Sound Guy, the home of world's only website exclusively
        dedicated to booking sound professionals for film, television, and web
        content. NYC Sound Guy makes it easy to work with the best film sound
        people in NYC.{" "}
      </Emph2>

      <Maine>
        <Carousel breakPoints={breakPoints}>
          <Caro>
            <Img
              src="https://res.cloudinary.com/adamaslan/image/upload/v1653500034/nycsoundguy/brettainslie_xjkvzy.jpg"
              alt={Mixer}
            />
          </Caro>
          <Caro>
            <Img src={Mixer} />
          </Caro>
          <Caro>
            <Img src={Moote} alt={Mixer} />
          </Caro>
          <Caro>
            {" "}
            <Img
              src="https://res.cloudinary.com/adamaslan/image/upload/v1653501229/nycsoundguy/pfeil_u7yges.jpg"
              alt="Joe"
            />
          </Caro>
          <Caro>
            {" "}
            <Img src={Allistair} alt={Mixer} />
          </Caro>
          <Caro>
            {" "}
            <Img src={joy} alt={Mixer} />
          </Caro>
        </Carousel>
        <h3>
          Feel free to contact NYC Soundguy with any sound related questions you
          may have on your film, tv show, web content, branded content,
          commercial, or documentary even if you are not looking to book a sound
          mixer with us currently.{" "}
        </h3>{" "}
        <h3>We are here to help find the best audio solution for you. </h3>
        <h3>
          <Button onClick={() => alert("8432843462")}>
            Click here to get our number
          </Button>
          <br />
          <Button onClick={() => alert("nycsoundpeople@gmail.com")}>
            Click here to get our email
          </Button>{" "}
        </h3>
      </Maine>
      <Footer1 />
    </Boxy>
  );
}
