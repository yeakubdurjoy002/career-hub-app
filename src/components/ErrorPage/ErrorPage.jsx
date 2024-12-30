import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Oops!!!</h2>
      <Link>
        <button className="btn">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
