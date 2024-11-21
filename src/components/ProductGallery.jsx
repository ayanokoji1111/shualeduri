import React, { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ addToCart }) => {
  const images = ["/assets/1.png", "/assets/2.png", "/assets/3.png", "/assets/4.png"];//ფოტოების array
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img src={images[currentImage]} alt="Product" className="main-image" />
        <div className="image-controls">
          <button onClick={prevImage}>◀</button>
          <button onClick={nextImage}>▶</button>
        </div>
      </div>
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={index === currentImage ? "active-thumbnail" : ""}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
      <div className="product-details">
        <h2>Fall Limited Edition Sneakers</h2>
        <p className="price">
          <span className="current-price">$125.00</span> <span className="original-price">$250.00</span>
        </p>
        <button
          className="add-to-cart"
          onClick={() =>
            addToCart({
              id: 1, // უბრალო id რადგან მხოლოდ 1 პროდუქტი გვაქვს
              name: "Fall Limited Edition Sneakers",
              price: 125,
              image: images[0], // პირველი ფოტო გამოიტანოს პროდუქტის ფოტოდ
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
