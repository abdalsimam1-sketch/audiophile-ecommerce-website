export const TextField = ({ label, placeholder }) => {
  return (
    <div className="d-flex flex-column m-0 gap-0">
      <label className="form-label m-0">
        <p>{label}</p>
      </label>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className="form-control m-0"
        style={{ width: "15rem" }}
      />
    </div>
  );
};
