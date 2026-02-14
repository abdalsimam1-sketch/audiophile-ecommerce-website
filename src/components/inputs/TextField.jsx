export const TextField = ({ label, placeholder, className, required }) => {
  return (
    <main className={`${className} `}>
      <label className="form-label">{label}</label>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className={`form-control `}
        required={required}
      />
    </main>
  );
};
