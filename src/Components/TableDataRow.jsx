import moment from "moment";
import StatusComponent from "./StatusComponent";
import React, { useEffect, useState } from "react";
import { useMyContext } from "./Context/ContextProvider";
import { FaEdit } from "react-icons/fa";

function TableDataRow({ SL, $id, memberName, startDate, endDate, plan }) {
  const { showModal, setShowModal, setEditingData } = useMyContext();

  const formattedStartDate = moment(startDate).format("ll");
  const formattedEndDate = moment(endDate).format("ll");
  const [remDays, setRemDays] = useState(0);

  // function to calculate remaining days
  function calcRemDays() {
    const today = moment();
    const start = moment(startDate);
    const end = moment(endDate);

    // if start is in the future then start-end
    if (start.isAfter(today)) {
      const diff = end.diff(start, "days");
      setRemDays((prev) => {
        return diff < 0 ? 0 : diff;
      });
    } else {
      const diff = end.diff(today, "days");
      setRemDays((prev) => {
        return diff < 0 ? 0 : diff + 1;
      });
    }
  }

  useEffect(() => {
    calcRemDays();
  }, [startDate, endDate]);

  return (
    <div
      key={$id}
      className="relative grid grid-cols-7 text-left gap-5 border-t py-2 text-slate-500"
    >
      <p className="grid-cell">{SL}</p>
      <div className="grid-cell pt-0.5">
        <StatusComponent remDays={remDays} />
      </div>
      <p className="grid-cell">{memberName}</p>
      <p className="grid-cell">{plan}</p>

      <p className="grid-cell">{formattedStartDate}</p>
      <p className="grid-cell">{formattedEndDate}</p>
      <p className="grid-cell">
        {remDays} {remDays <= 1 ? "day" : "days"}
      </p>

      <div className="absolute right-1 top-2">
        <button
          className=" text-lg text-orange-400 hover:text-orange-600"
          onClick={() => {
            setShowModal(true);
            setEditingData({
              sl: SL,
              id: $id,
              name: memberName,
              startDate,
              endDate,
              plan,
            });
          }}
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
}

export default TableDataRow;
