import React, { useState } from "react";

const ToggleSwitch = ({ setIsYearly }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    setIsYearly(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer ">
      <div className="relative group">
        <input
          type="checkbox"
          className="sr-only hover:bg-[#10D5C2]"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="block group-hover:bg-[#10D5C2] bg-[#CDD7EE] w-10 h-6 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
            isChecked ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
