import Button from "../UI/button/Buttton";
import HeaderCardButton from "./HeaderCardButton";
import styled from "styled-components";

const Header = ({ isLogin, onLogout }) => {
  return (
    <StyledHeader>
      <h1>ReactMeals</h1>
      {isLogin && (
        <div style={{ display: "flex", gap: "20px" }}>
          <HeaderCardButton />
          <Button variant="logout" onClick={onLogout}>
            Logout
          </Button>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  
  
  & > h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;
