import React from "react";
import "./Sidebar.scss";
import MoneyTab from "components/MoneyTab/MoneyTab";

function Sidebar() {
  let money = [
    100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
    250000, 500000, 1000000,
  ];
  return (
    <>
      <div className="sidebar">
        {money.map((m, i) => (
          <MoneyTab value={m} key={i} index={i} />
        ))}
      </div>
    </>
  );
}

export default Sidebar;
