import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  toggleSettings,
  // updateUserInfo,
} from "../../redux/slices/settingsSlice";
import { authState } from "../../redux/slices/connexionSlice";

import "./Settings.css";

function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const { open } = useSelector((state) => state.settings);
  const { user, isLoggedIn } = useSelector((state) => state.connexion);

  // console.log("settings user", user);
  // console.log("settings isLoggedIn", isLoggedIn);

  const handleClick = () => {
    dispatch(toggleSettings());
  };

  const handleSubmit = async (type, event) => {
    event.preventDefault();
    console.log("Submit");
    let userInfo = {};
    // dispatch(updateUserInfo({ email, password }));

    if (type === "connect") {
      userInfo = {
        email,
        password,
      };
    } else {
      userInfo = {
        username,
        email,
        password,
      };
    }

    try {
      const response = await axios.post(
        `${baseURL}/api/auth/${type}`,
        userInfo
      );
      localStorage.setItem("authToken", response.data.token);

      console.log("response settings connect: ", response);

      // verifier mon utilisateur
      dispatch(authState());
    } catch (error) {}
    setEmail("");
    setPassword("");
    dispatch(toggleSettings());
  };

  return (
    <>
      <div className="settings-component">
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className={open ? "settings-form active" : "settings-form inactive"}
        >
          <button onClick={handleClick} className="settings-close">
            X
          </button>

          <h3>Connect</h3>
          <form onSubmit={(e) => handleSubmit("connect", e)}>
            <input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Send</button>
          </form>

          <h3>Register</h3>
          <form onSubmit={(e) => handleSubmit("register", e)}>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Settings;
