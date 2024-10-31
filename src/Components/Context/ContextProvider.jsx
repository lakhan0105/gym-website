import React, { createContext, useContext, useEffect, useState } from "react";
const appwriteEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const appwriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
import { Client, Account } from "appwrite";
import { addLS, getLS } from "../utils/localstorage";

// create a context
const myContext = createContext();

// appwrite client setup
const client = new Client()
  .setEndpoint(appwriteEndpoint) // Your API Endpoint
  .setProject(appwriteProjectId); // Your project ID

function ContextProvider({ children }) {
  const [currUser, setCurrUser] = useState(getLS("currUser"));

  // add the user to the local storage
  useEffect(() => {
    if (currUser) {
      console.log(currUser);
      addLS("currUser", currUser);
    }
  }, [currUser]);

  return (
    <myContext.Provider value={{ currUser, setCurrUser, client }}>
      {children}
    </myContext.Provider>
  );
}

// usecontext
function useMyContext() {
  return useContext(myContext);
}

export default ContextProvider;
export { useMyContext };
