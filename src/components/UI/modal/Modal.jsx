import { Modal as MuiModal, styled } from "@mui/material";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <StyledModal open={isOpen} onClose={onClose}>
      <StyledBox>{children}</StyledBox>
    </StyledModal>
  );
};

export default Modal;

const StyledModal = styled(MuiModal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledBox = styled("div")(() => ({
  backgroundColor: "#fff",
  borderRadius: "15px",
  padding: "40px",
  borderTopLeftRadius: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  width: "750px",
  maxHeight: "237px",
  overflow: "auto",
}));
