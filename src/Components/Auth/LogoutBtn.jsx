import React, { useEffect } from "react";
import { useMyContext } from "../Context/ContextProvider";
import { addLS } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Account } from "appwrite";

function LogoutBtn() {
  const { currUser, setCurrUser, client } = useMyContext();
  const navigate = useNavigate();

  // handleLogout
  async function handleLogout() {
    const account = new Account(client);

    try {
      const result = await account.deleteSessions();
      if (result) {
        setCurrUser(null);
        localStorage.removeItem("currUser");
        setTimeout(() => {
          navigate("/");
          toast.info("logout successfull");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("unable to logout!");
    }
  }

  if (currUser) {
    return (
      <button
        className="shadow-lg text-white capitalize bg-orange-800 hover:bg-orange-700/80 px-3 py-0.5 text-base rounded"
        onClick={handleLogout}
      >
        logout
      </button>
    );
  }
}

export default LogoutBtn;
