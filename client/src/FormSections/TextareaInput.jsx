const TextareaInput = ({ label, name, value, onChange = () => { } }) => (
  <div className="flex flex-col w-full sm:w-auto">
    <label className="text-gray-700 font-medium mb-1">{label}</label>
    <textarea
      name={name}
      className="h-[42px] pl-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  </div>
);

export default TextareaInput;
