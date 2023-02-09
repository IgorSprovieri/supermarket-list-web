import "./index.css";
import { useEffect, useState } from "react";
import { getList } from "../../services/request";
import { Button, Loader, ListRender } from "../../components";

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
          {loading ? (
            <Loader></Loader>
          ) : (
            <ListRender list={listData}></ListRender>
          )}
        </div>
      </div>
    </div>
  );
};
