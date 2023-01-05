//import { useState, useEffect } from "react";
import "./App.css";
//import { ListCard } from "./components/ListCard/index.js";
import { HomeScreen, ListScreen } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  /*const [loading, setLoading] = useState(true);
  const [marketList, setMarketList] = useState([]);

  const loadList = () => {
    setLoading(true);
    setTimeout(() => {
      setMarketList(fakeList);
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    loadList();
  }, []);
*/

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/list" element={<ListScreen></ListScreen>}></Route>
      </Routes>
    </Router>

    /*
    <div className="App">
      {loading ? (
        <span>Carregando...</span>
      ) : (
        marketList.map((item) => (
          <ListCard key={`item_${item.id}`} item={item}></ListCard>
        ))
      )}
    </div>
    */
  );
}

export default App;
