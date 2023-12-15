import { useState } from "react";
import "./Form.css";

import { useDispatch } from "react-redux";
import { write } from "../../redux/slices/messageSlice";

function Form() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const theMessage = {
      author: "Rony",
      content: input,
    };

    dispatch(write(theMessage));
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
