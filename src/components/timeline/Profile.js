import React from "react";
import "./profile.css";
import comment from "./social-icons/comment.png";
import heart from "./social-icons/heart.png";
import share from "./social-icons/share.png";
import search from "./social-icons/Component 32.png";
import filter from "./social-icons/Component 39 (2).png";
import Artwork from "../Artwork/Artwork";

const timeline = [
  {
    id: 1,
    name: "Lara Leones",
    profileimg: "./images/pexels-ali-pazani-2613260.png",
    mainimg: "./images/pexels-humphrey-muleba-2045248.png",
    profiledes: "@thewallart",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    likes: "9.8k",
    comments: "8.6k",
    share: "7.2k",
  },
  {
    id: 2,
    name: "Thomas J",
    profileimg: "./images/pexels-imad-clicks-9810659.png ",
    mainimg: "./images/pexels-tobias-bjørkli-2236382.png",
    profiledes: "@thecustomcreater",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    likes: "9.8k",
    comments: "8.6k",
    share: "7.2k",
  },
];

const Profile = () => {
  return (
    <div className="profile">
      <div className="searchbar">
        <img src={search} alt="" />{" "}
        <input type="search" name="" id="" placeholder="search here" />
        <img src={filter} alt="" /> <span> filters</span>
      </div>

      {timeline.map((items) => (
        <div className="profile-items" key={items.id}>
          <div className="profile-item">
            <div className="imgprofile">
              <img src={items.profileimg} alt="" />
              <span> {items.name} </span>
              <span>{items.profiledes} </span>
            </div>

            <p className="description">
              {" "}
              {items.description} <span> Read More </span>{" "}
            </p>

            <img src={items.mainimg} alt="" />

            <div className="status">
              <div className="like">
                <img src={heart} alt="" /> <span>{items.likes} </span>
              </div>
              <div className="comment">
                <img src={comment} alt="" /> <span> {items.comments} </span>
              </div>
              <div className="share">
                <img src={share} alt="" /> <span>{items.share} </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Artwork />
    </div>
  );
};

export default Profile;
