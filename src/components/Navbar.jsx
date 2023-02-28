import { useState } from "react";
import {
  Navi,
  NavItem,
  Cart,
  MenuIcon,
  NavList,
  NavLink,
  NavLine,
  CartContainer,
  Badge,
} from "../style/Navbar.styled.jsx";
import { NavItems } from "../data/NavItems.jsx";
import { Product } from "../data/ProductItem.jsx";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { title, currentPrice, image } = Product[0];
  function CartBadge({ count }) {
    return count > 0 ? <Badge>{count}</Badge> : null;
  }
  // const cartItemCount = props.cartItems.length;
  return (
    <Navi>
      <div className="logoContainer">
        <a href="">
          <img className="logo" src="../images/logo.svg" alt="logo" />
        </a>
      </div>

      <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <img
          className="OpenMenu"
          src="../images/icon-menu.svg"
          alt=" "
          menuOpen={menuOpen}
        />
        <img
          className="CloseMenu"
          src="../images/icon-close.svg"
          alt=" "
          menuOpen={menuOpen}
        />
      </MenuIcon>

      <NavList menuOpen={menuOpen}>
        {NavItems &&
          NavItems.map((navItem, index) => (
            <NavItem
              key={index}
              index={index}
              menuOpen={menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              <NavLink href={navItem.href}>
                <span> {navItem.text}</span>
              </NavLink>
            </NavItem>
          ))}
      </NavList>
      <CartContainer>
        <Cart>
          <div className="checkout">
            <img src="../images/icon-cart.svg" alt="" />
            <div className="checkout-content">
              <div className="product">
                <img className="checkout-image" src={image} alt="" />
                <p> {title}</p>
                <p> {currentPrice}</p>
              </div>
              <button> Check Out</button>
              {props.cartItems}
            </div>
            <CartBadge count="4" />
          </div>
          <div>
            <img className="avatar" src="../images/image-avatar.png" alt="" />
          </div>
        </Cart>
      </CartContainer>
      <NavLine />
    </Navi>
  );
}
export default Navbar;
