import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllmessagesAsync } from "../../redux/slices/allMessagesSlice";
import Message from "./../Message/Message";

function MessageList() {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.allmessages);

  // async function fetchOneConversation() {
  //   try {
  //     const response = await myApi.get(`/messages/${id}`);
  //     setMessages(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    dispatch(fetchAllmessagesAsync());
  }, []);

  if (!messages) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <ul className="messages-list">
        {messages.map((message, messageIndex) => {
          return (
            <li className="messages-list-message" key={messageIndex}>
              <Message user={message.user.username} message={message.message} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MessageList;
