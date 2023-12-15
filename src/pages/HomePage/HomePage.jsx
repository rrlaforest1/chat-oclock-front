import React from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import MessageList from "../../components/MessageList/MessageList";
import Users from "../../components/Users/Users";

function HomePage() {
  return (
    <>
      <Header />
      <MessageList />
      <Form />
      <Users />
    </>
  );
}

export default HomePage;
