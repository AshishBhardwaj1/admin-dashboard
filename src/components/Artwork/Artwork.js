import React from "react";
import "./artwork.css";

const gallery = [
  {
    id: 1,
    details: "Modern Wall Decor Framed Painting",
    price: "199.99",
    artimage: "./artgallary/pexels-pixabay-164455.png",
  },
  {
    id: 2,
    details: "Modern Wall Decor Framed Painting",
    price: "199.99",
    artimage: "./artgallary/Image 40.png",
  },
  {
    id: 3,
    details: "Modern Wall Decor Framed Painting",
    price: "199.99",
    artimage: "./artgallary/Image 39.png",
  },
  {
    id: 4,
    details: "Modern Wall Decor Framed Painting",
    price: "199.99",
    artimage: "./artgallary/pexels-max-vakhtbovych-6782342.png",
  },
];
const Artwork = () => {
  return (
    <div className="artwork">
      {gallery.map((item) => (
        <div className="art" key={item.id}>
          <img src={item.artimage} alt="" />
          <div className="details">{item.details}</div>
          <div className="price-rating">
            <div className="price"> ${item.price} </div>
            <div className="rating">star</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artwork;
