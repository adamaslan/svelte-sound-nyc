import React from "react";
import Button from "../Button";
import Emph2 from "../Emph2";

export default function Gear() {
  return (
    <div>
      <Emph2>
        We pride ourselves in being able to supply all gear necessary for
        whatever a specific film shoot calls for. <br />
        <br />
        Brands we use include: <br /> Zaxcom
        <br />
        Sound Devices <br />
        Lectrosonics <br /> Sanken <br /> Sennheiser <br /> Ktek <br /> DPA
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
