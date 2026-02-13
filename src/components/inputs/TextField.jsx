export const TextField = ({ label, placeholder, className }) => {
  return (
    <main className={`${className}`}>
      <label className="form-label">{label}</label>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className="form-control "
      />
    </main>
  );
};
