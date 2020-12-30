import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="SignUp">
      <h1>MoveMate</h1>
      <h3>The hassle-free way to move anything</h3>
      <p>
        We connect you with our moving partners on-demand. Click below to start
        booking
      </p>
      <a href="#">Francais</a>
      <input name="email" placeholder="Email" type="email" />
      <br />
      <input name="password" placeholder="password" type="password" />
      <button>Sign Up and Book Now</button>
      <p>
        Already a User?<a href="#">Login</a>
      </p>
      <Link to="/email">Continue as Guest</Link>
    </div>
  );
}

export default SignUp;
