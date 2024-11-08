import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";

function StatusComponent({ remDays }) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (remDays > 0) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [status]);

  return (
    <>
      {status ? (
        <p className="flex gap-2 items-center">
          <span className="text-lime-500">
            <FaCircleCheck />
          </span>
          <span className="text-base">Active</span>
        </p>
      ) : (
        <p className="flex gap-2 items-center">
          <span className="text-red-600">
            <FaRegCircleXmark />
          </span>
          <span className="text-base">Expired</span>
        </p>
      )}
    </>
  );
}

export default StatusComponent;
