import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* padding-inline: 16px; */
  background-color: #fff;
  width: 100%;

  span {
    display: flex;
    color: #27374d;
    font-size: 56px;
    font-weight: 700;
    /* height: 80px; */
  }

  ul {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-end;

    a {
      font-weight: bold;
      color: #27374d;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 20px;

      &.active {
        color: #2ca77c;
        text-decoration: underline;
      }

      &:hover {
        color: #50f4ba;
      }
    }
  }
`;

function Nav() {
  return (
    <StyledNav>
      <span>HRNet</span>
      <ul>
        <li>
          <NavLink
            to="/new-employee"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add an employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            View employees
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
