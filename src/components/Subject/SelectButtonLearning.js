import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectButtonLearning({ isSelected, handleSelect }) {
  return (
    <div className="flex">
      {!isSelected && (
        <div
          className="w-[80px] h-[40px] border-[1px] border-[#2e3856] rounded-[5px] bg-[#282e3e] flex justify-center items-center"
          onClick={handleSelect}
        >
          <FontAwesomeIcon icon={faStar} className="text-[10px]" />
          <h1 className="ml-[8px] font-bold text-[15px] text-[#7dd] hover:cursor-pointer hover:text-[#ff983a]">
            Chọn
          </h1>
        </div>
      )}

      {isSelected && (
        <div
          className="w-[100px] h-[40px] border-[1px] border-[#2e3856] rounded-[5px] bg-[#ffcd1f] flex justify-center items-center"
          onClick={handleSelect}
        >
          <FontAwesomeIcon icon={faStar} className="text-[10px]" />
          <h1 className="ml-[8px] font-semibold text-[15px] text-[#1a1d28] hover:cursor-pointer">
            Bỏ Chọn
          </h1>
        </div>
      )}
    </div>
  );
}
