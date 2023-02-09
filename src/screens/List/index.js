import "./index.css";
import { useEffect, useState } from "react";
import { getList, deleteList } from "../../services/request";
import { Button, Loader, ListCard } from "../../components";

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState(true);

  const loadList = async () => {
    setLoading(true);
    const result = await getList();
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadList();
  }, []);

  async function onClickDelete(id) {
    const result = await deleteList(id);

    if (result?.error) {
      return window.alert("Erro ao deletar tarefa");
    }

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
            <Button>Adicionar</Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? <Loader></Loader> : listRender()}
        </div>
      </div>
    </div>
  );
};
