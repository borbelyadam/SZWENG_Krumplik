import React from "react";
import Card from "./Card";

const BestDealsPage = () => {
  return (
    <>
      <h1>Best deals of the week:</h1>
      <h2>Computers:</h2>
      <Card
        title="Wooden PC"
        imageUri="https://i.imgur.com/sJWUwiO.jpeg"
        body="Lorem Ipsum"
      />
      <h2>Another category:</h2>
    </>
  );
};

export default BestDealsPage;
