import React from "react";
import "./style.scss";
import { useContext } from "react";
import TemplateItem from "../../ListItem/TemplateItem";
import ModalContext from "../../../utils/Modal-Context";

function Template(props) {
  const { modal, setModal } = useContext(ModalContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    const payload = {
      show: true,
      Component: TemplateItem,
      data: [
        {
          title: props.data.title,
          id: props.data.id,
        },
      ],
    };
    setModal(payload);
  };

  return (
    <div className="Template">
      <span>{props.data.title}</span>
      <button onClick={onClickHandler}>View details</button>
    </div>
  );
}

export default Template;
