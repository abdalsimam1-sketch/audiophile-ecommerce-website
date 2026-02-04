export const TextField = ({ label, placeholder }) => {
  return (
    <div>
      <label className="form-label">
        <p>{label}</p>
      </label>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className="form-control"
      />
    </div>
  );
};
