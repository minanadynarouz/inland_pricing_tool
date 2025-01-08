import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Icons({ imgSrc, imgAlt, iconName, displayName, onFileChange, clearForm, ...rest }) {
  const [hover, setHover] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();


  const onHover = (e) => {
    setHover(e);
  }

  const onHoverOver = (e) => {
    setHover(null);
  }

  const handleClick = (iconName) => {
    if (fileInputRef.current && iconName === 'uploadExcel') {
      fileInputRef.current.click();
    }
    if (iconName === "refresh") {
      clearForm();
    }
    if (iconName === "AmendPriceLane") {
      navigate("/AmendPriceLane")
    }
    if (iconName === "addUser") {
      navigate("/AddUser")
    }
    if (iconName === "history") {
      navigate("/HistoryPage")
    }

  }

  return (
    <div className="flex h-[5rem]">
      <img
        src={imgSrc}
        alt={imgAlt}
        loading="lazy"
        className={`sm:block w-auto sm:w-10 h-auto rounded-lg p-2 cursor-pointer 
           sm:hover:w-24 md:hover:w-48 lg:hover:w-48 
          hover:bg-gray-50 duration-700 
          ${iconName === "refresh" ? "sm:w-14 mt-4 text-sm font-medium flex justify-center items-center mx-auto" : "hidden"}`}
        onMouseEnter={() => onHover(iconName)}
        onMouseLeave={onHoverOver}
        onClick={() => handleClick(iconName)}
        {...rest}
      />
      <p
        className={`text-xs italic absolute top-12 transform transition-all duration-700 
          ${hover === iconName ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} 
          ${iconName === "refresh" && "hidden"}`}
      >
        {displayName}
      </p>

      {/* hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept=".xls, .xlsx, .csv"
        onChange={onFileChange}
      />
    </div>
  );
}
