import React, { createContext, useContext, useEffect, useState } from "react";
const appwriteEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const appwriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const appwriteMsFitnessDatabaseId = import.meta.env.VITE_MS_FITNESS_DATABASE_ID;
const appwriteMembersDataCollectionId = import.meta.env
  .VITE_MEMBERS_DATA_COLLECTION_ID;

import { Client, Account } from "appwrite";
import { addLS, getLS } from "../utils/localstorage";
import { toast } from "react-toastify";

// create a context
const myContext = createContext();

// appwrite client setup
const client = new Client()
  .setEndpoint(appwriteEndpoint) // Your API Endpoint
  .setProject(appwriteProjectId); // Your project ID
const account = new Account(client);

function ContextProvider({ children }) {
  const [currUser, setCurrUser] = useState(getLS("currUser"));
  const [loading, setLoading] = useState(false);

  // check if the user is present or not
  useEffect(() => {
    checkUserStatus();
  }, []);

  async function loginUser(formData) {
    const { email, password } = formData;

    try {
      const result = await account.createEmailPasswordSession(
        email, // email
        password // password
      );

      const accDetails = await account.get();

      setCurrUser(accDetails);
    } catch (error) {
      console.log(error);
      toast.error("login failed!");
    }
  }

  const checkUserStatus = async () => {
    try {
      setLoading(true);
      const accDetails = await account.get();
      setCurrUser(accDetails);
    } catch (error) {
      setCurrUser(null);
      console.log("user not loggedin or session time out");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <myContext.Provider
      value={{
        currUser,
        setCurrUser,
        loading,
        client,
        appwriteMsFitnessDatabaseId,
        appwriteMembersDataCollectionId,
        loginUser,
      }}
    >
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
