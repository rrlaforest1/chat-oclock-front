import { useState } from "react";
import myApi from "./../../service/service";
import "./Form.css";

import { useSelector, useDispatch } from "react-redux";
// import { write } from "../../redux/slices/messageSlice";

function Form() {
  const [input, setInput] = useState("");
  const { user } = useSelector((state) => state.connexion);

  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const theMessage = {
    //   author: user.username,
    //   content: input,
    // };

    const response = await myApi.postMessage({ message: input });
    console.log("form response message", response);

    // dispatch(write(theMessage));
    setInput("");
  };

  return (
    <>
      <div className="form-component">
        <form onSubmit={handleSubmit}>
          <input
            id="message-text"
            type="text"
            autoComplete="off"
            placeholder="Say Hello!"
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
