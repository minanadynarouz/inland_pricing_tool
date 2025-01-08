import { useEffect, useState } from 'react';
import Navbar from '../nav/nav';
import SectionOne from '../sectionOne/sectionOne';
import axios from 'axios';
import { formatDate, fetchData } from '../utils.js';

function HistoryPage({ onLogout }) {
  const [history, setHistory] = useState([]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {

    fetchData(setHistory);

    // Event listener to track screen resize
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    //cleanup function to remove eventlistener
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleDownload = async (fileName) => {
    try {
      const response = await axios({
        url: `http://localhost:5000/downloadFiles/${fileName}`,
        method: 'GET',
        responseType: 'blob', // Important to handle binary data
      });

      // Create a temporary link to trigger the file download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');

      link.href = url;
      link.setAttribute('download', fileName); // Specify file name
      document.body.appendChild(link);
      link.click();

      // Clean up the link element after download
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };


  const date = new Date();

  return (
    <>
      <Navbar isLoggedIn={true} onLogout={onLogout} />
      <div className="flex justify-start px-4 sm:px-6 lg:px-8">
        <div className="w-[95vw]  h-[90%] xl:h-[70%] mb-6 mt-4 sm:mt-6 md:mt-0 p-4 sm:p-6 border-4 border-gray-300 rounded-2xl ">
          <SectionOne text={`Below all files uploaded in ${date.getFullYear()}`} className="font-semibold" />
          <div className="overflow-x-auto mt-8 ">
            <table className={` text-blue-900 font-roboto border-separate border-spacing-4 ${screenSize < 761 && "flex flex-col flex-wrap"}`}>
              <thead >
                <tr className={`border-b ${screenSize < 761 && "flex flex-col flex-wrap"} `}>
                  <th className="px-5 py-1 text-sm sm:text-base">#</th>
                  <th className="px-5 py-1 text-sm sm:text-base">::</th>
                  <th className="px-5 py-1 text-sm sm:text-base">File Name</th>
                  <th className="px-5 py-1 text-sm sm:text-base">::</th>
                  <th className="px-5 py-1 text-sm sm:text-base">Uploaded by</th>
                  <th className="px-5 py-1 text-sm sm:text-base">::</th>
                  <th className="px-5 py-1 text-sm sm:text-base">Upload Date</th>
                  <th className="px-5 py-1 text-sm sm:text-base">::</th>
                  <th className="px-5 py-1 text-sm sm:text-base">Download Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 ">
                {history.map((item) => (
                  <tr className={`text-center ${screenSize < 761 && "flex flex-col flex-wrap"} `} key={item.id}>
                    <td className="px-2 py-1">{item.id}</td>
                    <td className="px-2 py-1">::</td>
                    <td className="px-2 py-1">{item.file_name}</td>
                    <td className="px-2 py-1">::</td>
                    <td className="px-2 py-1">{item.user}</td>
                    <td className="px-2 py-1">::</td>
                    <td className="px-2 py-1">{formatDate(item.upload_time)}</td>
                    <td className="px-2 py-1">::</td>
                    <td className="px-2 py-1">
                      <button onClick={() => handleDownload(item.file_name)} className="text-blue-600 hover:underline">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryPage;
