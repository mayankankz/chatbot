import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import Usermsg from "../components/Usermsg";
import Botmsg from "../components/Botmsg";
import axios from "axios";
const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  async function handleChat() {
    try {
      addUserMsg(userInput);
      setIsLoading(true);
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCr_ULrDcWLy3ADzx2_U9mvFKL5RqsASKI`,

        { contents: [{ parts: [{ text: userInput }] }] }
      );

      addBotMsg(res.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function addUserMsg() {
    setChat((prev) => [...prev, { role: "user", message: userInput }]);
    setUserInput("");
  }

  function addBotMsg(message) {
    setChat((prev) => [...prev, { role: "bot", message: message }]);
    setUserInput("");
  }

  return (
    <div className="container">
      <div className="msg-header">
        <img src="/user.png" className="msgimg" />
        <div className="name">
          <p>Mayank</p>
        </div>
      </div>

      <div className="chat-page">
        <div className="msg-inbox">
          <div className="chats">
            <div className="msg-page">
              {chat.map((chat) => {
                return chat.role == "user" ? (
                  <Usermsg message={chat.message} />
                ) : (
                  <Botmsg message={chat.message} />
                );
              })}
              {isLoading && <span style={{color: '#fff'}}>Loading...</span>}
            </div>
          </div>
        </div>
        <div className="msg-bottom">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter promt here"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <div class="input-group-append " onClick={handleChat}>
              <span class="input-group-text send-icon ">
                <BiSend />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
