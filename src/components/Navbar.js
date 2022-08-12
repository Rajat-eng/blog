import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink=styled(Link)`
text-decoration: none;
color: #9e9e9e;
&:hover{
  text-decoration: underline;
}
`
const Nav=styled.ul`
list-style-type: none;
  padding: 0;
  display: flex;
  li{
    margin-left: 10px;
  }
`

function Navbar() {
    return (
      <>
        <Nav id="nav">
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/create-post">CreatePost</StyledLink>
          </li>
        </Nav>
      </>
    );
}
export default Navbar;