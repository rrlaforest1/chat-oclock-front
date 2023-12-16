import { useSelector } from "react-redux";
import Settings from "../Settings/Settings";

function Header() {
  const { open, userInfo } = useSelector((state) => state.settings);
  const { user, isLoggedIn } = useSelector((state) => state.connexion);

  return (
    <>
      <div className="header-component">
        <h1>90's 0`clock - Empanadas - Chat Room </h1>
        <Settings />
      </div>
      <h3>
        <span>{isLoggedIn ? user.username + ":" : ""}</span> Chat now with your
        frinds! or yourself...
      </h3>
    </>
  );
}

export default Header;
