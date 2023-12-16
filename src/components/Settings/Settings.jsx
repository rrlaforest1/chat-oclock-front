import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import myApi from "./../../service/service";
import {
  toggleSettings,
  // updateUserInfo,
} from "../../redux/slices/settingsSlice";
import { fetchUserAsync } from "../../redux/slices/connexionSlice";

import "./Settings.css";

function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorConnect, setErrorConnect] = useState(null);

  const [emailConnect, setEmailConnect] = useState("");
  const [passwordConnect, setPasswordConnect] = useState("");

  const dispatch = useDispatch();

  const { open } = useSelector((state) => state.settings);
  const { isLoggedIn } = useSelector((state) => state.connexion);

  const handleClick = () => {
    dispatch(toggleSettings());
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(fetchUserAsync());
  };

  const handleSubmit = async (type, event) => {
    event.preventDefault();
    let userInfo = {};
    // dispatch(updateUserInfo({ email, password }));

    if (type === "connect") {
      userInfo = {
        email: emailConnect,
        password: passwordConnect,
      };
    } else {
      userInfo = {
        username,
        email,
        password,
      };
    }

    try {
      if (type === "connect") {
        const response = await myApi.connect(userInfo);
        if (response.response && response.response.status === 400) {
          dispatch(toggleSettings());
          setErrorConnect(response.response.data.message);
          setTimeout(() => {
            setErrorConnect(null);
          }, 1000 * 3);
        }

        if (response.data) {
          localStorage.setItem("authToken", response.data.token);
        }

        // verifier mon utilisateur
        dispatch(fetchUserAsync());
        setEmailConnect("");
        setPasswordConnect("");
      } else {
        const responseRegister = await myApi.register(userInfo);
        const response = await myApi.connect({ email, password });
        localStorage.setItem("authToken", response.data.token);
        // verifier mon utilisateur
        dispatch(fetchUserAsync());
        setUsername("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log("response connect", error);
    }
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

          {isLoggedIn ? (
            <h3 className="disconnect" onClick={handleLogout}>
              Disconnect
            </h3>
          ) : (
            <>
              <h3>Connect</h3>
              {errorConnect && (
                <p className="connection-error">{errorConnect}</p>
              )}
              <form onSubmit={(e) => handleSubmit("connect", e)}>
                <input
                  placeholder="email"
                  type="email"
                  value={emailConnect}
                  onChange={(e) => setEmailConnect(e.target.value)}
                />
                <input
                  placeholder="password"
                  type="password"
                  value={passwordConnect}
                  onChange={(e) => setPasswordConnect(e.target.value)}
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Settings;
