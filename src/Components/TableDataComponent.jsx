import { Databases } from "appwrite";
import React, { useEffect, useState } from "react";
import { useMyContext } from "./Context/ContextProvider";
import TableDataRow from "./TableDataRow";

function TableDataComponent({ handleAddNewMember }) {
  const [allMembersData, setAllMembersData] = useState([]);
  const [loadingState, setloadingState] = useState(true);
  const {
    client,
    appwriteMembersDataCollectionId,
    appwriteMsFitnessDatabaseId,
  } = useMyContext();

  // function to all the members
  const getAllMembers = async () => {
    const databases = new Databases(client);

    try {
      const result = await databases.listDocuments(
        appwriteMsFitnessDatabaseId, // databaseId
        appwriteMembersDataCollectionId // collectionId
      );
      setAllMembersData(result.documents);
    } catch (error) {
      console.log(error);
      toast.error("error in getAllmembers");
    } finally {
      setloadingState(false);
    }
  };

  useEffect(() => {
    getAllMembers();
  }, [handleAddNewMember]);

  // logic to display loading text
  if (loadingState) {
    return <h2 className="text-center text-xl">Loading...</h2>;
  }

  return (
    <>
      {allMembersData?.map((item) => {
        return <TableDataRow key={item.$id} {...item} />;
      })}
    </>
  );
}

export default TableDataComponent;
