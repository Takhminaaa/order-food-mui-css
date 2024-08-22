import { useContext, useEffect, useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { ModalContext } from "../../context/Context-modal";
import { CartContext } from "../../context/cart-context";
import Button from "../UI/button/Buttton";
import { Box, styled } from "@mui/material";

const HeaderCardButton = () => {
  const context = useContext(ModalContext);
  const { addedMeal } = useContext(CartContext);
  const [bump, setBump] = useState("");

  const currentMealsCount = addedMeal.reduce((acc, meal) => {
    return acc + meal.amount;
  }, 0);

  useEffect(() => {
    setBump("bump");

    const timeId = setTimeout(() => {
      setBump("");
    }, 300);

    return () => {
      clearTimeout(timeId);
    };
  }, [currentMealsCount]);

  return (
    <div>
      <StyledButton onClick={context.openModalHandler} className={bump}>
        <LocalGroceryStoreIcon />
        <span>Youre card </span>

        <StyledBox component="span" m={0}>
          {currentMealsCount}
        </StyledBox>
      </StyledButton>
    </div>
  );
};

export default HeaderCardButton;

const StyledButton = styled(Button)(() => ({
  cursor: "pointer",
  border: "none",
  backgroundColor: "#5a1f08",
  padding: "0.75rem 2rem",
  color: "white",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: " #461805",
  },
  "&:active": {
    backgroundColor: " #461805",
  },

  display: "flex",
  gap: "10px",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledBox = styled(Box)(() => ({
  width: "35px",
  height: "35px",
  borderRadius: "50px",
  backgroundColor: " #8f4207",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "17px",
  "&:hover": {
    backgroundColor: "#7e2a0a",
    color: "#fff",
  },

  "&:active": {
    backgroundColor: " #993108",
  },
}));
