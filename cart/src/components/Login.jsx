import React, { useState } from "react";

import { login, useLoggedIn } from "../cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("kadirboylu");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <div className="select-none">
      <span className="cursor-pointer" onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-2 border-gray-700 bg-white rounded-md text-black"
          style={{
            width: 300,
            top: "4rem",
            right: 20,
          }}
        >
          <label className="font-bold" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mb-3"
          />
          <label className="font-bold" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <button
            className="btn success mt-3"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
