import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../nav/nav";
import './IntroSection.css'

const IntroSection = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar isLoggedIn={true} onLogout={onLogout} />
      <div className="intro-section h-[60vh] grid grid-flow-col grid-rows-2 sm:grid-rows-1 place-content-center place-items-start gap-8 ">

        {/* Button 1: Navigate to Page 1 */}
        <button className="shadow-pop-tr h-[40vh] mt-6 bg-[#CBDCEB] w-56 rounded-md font-roboto text-blue-900 font-extrabold text-xl duration-500 hover:bg-custom-blue hover:text-white" onClick={() => navigate("/normal")}>Normal Containers</button>
        {/* Button 2: Navigate to Page 2 */}
        <button className="shadow-pop-tr h-[40vh] mt-16 bg-custom-green w-56 rounded-md font-roboto text-yellow-300 font-extrabold text-xl duration-500 hover:bg-custom-green-hover hover:text-white" onClick={() => navigate("/special")}>OOG/BreakBulk</button>
      </div>
    </>
  );
}

export default IntroSection;
