import React from "react";
import Card from "../components/Card";
import Headline from "../components/Headline";

const Home: React.FC = () => {
  return (
    <div className="">
      <Headline title="Welcome" subtitle="Admin" />
      <div className="p-10">
        <div className="flex gap-5">
          <Card
            title="Card title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Card
            title="Card title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Card
            title="Card title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Card
            title="Card title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className=" my-5 space-y-4">
          <Card
            title="Card title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Card
            title="Card title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className=" flex gap-5">
          <Card
            title="Card title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Card
            title="Card title"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
