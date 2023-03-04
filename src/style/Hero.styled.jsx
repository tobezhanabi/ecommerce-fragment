import styled from "styled-components";

export const Hero1 = styled.section`
  padding-top: 100px;
  display: flex;

  align-items: center;
  justify-content: space-between;

  .product {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 375px) {
    display: block;
    padding-top: 5px;
    .product {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Hero2 = styled.div`
  margin-left: 100px;
  margin-top: 0px;
  padding-bottom: 10px;
  display: block;

  h3 {
    padding-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: orange;
    font-size: 16px;
  }
  h1 {
    margin: 5px 0;
    font-size: 45px;
    font-weight: 700;
    font-family: "Kumbh Sans", sans-serif;
  }
  div {
    display: flex;
    margin-bottom: 5px;
  }
  h4 {
    font-size: 20px;
  }
  .pricetag {
    display: block;
  }
  .span {
    background-color: rgba(255, 237, 224, 0.8);
    font-size: 13px;
    padding: 2px;
    text-align: center;
    margin-left: 30px;
    color: #ff7d1a;
    font-weight: 700;
  }
  p {
    color: rgba(0, 0, 0, 0.75);
    font-size: 14px;
    margin-bottom: 5px;
  }
  del {
    opacity: 0.75;
    font-size: 13px;
  }
  @media (max-width: 375px) {
    margin: 20px;

    h1 {
      font-size: 30px;
    }
    .pricetag {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export const Hero3 = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  .main-image img {
    max-width: 100%;
    cursor: pointer;
  }
  .thumbnail-gallery {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .thumbnail-gallery img {
    max-height: 80px;
    margin: 0 10px;
    border: 1px solid #ddd;
    opacity: 0.5;
    cursor: pointer;
  }

  .thumbnail-gallery img.selected {
    border-color: #ff7d1a;
    opacity: 1;
  }
  img {
    border-radius: 10px;
    margin-top: 30px;
  }
  @media (max-width: 375px) {
    img {
      border-radius: 4px;
    }
    .main-image img {
      max-width: 100%;
    }
    .thumbnail-gallery img {
      max-height: 70px;
      margin: 0 5px;
    }
  }
`;

export const Add = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  /* height: 30px; */
  .adding {
    background-color: #f7f8fd;
    font-weight: 700;
    color: black;
    padding: 10px 30px;
    /* margin-right: 10px; */
    /* padding-top: 15px; */
  }

  .countButton {
    background-color: #f7f8fd;
    border: none;
    padding: 0px 30px;
    cursor: pointer;
    /* margin-right: 10px; */
  }

  .countButton img {
    width: 10px;
    /* height: 10px; */
  }
  .cartButton {
    /* margin-right: 60px; */
    background-color: #ff7d1a;
    color: white;
    border: none;
    padding: 10px 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cartButton:hover {
    opacity: 0.7;
  }

  .cart {
    filter: brightness(200%) saturate(0%);
    padding-top: 2px;
    width: 15px;
    height: 14px;
    padding-right: 5px;
  }
  @media (max-width: 375px) {
    .test {
      display: block;
      margin: 10px;
    }
    .countButton {
      padding: 0px 50px;
    }
    .cartButton {
      padding: 15px 100px;
      margin: 10px 0px;
    }
  }
`;

export const Expand = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;

  .imageContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
  }
  .imaged {
    width: 350px;
    height: 350px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow {
    position: absolute;
    top: 50%;
    padding: 12px 12px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }
  .left-arrow {
    left: 480px;
    top: 280px;
  }

  .right-arrow {
    right: 480px;
    top: 280px;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  .thumbnail-gallery2 {
    display: flex;
    position: relative;
    flex-direction: row;
  }

  .thumbnail-gallery2 img {
    width: 85px;
    border-radius: 5px;
    opacity: 0.7;
    bottom: 0;
    max-height: 85px;
    margin: 20px;
  }

  .thumbnail-gallery2 img.selected {
    opacity: 1;
    border-color: #ff7d1a;
  }
  @media (max-width: 375px) {
    .thumbnail-gallery2 img {
      width: 45px;

      margin: 10px;
    }
    .arrow {
      display: none;
    }
  }
`;
