function Message({ IMessage }) {
  return (
    <>
      <div className="message">
        <p className="message-author">
          <strong>{IMessage.author}:</strong>
        </p>
        <p className="message-content">{IMessage.content}</p>
      </div>
    </>
  );
}

export default Message;
