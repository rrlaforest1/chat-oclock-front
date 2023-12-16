function Message({ user, message }) {
  return (
    <>
      <div className="message">
        <p className="message-author">
          <strong>{user}:</strong>
        </p>
        <p className="message-content">{message}</p>
      </div>
    </>
  );
}

export default Message;
