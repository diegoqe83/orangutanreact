import "./ItemListContainer.scss";

export const ItemListContainer = ({ saludo }) => {
  return (
    <div className="list__container">
      <h2>Productos</h2>
      <hr />
      <p>{saludo}</p>
    </div>
  );
};
