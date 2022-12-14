import React from "react";
import { Link } from "react-router-dom";

import Login from "cart/components/Login";
import MiniCart from "cart/components/MiniCart";

export default function Header() {
  return (
    <header className="p-5 bg-gray-700 text-white flex justify-between">
      <div className="flex gap-5 items-center">
        <Link to="/" className="flex items-center gap-2">
          <i className="ri-gamepad-line text-3xl"></i>
          <h1 className="font-bold text-2xl">Game Store</h1>
        </Link>
        <Link to="/cart" className="text-xl font-bold">
          Cart
        </Link>
      </div>
      <div className="flex items-center">
        <Login />
        <MiniCart />
      </div>
    </header>
  );
}
