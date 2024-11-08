import React from "react";
import FormRow from "./FormRow";

function CustomForm({ handleFormData, submitFunction, editingData }) {
  return (
    <>
      <FormRow
        name={"sl"}
        label={"SL"}
        type={"number"}
        handleFormData={handleFormData}
        formValue={editingData?.sl}
      />

      {/* NAME */}
      <FormRow
        name={"name"}
        label={"Enter Name"}
        type={"text"}
        handleFormData={handleFormData}
        formValue={editingData?.name}
      />

      {/* PLAN TYPE */}
      <FormRow
        name={"plan"}
        label={"Plan Type"}
        type={"text"}
        handleFormData={handleFormData}
        formValue={editingData?.plan}
      />

      {/* START DATE */}
      <FormRow
        name={"startDate"}
        label={"Start Date"}
        type={"date"}
        handleFormData={handleFormData}
        formValue={editingData?.startDate}
      />

      {/* END DATE */}
      <FormRow
        name={"endDate"}
        label={"End Date"}
        type={"date"}
        handleFormData={handleFormData}
        formValue={editingData?.endDate}
      />

      <div className="w-full text-center">
        <button
          className="border bg-[#0B9FF4] w-[50%] py-1 rounded-lg shadow-lg capitalize text-white"
          onClick={submitFunction}
        >
          submit
        </button>
      </div>
    </>
  );
}

export default CustomForm;
