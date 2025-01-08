import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context with a default value
const UserAdminContext = createContext();

// Create a provider component
export const UserAdminProvider = ({ children }) => {
  //Read user admin value from local storage
  const storedUserAdmin = localStorage.getItem('userAdmin');

  // Default admin value based on storage
  const [userAdmin, setUserAdmin] = useState(storedUserAdmin ? JSON.parse(storedUserAdmin) : 0);

  // Update localStorage whenever userAdmin changes
  useEffect(() => {
    localStorage.setItem('userAdmin', JSON.stringify(userAdmin));
  }, [userAdmin]);

  return (
    <UserAdminContext.Provider value={{ userAdmin, setUserAdmin }}>
      {children}
    </UserAdminContext.Provider>
  );
};

// Custom hook to use the context
export const useUserAdmin = () => {
  const context = useContext(UserAdminContext);

  if (!context) {
    throw new Error('useUserAdmin must be used within a UserAdminProvider');
  }

  return context;
};
