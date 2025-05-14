import React from "react";
import "./CardShort.css";
import { Button } from "@salt-ds/core";

const CardShort = (props) => {
  const { image, name } = props.data;
  return (
    <div className="card">
      <img src={image} />
      <div className="title">{name}</div>
      {/* <Button sentiment="accented" appearance="solid">
        Button
      </Button> */}
    </div>
  );
};

export default CardShort;
