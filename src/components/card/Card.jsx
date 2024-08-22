import styled from "styled-components";
import Button from "../UI/button/Buttton";
import { CardItem } from "./CardItem";
import { useContext } from "react";
import { ModalContext } from "../../context/Context-modal";
import { CartContext } from "../../context/cart-context";
import Modal from "../UI/modal/Modal";

const Card = () => {
  const { closeModalHandler } = useContext(ModalContext);
  const { isOpenModal } = useContext(ModalContext);
  const { addedMeal, totalAmount } = useContext(CartContext);

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModalHandler}>
        <CardContent>
          <Liststyle>
            {addedMeal.map((item) => (
              <CardItem key={item.id} {...item} />
            ))}
          </Liststyle>

          <Totalamountstyle>
            <h1>Total Amount :</h1>

            <div>
              <b>$ {Number(totalAmount.toFixed(2))}</b>

              <section>
                <Button variant="close" onClick={closeModalHandler}>
                  {" "}
                  Close
                </Button>
                <Button variant="contained">Order</Button>
              </section>
            </div>
          </Totalamountstyle>
        </CardContent>
      </Modal>
    </>
  );
};

export default Card;
const CardContent = styled.div`
  border-radius: 20px;
  padding: 20px 32px;
`;

const Liststyle = styled.ul`
  list-style: none;
`;

const Totalamountstyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: end;
  }
  b {
    font-size: 24px;
    font-weight: bold;
    color: #8a2b06;
  }
  section {
    display: flex;
    gap: 19px;
  }
`;
