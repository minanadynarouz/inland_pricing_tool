import "./FormSection.css";
import SelectInput from "./SelectInput.jsx";
import FreeInput from "./FreeInput.jsx";
import ButtonInput from "./ButtonInput.jsx";

export default function AddUserForm({
  firstName, setFirstName,
  lastName, setLastName,
  email, setEmail,
  password, setPassword,
  admin, setAdmin,
  emailError,
  className = "",
}) {

  return (
    <div className={`flex flex-wrap m-10 gap-16 justify-start ${className}`}>
      <FreeInput
        type="text"
        label="First Name"
        name="first_name"
        value={firstName}
        onChange={setFirstName}
      />
      <FreeInput
        type="text"
        label="Last Name"
        name="last_name"
        value={lastName}
        onChange={setLastName}
      />
      <div className="w-full sm:w-auto"> {/* Wrap input and error together */}
        <FreeInput
          type="email"
          label="Email address"
          name="email_address"
          value={email}
          onChange={setEmail}
        />
        {emailError && (
          <p className="text-red-600 text-sm mt-1">Email must be CMA CGM domain</p>
        )}
      </div>
      <FreeInput
        type="password"
        label="Password"
        name="password"
        value={password}
        onChange={setPassword}
      />

      <SelectInput
        label="Admin User ?"
        options={["Select...", "Yes", "No"]}
        value={admin}
        onChange={setAdmin}
      />

      <ButtonInput label="Add New User" className="bg-custom-blue hover:bg-blue-600" />
    </div>
  );
}
