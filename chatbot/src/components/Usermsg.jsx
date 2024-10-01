import React from "react";

const Usermsg = ({message}) => {
  return (
    <div className="received-chats">
      <div className="received-chats-img">
        <img src="/user.png" alt="" />
      </div>
      <div className="received-msg">
        <div className="received-msg-inbox">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Usermsg;
