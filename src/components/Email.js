import React from "react";
export default function Email() {
  return (
    <div className="Email">
      <h2>Before we get started...</h2>
      <p>Please enter your email address to access our free quoting site</p>
      <input placeholder="email" type="email" name="email" />
      <button>Residential Move</button>
      <button>Delivery</button>
      <button>Shop</button>
    </div>
  );
}
