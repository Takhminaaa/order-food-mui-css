import React, { useState } from "react";
import { Input } from "../components/UI/input/Input";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Button from "../components/UI/button/Buttton";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsFormValid(emailValue.includes("@") && password.length > 6);
  };
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setIsFormValid(password.length > 8 && email.includes("@"));
  };

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledIcons />
      <Input
        label="email"
        type="email"
        placeholder="Введите email"
        value={email}
        onChange={handleEmailChange}
        variant="outlined"
      />
      <Input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={handlePasswordChange}
        variant="outlined"
        label="password"
      />

      <Button
        variant="contained"
        type="submit"
        onClick={onLogin}
        disabled={!isFormValid}
      >
        Войти
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled(Box)`
  width: 500px;
  height: fit-content;
  background-image: url("https://kartinki.pics/uploads/posts/2021-07/1625158404_23-kartinkin-com-p-fon-dlya-menyu-krasivie-foni-25.jpg");

  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 2px solid #8a2b06;
  border-radius: 10px;
  padding: 20px;
`;
const StyledIcons = styled(AccountCircleIcon)`
  width: 65px;
  height: 65px;
  color: #f0e9e9;
`;

// const StyledVisibilityOff = styled(VisibilityOff)`
//   width: 28px;
//   height: 28px;
//   color: #d7cdcd;
//   border-radius: 50%;
//   &:active,
//   &:hover {
//     background-color: #beb4b44f;
//     color: #fff;
//   }
// `;

// const StyledVisibility = styled(Visibility)`
//   width: 28px;
//   height: 28px;
//   color: #d7cdcd;
//   border-radius: 50%;
//   &:active,
//   &:hover {
//     background-color: #beb4b44f;
//     color: #fff;
//   }
// `;
