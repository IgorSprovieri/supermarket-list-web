import "./index.css";
import { ListCard } from "../ListCard";

export const ListRender = ({ list }) => {
  if (list?.length === 0) {
    return <h3>Sua lista está vazia</h3>;
  }
  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard key={item._id} item={item} />
      ))}
    </div>
  );
};
