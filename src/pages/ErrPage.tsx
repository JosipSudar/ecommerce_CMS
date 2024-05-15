import React from "react";
import { Link } from "react-router-dom";

const ErrPage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">ErrPage</h1>
      <p className="p-5">It seems like you came here by mistake</p>
      <p className=" p-5">
        No worries, you can always{" "}
        <Link to={"/"} className="underline text-blue-500">
          go back
        </Link>
      </p>
    </div>
  );
};

export default ErrPage;
