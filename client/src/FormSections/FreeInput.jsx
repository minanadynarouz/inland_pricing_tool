import './FormSection.css'

const FreeInput = ({ type, label, name, placeholder, value, onChange = () => { }, ...rest }) => (
  <div className="flex flex-col w-full sm:w-auto">
    <label className="text-gray-700 font-medium mb-1">{label}{name === "quantity" && <span className="tooltip"><p className="tooltipText">Insert quanitity of the potential business only for visibility to X-Sell Champion. <br />Note this will not affect Offer you extract to Customer !</p></span>}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder || ""}
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default FreeInput;
