import styled from "styled-components";

export const Navi = styled.nav`
  background-color: none;
  display: flex;
  position: fixed;
  width: 80%;
  z-index: 98;

  align-items: center;

  .logo {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 375px) {
    .logo {
      margin-left: 40px;
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
  top: 0;

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

  :hover {
    text-decoration: underline;

    color: orange;
  }
`;
export const Cart = styled.div`
  position: absolute;
  /* margin-right: 30px; */
  right: 0;

  .avatar {
    width: 30px;
    height: 30px;
    margin-left: 20px;
  }
  @media (max-width: 375px) {
    margin-right: -60px;
  }
`;
