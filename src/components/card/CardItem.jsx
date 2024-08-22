import styled from "styled-components";
import Button from "../UI/button/Buttton";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";

export const CardItem = ({ title, price, amount, id }) => {
  const { onIncraese, onDecrease } = useContext(CartContext);
  return (
    <ListStyle>
      <StyledContainerName>
        <h2>{title}</h2>
        <WrapperPrice>
          <b>${price} </b>
          <span>x{amount}</span>
        </WrapperPrice>
      </StyledContainerName>
      <WrapperButtons>
        <Button
          borderStyle="none"
          variant="text"
          onClick={() => onDecrease(id)}
        >
          <HorizontalRuleIcon style={{ width: "15px" }} />
        </Button>
        <Button
          borderStyle="none"
          variant="text"
          onClick={() => onIncraese(id)}
        >
          <AddIcon style={{ width: "15px" }} />
        </Button>
      </WrapperButtons>
    </ListStyle>
  );
};

const ListStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d6d6d6;
  padding-bottom: 24px;
`;

const StyledContainerName = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: #222;
    font-size: 20px;
    font-weight: 600;
  }
`;

const WrapperPrice = styled.div`
  display: flex;
  gap: 47px;
  b {
    color: #ad5502;
    font-size: 18px;
    font-weight: 600px;
  }

  span {
    width: 46px;
    height: 2rem;
    border: 1px solid #d6d6d6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  }
`;

const WrapperButtons = styled.div`
  display: flex;
  gap: 20px;
`;
