import React from "react";

import Button from "../Button";
import Emph2 from "../Emph2";

export default function Services() {
  return (
    <div>
      <Emph2>
        <br />
        <br />
        We specialize in all the services associated with location film sound.
        <br />
        <br />
        Sound Mixing / Recording, Boom Operating, and Sound Utility are the 3
        main types of services usually requested. <br />
        <br />
        Many of the sound mixers listed on NYC Sound Guy have other sound
        related services they offer from live event AV support to post sound
        services. <br />
        <br /> Contact us at nycsoundpeople@gmail.com with any audio related
        question you may have. We are happy to offer a free consulation for any
        sound related inquiries.
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
