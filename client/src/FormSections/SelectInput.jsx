
const SelectInput = ({ label, options = [], value, onChange = () => { } }) => (
  <div className="flex flex-col w-full md:w-auto">
    <label className="text-gray-700 font-medium mb-1">{label}</label>
    <select
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, i) => (
        <option key={i} value={option === "Select..." ? "" : option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
