import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login/Login';
import IntroSection from './introSection/IntroSection';
import Normal from './Sections/Normal'
import Special from './Sections/Special';
import AmendPriceLane from './Sections/AmendPriceLane'
import { UserAdminProvider } from './Login/UserAdminContext';
import AddUser from './Sections/AddUser';
import HistoryPage from './Sections/HistoryPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    const loginTimeStamp = localStorage.getItem('loginTimeStamp');

    if (storedLoginState === 'true' && loginTimeStamp) {
      const currentTime = Date.now();
      const oneDayInMilliseconds = 4 * 60 * 60 * 1000;
      const loginTime = parseInt(loginTimeStamp, 10);

      if (!isNaN(loginTime) && currentTime - loginTime < oneDayInMilliseconds) {
        setIsLoggedIn(true);
      } else if (isNaN(loginTime)) {
        setIsLoggedIn(false);
      } else {
        alert("Your session expired, please log in again.");
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginTimeStamp');
        setIsLoggedIn(false);
      }
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    const currentTimeStamp = new Date().getTime();
    localStorage.setItem('isLoggedIn', 'true',);
    localStorage.setItem('loginTimeStamp', currentTimeStamp.toString());
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginTimeStamp');
  }

  return (
    <UserAdminProvider>
      <Router>
        <Routes>
          {isLoggedIn ? (
            <>
              {/* Route for Normal component */}
              <Route path="/normal" element={<Normal onLogout={handleLogout} />} />
              {/* Route for Special component */}
              <Route path="/special" element={<Special onLogout={handleLogout} />} />
              {/* Route for Amending price lane component */}
              <Route path="/AmendPriceLane" element={<AmendPriceLane onLogout={handleLogout} />} />
              {/* Route for AddUser component */}
              <Route path="/AddUser" element={<AddUser onLogout={handleLogout} />} />
              {/* Route for History Page component */}
              <Route path="/HistoryPage" element={<HistoryPage onLogout={handleLogout} />} />
              {/* Default route */}
              <Route path="/" element={<IntroSection onLogout={handleLogout} />} />
              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login onLogin={handleLogin} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </UserAdminProvider>
  );
}

export default App;
