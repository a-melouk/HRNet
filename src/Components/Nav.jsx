import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-inline: 16px;
  padding-block: 4px;
  background-color: #fff;
  border-radius: 4px;

  span {
    display: flex;
    color: #27374d;
    font-size: 56px;
    font-weight: 700;
    height: 80px;
    width: 175px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 24px;

    a {
      font-weight: bold;
      color: #27374d;
      margin-right: 0.5rem;
      display: flex;
      align-items: center;
      gap: 4px;

      &.router-link-exact-active {
        color: #42b983;
      }

      &:hover {
        text-decoration: underline;
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
          <a to="/">Add an employee</a>
        </li>
        <li>
          <a to="/">View employees</a>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
