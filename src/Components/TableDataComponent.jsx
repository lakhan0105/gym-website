import React, { useEffect } from "react";
import { useMyContext } from "./Context/ContextProvider";
import TableDataRow from "./TableDataRow";

function TableDataComponent() {
  const { getAllMembers, loadingState, allMembersData } = useMyContext();

  useEffect(() => {
    getAllMembers();
  }, []);

  // logic to display loading text
  if (loadingState) {
    return <h2 className="text-center text-xl">Loading...</h2>;
  }

  if (allMembersData.length === 0) {
    return <h2 className="text-center text-xl">Sorry, no user found ;(</h2>;
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
