export const QuantitySelector = ({
  handleAdd,
  handleRemove,
  count,
  filteredProduct,
  addToCart,
  addBtn,
}) => {
  return (
    <div
      className="d-flex flex-nowrap gap-4 align-self-center"
      style={{ whiteSpace: "nowrap" }}
    >
      <span className="increase-btns h-100 rounded">
        <i className="btn bi bi-dash-lg " onClick={handleRemove}></i>
        <i className=" fw-bold">{count}</i>
        <i className="btn bi bi-plus-lg" onClick={handleAdd}></i>
      </span>
      <button
        className={`btn button1 ${addBtn ? "" : "d-none"}`}
        onClick={() => addToCart(filteredProduct, count)}
      >
        ADD TO CART
      </button>
    </div>
  );
};
