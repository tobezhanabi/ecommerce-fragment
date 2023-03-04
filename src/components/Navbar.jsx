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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    isEmpty,

    items,
    totalItems,
    cartTotal,
    removeItem,
  } = useCart();

  function CartBadge({ count }) {
    return count > 0 ? <Badge>{totalItems}</Badge> : null;
  }

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
            <div className="line" />
            {isEmpty ? (
              <p className="empty">Your cart is empty.</p>
            ) : (
              <>
                {items.map((item, index) => {
                  return (
                    <div className="product" key={index}>
                      <img className="checkout-image" src={item.image} alt="" />
                      <div>
                        <div>
                          <p> {item.name}</p>
                        </div>
                        <div>
                          <p>
                            {" "}
                            ${item.price} x {item.quantity}{" "}
                            <strong>${cartTotal}.00</strong>
                          </p>
                        </div>
                      </div>
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
              </>
            )}
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
