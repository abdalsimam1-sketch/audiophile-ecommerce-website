export const TextField = ({
  label,
  placeholder,
  className,
  required,
  error,
  value,
  onChange,
  name,
}) => {
  return (
    <main className={`${className} `}>
      <div className="d-flex justify-content-between">
        <label className="form-label">{label}</label>
        {error && <span className="text-danger">{error}</span>}
      </div>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className={`form-control ${error ? "border-danger" : ""}`}
        required={required}
        name={name}
        value={value}
        onChange={onChange}
      />
    </main>
  );
};
