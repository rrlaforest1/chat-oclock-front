import { useState } from "react";
import myApi from "./../../service/service";
import "./Form.css";

import { useDispatch, useSelector } from "react-redux";
import { updateLength } from "../../redux/slices/messagesLengthSlice";

function Form() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.connexion);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const theMessage = {
    //   author: user.username,
    //   content: input,
    // };

    const response = await myApi.postMessage({ message: input });
    console.log("form response message", response);

    dispatch(updateLength());
    setInput("");
  };

  return (
    <>
      <div className={"form-component" + (!isLoggedIn ? " disabled" : "")}>
        <form onSubmit={handleSubmit}>
          <input
            id="message-text"
            type="text"
            autoComplete="off"
            placeholder={
              !isLoggedIn ? "Connect yourself to start chatting!" : "Say Hello!"
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export default Form;
