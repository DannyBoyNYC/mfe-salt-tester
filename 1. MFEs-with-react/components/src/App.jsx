import React from "react";
import CardDetails from "./components/CardDetails.jsx";
import CardShort from "./components/CardShort.jsx";
import { Button, SaltProvider } from "@salt-ds/core";
import "@salt-ds/theme/index.css";

const App = () => {
  const cardDetails = {
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    name: "Classic Margherita Pizza",
    cuisine: "Italian",
    rating: 4.5,
  };

  const cardShortDetails = {
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    name: "Classic Margherita Pizza",
  };

  return (
    <SaltProvider>
      <Button sentiment="accented" appearance="solid">
        Button
      </Button>
      <div>
        <CardDetails data={cardDetails} />
      </div>
      <CardShort data={cardShortDetails} />
    </SaltProvider>
  );
};

export default App;
