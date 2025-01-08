import Navbar from "../nav/nav";
import SectionOne from "../sectionOne/sectionOne";
import SpecialFormContent from "../sectionTwo/SpecialFormContent";
// import ContainerDetails from "../sectionTwo/ContainerDetails";

const Special = ({ onLogout }) => {
  return (
    <>
      <Navbar isLoggedIn={true} onLogout={onLogout} />
      <div className="flex justify-center">
        <div className="h-[90%] w-[90%] xl:h-[70%] mb-6 mt-4 sm:mt-6 md:mt-0 p-30 border-5 border-gray-300 rounded-2xl">
          <SectionOne text={"Fill the form below, email will be sent with these details to <em>x-sell</em> champion"} />
          <SpecialFormContent />
        </div>
      </div>
    </>

  );
}

export default Special;