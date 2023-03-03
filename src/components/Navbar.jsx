import { useState } from "react";
import {
  Navi,
  NavItem,
  Cart,
  MenuIcon,
  NavList,
  NavLink,
  NavLine,
  Badge,
} from "../style/Navbar.styled.jsx";
import { NavItems } from "../data/NavItems.jsx";
import { useCart } from "react-use-cart";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    removeItem,
    emptyCart,
    updateItemQuantity,
  } = useCart();

  function CartBadge({ count }) {
    return count > 0 ? <Badge>{totalItems}</Badge> : null;
  }

  // function price({ cart }) {
  //   return cart > 0 ? cartTotal : null;
  // }

  return (
    <Navi>
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
      <div className="logoContainer">
        <a href="#home">
          <img className="logo" src="../images/logo.svg" alt="logo" />
        </a>
      </div>
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
      <Cart>
        <div className="checkout">
          <img src="../images/icon-cart.svg" alt="" />
          <div className="checkout-content">
            <h4>Cart</h4>

            {items.map((item, index) => {
              return (
                <div className="product" key={index}>
                  <img className="checkout-image" src={item.image} alt="" />
                  <p> {item.name}</p>
                  <p> {item.price}</p>
                  <p> {item.quantity}</p>

                  <img
                    className="delete"
                    src="../images/icon-delete.svg"
                    alt=""
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              );
            })}

            <button> Check Out</button>
          </div>

          <CartBadge count={totalItems} />
        </div>
      </Cart>

      <div className="avatar">
        <img src="../images/image-avatar.png" alt="" />
      </div>
      <NavLine />
    </Navi>
  );
}
export default Navbar;
