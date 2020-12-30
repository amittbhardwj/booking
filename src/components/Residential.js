import React from "react";

export default function Residential() {
  return (
    <div className="Residential">
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
    </div>
  );
}
