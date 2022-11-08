import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import Emph2 from "../Emph2";

export default function Soundmixers() {
  return (
    <div>
      <p>
        <Emph2>
          Hit us up to work with the following top notch soundmixers:
          <br />

          <br />
          <Link to="/billpierce">Bill Pierce </Link>
          <br />
          <br />
          <Link to="/michaelmoote">Michael Moote </Link>
          <br />
          <br />
          <Link to="/allistairjohnson">Allistair Johnson </Link>
          <br />
          <br />
          <Link to="/brettainslie">Brett Ainslie </Link>
          <br />
              <br />
          <Link to="/adamaslan">Adam Aslan </Link>
          <br />
          <br />
          <Link to="/joepfeil">Joe Pfeil </Link>
          <br />
          <br />
          <Link to="drewjoy">Drew Joy </Link>
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
      </p>
    </div>
  );
}
