import React, { useEffect, useState } from "react";
import axios from "axios";

const MessageList = ({ messages, setMessages }) => {
    // UseEffect to fetch initial messages when the component mounts
    useEffect(() => {
      const fetchMessages = async () => {
        try {
          const response = await axios.get(
            "https://pager-150fd-default-rtdb.asia-southeast1.firebasedatabase.app/message.json"
          );
          let messageList = [];
          for (let messageId in response.data) {
            messageList.push(response.data[messageId]);
          }
          messageList.reverse();  // Reverse to show the latest messages first
          let messageDisplayList = messageList.slice(0, 5);  // Show only top 5 messages
          setMessages(messageDisplayList);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };
  
      fetchMessages();
    }, [messages]);
  return (
    <div className="message-container">
        {messages.length > 0 && messages.map((message,index) => {
          return(
                <div key={index} className="message-card">
                    <div className="user-name">{message.name}</div>
                    <div className="user-message">{message.message}</div>
                </div>
            )
        })}
    </div>
  );
};

export default MessageList;
