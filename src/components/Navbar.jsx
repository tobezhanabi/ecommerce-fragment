import { useState } from "react";
import {
  Navi,
  NavItem,
  Cart,
  MenuIcon,
  NavList,
  NavLink,
} from "../style/Navbar.styled.jsx";
import { NavItems } from "../data/NavItems.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <Cart>
        <img src="../images/icon-cart.svg" alt="" />
        <img className="avatar" src="../images/image-avatar.png" alt="" />
      </Cart>
    </Navi>
  );
}
export default Navbar;
