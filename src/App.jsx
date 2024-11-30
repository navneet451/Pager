import React,{useState} from "react";
import Form from "./components/Form";
import "./App.css";
import MessageList from "./components/MessageList";

function App() {
  const [messages, setMessages] = useState([]);
  return (
    <div className="app">
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <Form setMessages={setMessages}/>
      </div>
      <MessageList messages={messages} setMessages={setMessages}/>
    </div>
  );
}

export default App;
