import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Day() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <br />
      <br />
      <br />
      <hr />
      <h2>When are we moving?</h2>
      <p>What day works best?</p>
      <input name="day" type="date" required onChange={() => setToggle(true)} />
      {toggle ? (
        <div>
          <p>What time works best for you? </p>
          <input name="time" type="time" min="9:00" max="18:00" required />
        </div>
      ) : null}

      <br />
      <br />
      <br />
      <br />
      <hr />

      <Link>
        <button disabled={toggle}>Next</button>
      </Link>
    </div>
  );
}
