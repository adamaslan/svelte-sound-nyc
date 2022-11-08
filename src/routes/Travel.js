import React from "react";
import Button from "../Button";
import Emph2 from "../Emph2";

export default function Travel() {
  return (
    <div>
      <Emph2>
        <br />
        We are able to travel to pretty much any location in the world and have
        the travel gear necessary to expedite shoots associated with lots of
        travel.
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
