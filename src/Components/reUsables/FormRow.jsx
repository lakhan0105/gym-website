import React from "react";

function FormRow({ name, type, label, handleFormData, formValue }) {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={name} className="mb-1 capitalize">
        {label || name}
      </label>

      <input
        name={name}
        type={type}
        className="rounded p-1 text-black text-sm"
        onChange={handleFormData}
        value={formValue}
      />
    </div>
  );
}

export default FormRow;
