import axios from "axios";

export const handleFileUpload = async (e) => {

  const file = e.target.files[0];
  if (file) {
    const formdata = new FormData();
    formdata.append('excelFile', file);

    try {
      const sendFileToBackend = await axios.post('http://localhost:5000/uploadFile', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
      if (sendFileToBackend.status === 200) {
        alert("Database updated with new file uploaded");
        e.target.value = '';
      }
    } catch (error) {
      console.log("Error Uploading File: ", error);
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        alert(`Server Error: ${error.response.data.message || 'Failed to upload file'}`);
      } else if (error.request) {
        // No response received from the server
        alert("Network Error: No response from the server. Please try again later.");
      } else {
        // Other errors (e.g., issues setting up the request)
        alert(`Unexpected Error: ${error.message}`);
      }
    }
  }
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatDate(date) {
  // Ensure the date is a Date object
  const d = new Date(date);

  // Get day, month, year, hours, minutes, seconds
  const day = String(d.getDate()).padStart(2, '0'); // Add leading zero if needed
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  // Return formatted string
  return `${day}-${month}-${year}  ${hours}:${minutes}`;
}


export const fetchData = async (setHistory) => {
  try {
    const response = await axios.get("http://localhost:5000/getFiles");
    if (response.status === 200) {
      setHistory(response.data);
    } else {
      console.error("Error fetching data - frontend message");
    }
  } catch (error) {
    console.error('Error fetching data - frontend message', error);
  }
};

