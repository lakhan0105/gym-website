import { Databases } from "appwrite";
import React, { useEffect, useState } from "react";
import { useMyContext } from "./Context/ContextProvider";
import TableDataRow from "./TableDataRow";

function TableDataComponent({ handleAddNewMember }) {
  //   const [loadingState, setloadingState] = useState(true);
  const { getAllMembers, loadingState, allMembersData } = useMyContext();

  useEffect(() => {
    getAllMembers();
  }, []);

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
