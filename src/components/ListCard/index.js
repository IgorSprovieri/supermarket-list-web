import "./index.css";
import { updateList } from "../../services/request";
import { useState } from "react";

export const ListCard = (props) => {
  const [item, setItem] = useState(props.item);

  async function onClickCheckBox() {
    const updatedItem = new Object();
    updatedItem._id = item._id;
    updatedItem.name = item.name;
    updatedItem.quantity = item.quantity;
    updatedItem.username = item.username;
    updatedItem.checked = !item.checked;

    const result = await updateList(item._id, updatedItem);

    if (result?.error) {
      return window.alert("Erro inesperado");
    }

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
        <button onClick={onClickCheckBox} className="list-card-button">
          <img
            className="list-card-close-image"
            src="/images/close.svg"
            alt="delete-item"
          ></img>
        </button>
        <button onClick={onClickCheckBox} className="list-card-button">
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
