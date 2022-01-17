import { useContext } from "react";
import ModalContext from "../../utils/Modal-Context";
import styled from "styled-components";

function BaseModal({ show, data, Component, ...Props }) {
  const { modal, setModal } = useContext(ModalContext);

  const closeHandler = (event) => {
    event.preventDefault();
    const payload = {
      show: false,
      Component: null,
      data: [
        {
          title: null,
          id: null,
        },
      ],
    };
    setModal(payload);
    console.log(payload);
  };
  console.log({ show, data, Component, ...Props });
  const BaseModal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: 2ms ease-in-out;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
    &:hover {
      cursor: pointer;
    }
  `;
  const ModalContent = styled.div`
    display: flex;
    height: 80%;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 2vw;
    background-color: white;
  `;

  return (
    <BaseModal
      onClick={closeHandler}
      style={show ? { display: "flex" } : { display: "none" }}
    >
      <ModalContent>
        <typeof Component data={data} />
      </ModalContent>
    </BaseModal>
  );
}

export default BaseModal;
