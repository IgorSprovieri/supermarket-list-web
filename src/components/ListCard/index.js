import "./index.css";
import { updateItem } from "../../services/request";
import { useState } from "react";

export const ListCard = (props) => {
  const { onClickDelete, onClickUpdate } = props;
  const [item, setItem] = useState(props.item);

  async function onClickCheckBox() {
    const updatedItem = item;
    updatedItem.checked = !item.checked;

    const result = await updateItem(item._id, updatedItem);

    if (result?.error) {
      return;
    }

    setItem();
    setItem(updatedItem);
  }

  return (
    <div className="list-card-container">
      <button onClick={onClickCheckBox} className="list-card-check-button">
        <img
          className="list-card-checkbox"
          src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
          alt="checked-item"
        ></img>
      </button>
      <div className="list-card-text-container">
        <span className="list-card-title-container">{item.name}</span>
        <span className="list-card-subtitle-container">
          {item.quantity} Unidades
        </span>
      </div>
      <div className="list-card-buttons-container">
        <button onClick={onClickDelete} className="list-card-button">
          <img
            className="list-card-close-image"
            src="/images/close.svg"
            alt="delete-item"
          ></img>
        </button>
        <button onClick={onClickUpdate} className="list-card-button">
          <img
            className="list-card-arrow-image"
            src="/images/arrow.svg"
            alt="update-item"
          ></img>
        </button>
      </div>
    </div>
  );
};
