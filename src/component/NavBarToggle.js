import styled from "styled-components";

const StyledHeader = styled.header`
  color: white;
  background-color: black;
  font-size: 20px;
  width: 300px;
  text-align: center;
`;



const Header = () => {
  return <StyledHeader>This is Header.</StyledHeader>;
};

export default Header;