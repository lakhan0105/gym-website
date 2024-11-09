import React, { createContext, useContext, useEffect, useState } from "react";
const appwriteEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const appwriteProjectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const appwriteMsFitnessDatabaseId = import.meta.env.VITE_MS_FITNESS_DATABASE_ID;
const appwriteMembersDataCollectionId = import.meta.env
  .VITE_MEMBERS_DATA_COLLECTION_ID;

import { Client, Account, Databases, Query } from "appwrite";
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
  const [allMembersData, setAllMembersData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [searchText, setSearchText] = useState("");

  // function to handleEditingFormData
  function handleEditingFormData(e) {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setEditingData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  // function to edit the member details
  const editMember = async () => {
    const { id, name, plan, sl, startDate, endDate } = editingData;

    try {
      const databases = new Databases(client);

      const result = await databases.updateDocument(
        appwriteMsFitnessDatabaseId, // databaseId
        appwriteMembersDataCollectionId, // collectionId
        id, // documentId
        { memberName: name, SL: sl, plan, startDate, endDate } // data (optional)
      );

      setShowModal(false);
      toast.success("edited successfully!");
    } catch (error) {
      console.log(error);
      toast.error("error in editMember");
    }
  };

  // check if the user is present or not
  useEffect(() => {
    setSearchText(""); // reset the searchText on page load
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
      const accDetails = await account.get();
      setCurrUser(accDetails);
    } catch (error) {
      setCurrUser(null);
      console.log("user not loggedin or session time out! Please login");
      console.log(error);
    }
  };

  // function to getAllMembers
  const getAllMembers = async () => {
    const databases = new Databases(client);

    try {
      const result = await databases.listDocuments(
        appwriteMsFitnessDatabaseId, // databaseId
        appwriteMembersDataCollectionId // collectionId
      );
      setLoadingState(true);
      setAllMembersData(result.documents);
    } catch (error) {
      console.log(error);
      toast.error("error in getAllmembers");
    } finally {
      setLoadingState(false);
    }
  };

  // function to search the members
  const searchMembers = async () => {
    let searchResult = [];

    try {
      const databases = new Databases(client);
      if (searchText.length > 0) {
        // search by memberName
        const nameSearchResult = await databases.listDocuments(
          appwriteMsFitnessDatabaseId, // databaseId
          appwriteMembersDataCollectionId, // collectionId
          [Query.startsWith("memberName", [searchText])] // queries
        );
        searchResult = [...nameSearchResult.documents];

        // search by SL value (SL is stored as string in appwrite)
        const SlSearchResult = await databases.listDocuments(
          appwriteMsFitnessDatabaseId, // databaseId
          appwriteMembersDataCollectionId, // collectionId
          [Query.startsWith("SL", [searchText])] // queries
        );

        // check if the 2nd result is already present in the searchResult, if not then add the 2nd result value
        // basically, comparing the docs id from SlSearchResult and searchResult docs id
        SlSearchResult.documents.forEach((item) => {
          if (!searchResult.find((doc) => doc.$id === item.$id)) {
            searchResult.push(item);
          }
        });

        setAllMembersData(searchResult);
        if (searchResult?.documents?.length === 0) {
          toast.error("user not found");
        }
      } else if (searchText === "") {
        getAllMembers();
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };

  return (
    <myContext.Provider
      value={{
        currUser,
        setCurrUser,
        loadingState,
        client,
        appwriteMsFitnessDatabaseId,
        appwriteMembersDataCollectionId,
        loginUser,
        showModal,
        setShowModal,
        editingData,
        setEditingData,
        handleEditingFormData,
        editMember,
        getAllMembers,
        allMembersData,
        searchText,
        setSearchText,
        searchMembers,
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
