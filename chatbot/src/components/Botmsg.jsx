import React from "react";

const Botmsg = ({message}) => {
  return (
    <div className="outgoing-chats">
      <div className="outgoing-chats-img">
        <img src="/bot.png" alt="" />
      </div>
      <div className="outgoing-msg">
        <div className="outgoing-chats-msg">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Botmsg;
