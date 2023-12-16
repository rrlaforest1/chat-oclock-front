import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllmessagesAsync } from "../../redux/slices/allMessagesSlice";
import Message from "./../Message/Message";
import myApi from "../../service/service";

function MessageList() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.allmessages);
  const { messagesLength } = useSelector((state) => state.msglength);
  const { isLoggedIn } = useSelector((state) => state.connexion);

  // async function fetchOneConversation() {
  //   try {
  //     const response = await myApi.get(`/messages/${id}`);
  //     setMessages(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const fetchUsers = async () => {
    const response = await myApi.getUsers();
    setUsers(response);
  };

  useEffect(() => {
    dispatch(fetchAllmessagesAsync());
    fetchUsers();
  }, [messagesLength, isLoggedIn]);

  if (!messages && !users.length) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <div className="messages-n-users">
        <ul className="messages-list">
          {messages.map((message, messageIndex) => {
            return (
              <li className="messages-list-message" key={messageIndex}>
                <Message
                  user={message.user.username}
                  message={message.message}
                />
              </li>
            );
          })}
        </ul>
        <ul className="users-list">
          {users.map((user, userIndex) => {
            return (
              <li className="users-list-user" key={userIndex}>
                <p>{user.username}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MessageList;
