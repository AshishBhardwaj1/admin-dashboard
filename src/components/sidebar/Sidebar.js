import React from "react";
import home from "./icons/home.png";
import message from "./icons/message.png";
import favorite from "./icons/favorite.png";
import heart from "./icons/heart.png";
import notification from "./icons/notification.png";
import wallet from "./icons/wallet.png";
import logout from "./icons/logout.png";
import setting from "./icons/setting.png";
import profile from "./icons/profile.png";

import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span> LOGO </span>{" "}
      </div>

      <div className="sidebar-items">
        <div className="sidebar-item">
          <img src={home} alt="img" />
          Home
        </div>

        <div className="sidebar-item">
          <img src={notification} alt="" />
          Notifications{" "}
        </div>
        <div className="sidebar-item">
          <img src={heart} alt="" />
          Shop
        </div>

        <div className="sidebar-item">
          <img src={message} alt="" />
          Conversation
        </div>

        <div className="sidebar-item">
          <img src={wallet} alt="" />
          Wallet{" "}
        </div>
        <div className="sidebar-item">
          <img src={favorite} alt="" />
          Subscription{" "}
        </div>
        <div className="sidebar-item">
          <img src={profile} alt="" />
          My Profile
        </div>

        <div className="sidebar-item">
          <img src={setting} alt="" />
          Settings{" "}
        </div>

        <div
          className="login"
          style={{
            color: "#88c2bb",
            position: "absolute",
            bottom: "35px",
            margin:"20px"
          }}
        >
          <img src={logout} alt="" />
          Log out
        </div>
      </div>

      <div className="footer">
        <span> 2022©logo name</span>
        <span>Developed by ivan Infotech </span>
      </div>
    </div>
  );
};

export default Sidebar;
