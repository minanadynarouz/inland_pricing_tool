import axios from 'axios';
import FormsWrapper from "../FormsWrapper/FormsWrapper";
import Navbar from "../nav/nav";
import SectionOne from "../sectionOne/sectionOne";
import addUserIcon from "../assets/addUserIcon.svg"
import AddUserForm from "../FormSections/AddUserForm";
import { useState } from "react";


const AddUser = ({ onLogout }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState("No");

  let userAdmin = 0;

  const handleAddUserFormSubmit = async (e) => {
    e.preventDefault();

    if (admin === "Yes") {
      userAdmin = 1;
    }

    if (!firstName || !lastName || !email || !password) {
      alert("All fields should be inserted !")
      return;
    }

    console.log("All validations passed. Preparing to send Axios request...");


    try {
      const response = await axios.post("http://localhost:5000/addUser", {
        firstName,
        lastName,
        email,
        password,
        userAdmin
      })
      if (response.status === 200) {
        console.log("Success, User Added in Database");
        alert(`First Name ${firstName}, Last Name ${lastName}, Email ${email}, Admin? ${userAdmin}`)
      } else {
        console.error("Error in sending the Data to backend");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("This user already exists. Please use a different email.");
      } else {
        console.error("Error in Add User:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  }

  return (
    <>
      <Navbar isLoggedIn={true} onLogout={onLogout} />
      <div className="flex justify-center">
        <div className="h-[90%] w-[90%] xl:h-[70%] mb-6 mt-4 sm:mt-6 md:mt-0 p-30 border-5 border-gray-300 rounded-2xl">
          <SectionOne text={"Fill the form below, then click submit to <strong>Add New User</strong> in the Database"} />
          <form onSubmit={handleAddUserFormSubmit}>

            <FormsWrapper
              imgUrl={addUserIcon}
              imgAlt={"Add User Icon"}
              FormItSelf={AddUserForm}
              formProps={{
                firstName, setFirstName,
                lastName, setLastName,
                email, setEmail,
                password, setPassword,
                admin, setAdmin
              }}
            />
          </form>
        </div>
      </div>
    </>

  );
}

export default AddUser;