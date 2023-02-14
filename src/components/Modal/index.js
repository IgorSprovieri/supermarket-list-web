import "./index.css";
import { Button, Input } from "../index";
import { useState } from "react";
import { createItem } from "../../services/request";
import { Loader } from "../index";

export const Modal = ({ enabled, children, onClose }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  async function onClickSubmit() {
    if (name.length === 0) {
      return;
    }

    setLoading(true);

    const result = await createItem({ name, quantity });

    if (!result.error) {
      setLoading(false);
      setName("");
      setQuantity(1);
      onClose();
    }
  }

  if (enabled === false) {
    return <div></div>;
  } else {
    return (
      <form
        id="form"
        className="modal-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {loading ? (
          <div className="modal-content-container">
            <Loader></Loader>
          </div>
        ) : (
          <div className="modal-content-container">
            <button className="modal-close-button" onClick={onClose}>
              <img
                className="modal-close-image"
                src="images/close.svg"
                alt="fechar modal"
              ></img>
            </button>
            <div className="modal-title-container">
              <h1>{children} Item</h1>
            </div>
            <div className="modal-input-container">
              <Input
                onChange={(text) => setName(text)}
                value={name}
                label="Nome"
                type="text"
                required={true}
              ></Input>
            </div>
            <div className="modal-input-container">
              <Input
                onChange={(value) => setQuantity(value)}
                value={quantity}
                label="Quantidade"
                type="number"
                min={1}
                required={true}
              ></Input>
            </div>
            <div className="modal-button-container">
              <Button onClick={() => onClickSubmit()} type="submit">
                {children}
              </Button>
            </div>
          </div>
        )}
      </form>
    );
  }
};
