import React from "react";
import FormRow from "./reUsables/FormRow";
import { IoClose } from "react-icons/io5";

function Modal({ setShowModal, handleNewMemberForm, handleAddNewMember }) {
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
          }}
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-semibold text-center mt-5 mb-8">
          Add new Member!
        </h2>

        {/* SL */}
        <FormRow
          name={"sl"}
          label={"SL"}
          type={"number"}
          handleFormData={handleNewMemberForm}
        />

        {/* NAME */}
        <FormRow
          name={"name"}
          label={"Enter Name"}
          type={"text"}
          handleFormData={handleNewMemberForm}
        />

        {/* PLAN TYPE */}
        <FormRow
          name={"plan"}
          label={"Plan Type"}
          type={"text"}
          handleFormData={handleNewMemberForm}
        />

        {/* START DATE */}
        <FormRow
          name={"startDate"}
          label={"Start Date"}
          type={"date"}
          handleFormData={handleNewMemberForm}
        />

        {/* END DATE */}
        <FormRow
          name={"endDate"}
          label={"End Date"}
          type={"date"}
          handleFormData={handleNewMemberForm}
        />

        <div className="w-full text-center">
          <button
            className="border bg-[#0B9FF4] w-[50%] py-1 rounded-lg shadow-lg capitalize text-white"
            onClick={handleAddNewMember}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
