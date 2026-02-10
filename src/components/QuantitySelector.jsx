export const QuantitySelector = ({
  handleAdd,
  handleRemove,
  count,
  filteredProduct,
  addToCart,
}) => {
  return (
    <div className="d-flex gap-4 ">
      <span className="increase-btns h-100 rounded">
        <i className="btn bi bi-dash-lg " onClick={handleRemove}></i>
        <i className="btn">{count}</i>
        <i className="btn bi bi-plus-lg" onClick={handleAdd}></i>
      </span>
      <button
        className="btn button1"
        onClick={() => addToCart(filteredProduct, count)}
      >
        ADD TO CART
      </button>
    </div>
  );
};
