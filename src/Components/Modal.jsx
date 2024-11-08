import React from "react";
import FormRow from "./reUsables/FormRow";
import { IoClose } from "react-icons/io5";
import CustomForm from "./reUsables/CustomForm";
import { useMyContext } from "./Context/ContextProvider";

function Modal({ handleNewMemberForm, handleAddNewMember }) {
  const {
    setShowModal,
    editingData,
    handleEditingFormData,
    editMember,
    getAllMembers,
  } = useMyContext();

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10 overflow-hidden">
      {/* background overlay */}
      <div className="bg-black/20 backdrop-blur-sm absolute top-0 bottom-0 left-0 right-0 z-20"></div>

      {/* form container */}
      <div className="relative rounded-lg shadow-lg w-[450px] min-h-[300px] py-5 px-12 z-30 bg-[#FAF0E6]">
        {/* close button (rel to form container) */}
        <button
          className="absolute right-2 top-2 text-3xl"
          onClick={() => {
            setShowModal(false);
            getAllMembers();
          }}
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-semibold text-center mt-5 mb-8">
          {editingData ? "Editing the member details!" : "Add new Member!"}
        </h2>

        {/* SL */}

        {editingData ? (
          <CustomForm
            handleFormData={handleEditingFormData}
            editingData={editingData}
            submitFunction={editMember}
          />
        ) : (
          <CustomForm
            handleFormData={handleNewMemberForm}
            submitFunction={handleAddNewMember}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
