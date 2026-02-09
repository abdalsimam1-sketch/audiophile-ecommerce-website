export const TextField = ({ label, placeholder }) => {
  return (
    <div>
      <label className="form-label m-0">
        <p>{label}</p>
      </label>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className="form-control m-0"
      />
    </div>
  );
};
