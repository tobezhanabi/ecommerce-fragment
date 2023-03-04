import styled from "styled-components";

export const Navi = styled.nav`
  background-color: none;
  display: flex;
  position: fixed;
  width: 80%;
  z-index: 98;

  align-items: center;
  .avatar {
    right: 0;
    margin-right: 60px;
  }
  .avatar img {
    height: 45px;
  }
  .avatar img:hover {
    border: 2px solid orange;
    border-radius: 50%;
  }
  .logo {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 375px) {
    .logo {
      margin-top: -10px;
      margin-left: 30px;
      height: 20px;
      width: 100px;
    }
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${({ menuOpen }) => (menuOpen ? "none" : "")};
  display: none;
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 10px;

  .OpenMenu {
    opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  }
  .CloseMenu {
    opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
  }

  @media (max-width: 375px) {
    /* display: inline-block; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    margin-right: 10px;
  }
`;

export const NavList = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-left: 100px;
  align-items: center;

  @media (max-width: 375px) {
    width: 14rem;
    height: 100vh;
    top: 0;
    margin-left: 0px;
    background: white;
    box-shadow: 186px 0px 0px 0px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: 186px 0px 0px 0px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 186px 0px 0px 0px rgba(0, 0, 0, 0.48);
    position: fixed;
    z-index: 990;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-28rem")};
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  margin: 0.2rem 0.7rem;

  @media (max-width: 375px) {
    opacity: 1;
    margin: 2rem 0;
  }
`;
export const NavLink = styled.a`
  position: relative;
  display: flex;
  color: black;

  &::after {
    content: "";
    display: flex;
    height: 2px;
    position: absolute;
    width: 0%;
  }

  &:hover {
    color: orange;
    border-bottom: 3px solid #ccc;
    padding-bottom: 10px;
  }
`;
export const NavLine = styled.div`
  position: absolute;
  display: block;
  left: 0;
  bottom: -4;
  height: 2px;
  width: 1000px;
  background: #ccc;
  z-index: -10;
  margin-top: 80px;
  transition: background-color 0.3s ease-in-out;
  ${NavLink}:hover + & {
    color: orange;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;
export const Cart = styled.div`
  margin: 0 0 0 335px;

  .checkout {
    cursor: pointer;
    margin-right: 10px;
  }
  .checkout:hover .checkout-content {
    display: block;
  }
  h4 {
    margin: 10px 0px;
  }
  .empty {
    margin: 50px;
    color: #686968;
  }
  .delete {
    width: 10px;
    height: 10px;
    margin: 20px;
  }
  .checkout-content {
    position: absolute;
    top: 40px;
    right: calc(10% - 10px);
    width: 300px;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 1;
    padding: 15px;
  }
  .checkout-image {
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }

  .line {
    border: 1px solid #ccc;
    margin: 15px 0;
  }
  .product {
    display: flex;
  }
  .product p {
    font-size: 12px;
    margin: 5px;
  }
  button {
    margin: 10px;
    /* margin-left: 10px; */
    background-color: #ff7d1a;
    color: white;
    border: none;
    padding: 10px 90px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.7;
  }
  @media (max-width: 375px) {
    margin: 0 0 0 150px;
    .checkout {
      margin: 10px;
    }
    .checkout-content {
      position: absolute;
      top: 50px;
      right: calc(10% - 90px);
      width: 350px;
      height: 200px;

      padding: 25px;
    }
    button {
      margin: 20px 10px;

      padding: 10px 100px;
    }
    .product p {
      font-size: 13px;
    }
    .delete {
      width: 15px;
      height: 15px;
    }
  }
`;

export const CartContainer = styled.div`
  /* position: relative; */
`;

export const Badge = styled.span`
  position: absolute;
  top: 0px;
  /* right: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13px;
  height: 13px;
  background-color: orange;
  border-radius: 50%;
  color: white;
  margin-right: 30px;
  font-size: 0.65rem;
  font-weight: bold;
`;
