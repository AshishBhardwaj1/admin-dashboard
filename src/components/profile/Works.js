import React from "react";
import "./works.css";

const artist = [
  {
    id: 1,
    name: "Thomas Edward",
    profile: "./artist-images/pexels-anastasia-shuraeva-4406721.png",
    bgimg: "./artist-images/pexels-ekaterina-12203460.png",
    tag: "@thewildwithyou",
  },

  {
    id: 2,
    name: "Chris Doe",
    profile: "./artist-images/pexels-andrea-piacquadio-3771118.png ",
    bgimg: "./artist-images/pexels-genaro-servín-763210.png",
    tag: "@thewildwithyou",
  },

  {
    id: 3,
    name: "Emilie Jones",
    profile: "./artist-images/pexels-antoni-shkraba-4442005.png ",
    bgimg: "./artist-images/pexels-pixabay-164455.png",
    tag: "@thewildwithyou",
  },

  {
    id: 4,
    name: "Jessica Williams",
    profile: " ./artist-images/pexels-antoni-shkraba-4442102.png",
    bgimg: "./artist-images/pexels-steve-johnson-1269968.png",
    tag: "@thewildwithyou",
  },
  {
    id: 5,
    name: "Thomas Edward",
    profile: "./artist-images/pexels-anastasia-shuraeva-4406721.png",
    bgimg: "./artist-images/pexels-fiona-art-5022849.png",
    tag: "@thewildwithyou",
  },
];

const Works = () => {
  return (
    <div className="work-profile">
      <div className="seller-button">
        <button>become a seller</button>
      </div>

      <div className="artists">
        <span className="category">artist</span>
        <span className="category">photographers</span>

        {artist.map((artists) => (
          <div className="card" key={artists.id}>
            <div className="artist-img">
              <img src={artists.bgimg} alt="image" />
            </div>
            <div className="artist-info">
              <div className="img">
                <img src={artists.profile} alt="" />
              </div>

              <div>
                <div className="name"> {artists.name} </div>
                <div className="profession"> {artists.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
