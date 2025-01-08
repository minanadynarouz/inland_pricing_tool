import Navbar from "../nav/nav.jsx";
import SectionOne from "../sectionOne/sectionOne.jsx";
import FormContent from "../sectionTwo/FormContent.jsx";

const Normal = ({ onLogout }) => {
  return (
    <>
      <Navbar isLoggedIn={true} onLogout={onLogout} />
      <div className="flex justify-center">
        <div className="h-[90%] w-[90%] xl:h-[70%] mb-6 mt-4 sm:mt-6 md:mt-0 p-30 border-5 border-gray-300 rounded-2xl">
          <SectionOne text={
            "Get a quotation for the price. Prices are issued per <em>Container Type</em> only."
          } />
          <FormContent />
        </div>
      </div>
    </>
  );
}

export default Normal;