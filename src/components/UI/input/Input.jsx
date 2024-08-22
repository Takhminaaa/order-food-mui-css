import { styled, TextField } from "@mui/material";

export const Input = ({
  label,
  type,
  value,
  onChange,
  variant,
  InputAdornment,
  onClick,
  onMouseDown,

  ...rest
}) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      label={label}
      variant={variant}
      InputAdornment={InputAdornment}
      onClick={onClick}
      onMouseDown={onMouseDown}
      {...rest}
    />
  );
};

const StyledInput = styled(TextField)(({ variant }) => ({
  ...(variant === "outlined" && {
    width: "370px",
    backgroundColor: "#dcc9c9",
    borderRadius: "10px",
    label: {
      color: "#8a2b06",
    },
  }),
}));
