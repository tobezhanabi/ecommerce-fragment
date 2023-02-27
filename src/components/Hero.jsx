import { Hero1, Hero2, Hero3, Add, Expand } from "../style/Hero.styled.jsx";
import { useState } from "react";

function Hero(props) {
  const [countCart, setCountCart] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // images product
  const images = [
    "../images/image-product-1.jpg",
    "../images/image-product-2.jpg",
    "../images/image-product-3.jpg",
    "../images/image-product-4.jpg",
  ];

  // expand image
  function handleImageClick() {
    setExpanded(true);
  }

  function handleExpandClose() {
    setExpanded(false);
  }

  //next image when expanded

  function nextImage() {
    if (selectedImage >= 0 && selectedImage < 3) {
      setSelectedImage((index) => index + 1);
    } else {
      setSelectedImage(0);
    }
  }
  function prevImage() {
    if (selectedImage <= 3 && selectedImage >= 1) {
      setSelectedImage((index) => index - 1);
    } else {
      setSelectedImage(3);
    }
  }
  // increasing count
  function updateCount() {
    setCountCart(countCart + 1);
  }

  function removeCount() {
    if (countCart > 0) {
      setCountCart(countCart - 1);
    } else {
      setCountCart(0);
    }
  }

  //Cart hover effect
  function addToCart(item) {
    props.setCartItems([...props.cartItems, item]);
  }

  return (
    <>
      <Hero1>
        <Hero3>
          <div className="main-image">
            <img
              src={images[selectedImage]}
              alt=""
              onClick={handleImageClick}
            />
          </div>
          <div className="thumbnail-gallery">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`product thumbnail ${index}`}
                className={selectedImage === index ? "selected" : ""}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </Hero3>

        {expanded && (
          <Expand>
            <div className="arrow left-arrow" onClick={prevImage}>
              <img src="../images/icon-previous.svg" alt="" />
            </div>

            <div className="image-container">
              <img className="imaged" src={images[selectedImage]} alt="" />
            </div>

            <div className="thumbnail-gallery2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`product thumbnail ${index}`}
                  className={selectedImage === index ? "selected" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="arrow right-arrow" onClick={nextImage}>
              <img src="../images/icon-next.svg" alt="Next mage" />
            </div>

            <div className="close-button" onClick={handleExpandClose}>
              <img src="../images/icon-close.svg" alt="Close Expanded Images" />
            </div>
          </Expand>
        )}
        <Hero2>
          <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div>
            <h4>$125.00</h4>
            <p className="span">50%</p>
          </div>
          <del>$250.00</del>
          <Add>
            <div>
              <button className="countButton" onClick={removeCount}>
                <img src="../images/icon-minus.svg" alt="" />
              </button>
              <p className="adding">{countCart}</p>
              <button className="countButton" onClick={updateCount}>
                <img src="../images/icon-plus.svg" alt="" />
              </button>
            </div>
            <div>
              <button className="cartButton" onClick={addToCart}>
                <img className="cart" src="../images/icon-cart.svg" alt="" />{" "}
                Add to Cart
              </button>
            </div>
          </Add>
        </Hero2>
      </Hero1>
    </>
  );
}

export default Hero;
