import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import logo from '../assets/ALXLogo.svg';
import userAccount from '../assets/account.svg';
import logout from '../assets/logout.svg';
import history from '../assets/history.svg';
import addUser from '../assets/addNewUser.svg';
import uploadSheet from '../assets/upload-file.svg';
import amendData from '../assets/amend-data.svg'
import { useUserAdmin } from '../Login/UserAdminContext';
import Icons from './Icons';
import { handleFileUpload } from '../utils'

export default function Navbar({ isLoggedIn = false, onLogout }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const { userAdmin } = useUserAdmin();

  // Ref for the file input to trigger it programmatically
  const fileInputRef = useRef(null);

  // Handler to trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  return (
    <>
      <div className='flex h-[10vh] justify-between mb-24 md:mb-44'>
        <div className="transition-transform  flex items-center justify-between m-8 sm:m-10 md:m-12 lg:m-14 xl:m-8 flex-col sm:flex-col sm:justify-start sm:items-start group hover:cursor-pointer">
          {/* Logo */}
          <img
            src={logo}
            alt="CMA CGM Logo"
            className="duration-700 relative w-80 h-40 -ml-8 hover:scale-105"
            onClick={() => navigate("/")}
          />

          {/* Title */}
          <h3 className="text-lg font-semibold absolute font-roboto text-blue-900 sm:text-center top-[9rem] sm:top-[10rem]  mb-6 sm:mt-2 md:mt-6">
            Inland Transport Pricing Tool
          </h3>
        </div>

        {isLoggedIn &&
          <div>
            <div className="mt-16 mr-8 ml-auto sm:mt-16">
              <nav className="flex gap-3 justify-center items-center" aria-label="Tabs">
                <Icons imgSrc={logout} imgAlt="Logout Icon" iconName="logout" displayName="Logout" onClick={onLogout} />
                <Icons imgSrc={history} imgAlt="History Icon" iconName="history" displayName="History" />

                {userAdmin === 1 &&
                  <>
                    <Icons imgSrc={addUser} imgAlt="Add new user" iconName="addUser" displayName="Add new user" />
                    <Icons imgSrc={uploadSheet} imgAlt="Upload a File" iconName="uploadExcel" displayName="Upload Excel" onFileChange={handleFileUpload} />
                    <Icons imgSrc={amendData} imgAlt="Amend Price Data" iconName="AmendPriceLane" displayName="Amend Price Lane" />
                  </>
                }

                {/* Image with dropdown for smaller screens */}
                <div className="relative">
                  <img
                    src={userAccount}
                    alt="User Icon"
                    className="sm:hidden block  duration-700 w-10 h-auto mb-4 sm:mb-2 md:mb-0 hover:scale-125 cursor-pointer"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                      <ul className="text-sm text-gray-700">
                        <li>
                          <a
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={onLogout}
                          >
                            Logout
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => navigate("/HistoryPage")}
                          >
                            History
                          </a>
                        </li>
                        {userAdmin === 1 && (
                          <>
                            <li>
                              <a
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => navigate("/AddUser")}
                              >
                                Add new user
                              </a>
                            </li>
                            <li>
                              <a
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={handleUploadClick}
                              >
                                Upload Excel File
                              </a>
                            </li>
                            <li>
                              <a
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => navigate("/AmendPriceLane")}

                              >
                                Amend Price Lane
                              </a>
                            </li>
                          </>
                        )
                        }
                      </ul>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        }
      </div >

      {/* Hidden file input */}
      < input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }
        }
        accept=".xls, .xlsx, .csv"
        onChange={handleFileUpload}
      />
    </>
  );
}
