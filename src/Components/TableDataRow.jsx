import moment from "moment";
import StatusComponent from "./StatusComponent";
import React, { useEffect, useState } from "react";
import { useMyContext } from "./Context/ContextProvider";

function TableDataRow({ SL, $id, memberName, startDate, endDate, plan }) {
  const { showModal, setShowModal, setEditingData } = useMyContext();

  const formattedStartDate = moment(startDate).format("ll");
  const formattedEndDate = moment(endDate).format("ll");
  const [remDays, setRemDays] = useState(null);

  // function to calculate remaining days
  function calcRemDays() {
    const today = moment();
    const end = moment(endDate);
    const diff = end.endOf("day").diff(today, "days");

    // if diff<0, then return 0 or else return diff value
    setRemDays(diff < 0 ? 0 : diff);
  }

  useEffect(() => {
    calcRemDays();
  }, []);

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

      <button
        className="absolute right-1 top-1 border"
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
        edit
      </button>
    </div>
  );
}

export default TableDataRow;
