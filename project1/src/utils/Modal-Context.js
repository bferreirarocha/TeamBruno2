import { createContext } from "react";

// set the defaults
const ModalContext = createContext({
  modal: [],
  setModal: () => {},
});

export default ModalContext;
