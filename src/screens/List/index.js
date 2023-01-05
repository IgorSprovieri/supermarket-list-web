import "./index.css";
import { useEffect, useState } from "react";
import { getList } from "../../services/request";
import { ListCard } from "../../components";

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

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <img
            className="logo-img"
            src="/images/logo.png"
            alt="supermarket-list-logo"
          ></img>
          <h1>Lista Supermercado</h1>
        </div>
        <div></div>
        <div className="list-screen-list-container">
          {loading ? (
            <h3>Carregando...</h3>
          ) : listData?.length > 0 ? (
            listData.map((item) => <ListCard key={item._id} item={item} />)
          ) : (
            <h3>Sua lista está vazia</h3>
          )}
        </div>
      </div>
    </div>
  );
};
