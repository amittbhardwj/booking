import React from "react";
import { Link } from "react-router-dom";

export default function Residential() {
  return (
    <div className="Residential">
      <br />
      <br />
      <hr />
      <h2>How long do you need Mates for?</h2>
      <input
        className="box"
        name="hours"
        type="number"
        pattern="[0-9]*"
        placeholder="0"
      />
      Hours
      <input
        className="box"
        name="min"
        type="number"
        placeholder="0"
        pattern="[0-9]*"
      />
      Minutes
      <hr />
      <Link to="/day">
        <button>Next</button>
      </Link>
    </div>
  );
}
