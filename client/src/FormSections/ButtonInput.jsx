const ButtonInput = ({ label, className = "" }) => (
  <button
    type="submit"
    name={label}
    className={` text-white p-2 rounded-md w-full sm:w-[12rem]  transition duration-200 ${className}`}
  >
    {label}
  </button>
);

export default ButtonInput;
