import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { useMyContext } from "./Context/ContextProvider";
import Modal from "./Modal";
import { Databases, ID } from "appwrite";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import TableDataComponent from "./TableDataComponent";

function Dashboard() {
  const {
    client,
    appwriteMsFitnessDatabaseId,
    appwriteMembersDataCollectionId,
    showModal,
    setShowModal,
    setEditingData,
    searchText,
    setSearchText,
    searchMembers,
    getTotalMembersCount,
    totalMembersCount,
    setTotalMembersCount,
    updateTotalMembersCount,
  } = useMyContext();

  // state to manage the input details of the new member inputs
  const [newMemberFormData, setNewMemberFormData] = useState({
    sl: "",
    name: "",
    plan: "",
    startDate: "",
    endDate: "",
  });

  // handleNewMemberForm
  function handleNewMemberForm(e) {
    console.log("running handleNewMemberForm");

    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;

    setNewMemberFormData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  // handleAddNewMember
  async function handleAddNewMember() {
    const databases = new Databases(client);
    const { name, sl, plan, startDate, endDate } = newMemberFormData;

    try {
      const result = await databases.createDocument(
        appwriteMsFitnessDatabaseId, // databaseId
        appwriteMembersDataCollectionId, // collectionId
        uuidv4(), // documentId
        { memberName: name, SL: sl, plan, startDate, endDate } // data
      );

      if (result) {
        setShowModal(false);
        toast.success("member added successfully!");
        setNewMemberFormData({
          sl: "",
          name: "",
          plan: "",
          startDate: "",
          endDate: "",
        });

        setTotalMembersCount((prev) => {
          const newCount = prev + 1;
          updateTotalMembersCount({ TotalMembersCount: newCount });
          return newCount;
        });
      }
    } catch (error) {
      toast.error("error in creating a new document");
      console.log(error);
    }
  }

  useEffect(() => {
    getTotalMembersCount();
  }, []);

  return (
    <section className="relative w-full bg-[#F7F7F7] min-h-[calc(100vh-70px)] mt-[65px]">
      <div className="max-w-[1280px] m-auto pt-32">
        {/* container */}
        <div className="flex items-start gap-5">
          {/* (LEFT) */}
          <div>
            <div className=" bg-[#FFFFFF] rounded p-5 w-[230px] mt-14 text-center">
              <h2>Total members enrolled</h2>
              <h2 className="text-3xl">{totalMembersCount}</h2>
            </div>
          </div>

          {/* (RIGHT) member details container */}
          <div className="w-full">
            {/* Heading and Add member button */}
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-7">
                <h2 className="text-2xl font-semibold">All members</h2>

                {/* search container */}
                <div className="w-[250px] flex">
                  <input
                    className="py-1.5 px-2 w-full rounded-l outline-none"
                    type="text"
                    name=""
                    id=""
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                    placeholder="search by name or sl"
                  />
                  <input
                    type="submit"
                    value={"Search"}
                    onClick={searchMembers}
                    className="px-2 bg-[#0B9FF4] text-white text-sm rounded-r hover:cursor-pointer"
                  />
                </div>
              </div>

              <button
                className="px-3 py-2 flex items-center gap-2 bg-[#0B9FF4] text-white rounded text-sm"
                onClick={() => {
                  setShowModal(true);
                  setEditingData(null);
                  // reset the newMemberFormData
                  setNewMemberFormData({
                    sl: "",
                    name: "",
                    plan: "",
                    startDate: "",
                    endDate: "",
                  });
                }}
              >
                <span className="pb-0.5 text-lg">
                  <IoMdPersonAdd />
                </span>
                Add member
              </button>
            </div>

            {/* bottom (TABLE) */}
            <div className="w-full mt-5 px-5 bg-white rounded-lg shadow p-2 capitalize">
              <div className="grid grid-cols-7 pb-2 gap-5">
                <h2 className="grid-cell">SL no</h2>
                <h2 className="grid-cell">status</h2>
                <h2 className="grid-cell">Member Name</h2>
                <h2 className="grid-cell">Plan</h2>
                <h2 className="grid-cell">start date</h2>
                <h2 className="grid-cell">end date</h2>
                <h2 className="grid-cell">days left</h2>
              </div>

              <TableDataComponent />
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <Modal
          handleNewMemberForm={handleNewMemberForm}
          handleAddNewMember={handleAddNewMember}
        />
      )}
    </section>
  );
}

export default Dashboard;
