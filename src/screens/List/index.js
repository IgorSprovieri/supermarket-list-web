import "./index.css";
import { useEffect, useState } from "react";
import { getList, deleteItem } from "../../services/request";
import { Button, Loader, ListCard, Modal } from "../../components";
import { render } from "@testing-library/react";

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState(true);
  const [modalEnabled, setModalEnabled] = useState(false);
  const [renderModal, setRenderModal] = useState(false);
  const [updatedItem, setUpdateItem] = useState();

  const loadList = async () => {
    setLoading(true);
    const result = await getList();
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    if (modalEnabled === true) {
      setRenderModal(true);
    } else {
      setTimeout(() => {
        setRenderModal(false);
      }, 500);
    }
  }, [modalEnabled]);

  async function onClickDelete(id) {
    const result = await deleteItem(id);

    if (result?.error) {
      return;
    }

    loadList();
  }

  function onClickUpdate(item) {
    setUpdateItem(item);
    setModalEnabled(true);
  }

  function onClickAdd() {
    setUpdateItem();
    setModalEnabled(true);
  }

  function onClickCloseModal() {
    setModalEnabled(false);
    loadList();
  }

  function listRender() {
    if (listData?.length === 0) {
      return <h3>Sua lista está vazia</h3>;
    }
    return (
      <div className="list-render-container">
        {listData.map((item) => (
          <ListCard
            key={item._id}
            item={item}
            onClickUpdate={() => onClickUpdate(item)}
            onClickDelete={() => onClickDelete(item._id)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-title-container">
            <img
              className="logo-img"
              src="/images/logo.png"
              alt="supermarket-list-logo"
            ></img>
          </div>
          <div className="list-screen-button-container">
            <Button onClick={() => onClickAdd()}>Adicionar</Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? <Loader></Loader> : listRender()}
        </div>
      </div>
      {renderModal && (
        <Modal
          enabled={modalEnabled}
          onClose={() => {
            onClickCloseModal();
          }}
          item={updatedItem}
        ></Modal>
      )}
    </div>
  );
};
