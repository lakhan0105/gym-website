import React from "react";
import { useMyContext } from "../Context/ContextProvider";

function ProtectedRoute({ children }) {
  const { currUser, loading } = useMyContext();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return currUser ? <>{children}</> : null;
}

export default ProtectedRoute;
