import { Button as MuiButton, styled } from "@mui/material";

const Button = ({
  onClick,
  children,
  variant,
  borderStyle = "rounded",
  ...restProps
}) => {
  return (
    <StyledButton
      onClick={onClick}
      borderstyle={borderStyle}
      variant={variant}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(MuiButton)(({ variant }) => ({
  "&:hover": {
    backgroundColor: "#7e2a0a",
    color: "#fff",
  },
  "&:active": {
    backgroundColor: " #993108",
  },
  "&:disabled": {
    backgroundColor: "#cac6c4",
  },
  textTransform: "none",

  ...(variant === "logout" && {
    backgroundColor: "#5a1f08",
    color: "white",
    paddingBlock: "10px",
    fontweight: "700",
    padding: "15px 58px",
    borderRadius: "30px",

    border: "none",
  }),

  ...(variant === "text" && {
    width: "40px",
    height: "40px",
    border: "1px solid #9b3107 ",
    padding: "10px 23px",
    color: " #9b3107",
    fontWeight: "540",
  }),

  ...(variant === "contained" && {
    width: "100px",
    height: "42px",
    borderRadius: "20px",
    fontWeight: "600",

    backgroundColor: "#9b3107",
    padding: "10px 23px",
  }),

  ...(variant === "close" && {
    width: "95px",
    height: "40px",
    border: "1px solid #9b3107 ",
    borderRadius: "20px",
    padding: "10px 23px",
    color: " #9b3107",
    fontWeight: "540",
  }),
}));
