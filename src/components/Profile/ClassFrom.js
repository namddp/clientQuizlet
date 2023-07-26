import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function ClassFrom() {
  const [activeTab, setActiveTab] = React.useState("");
  const [showTab, setShowTab] = React.useState(false);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setShowTab(true);
  };
  return (
    <div className="text-[#f6f7fb] px-[130px] pt-[40px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <FontAwesomeIcon icon={faUserGroup} className="text-[40px]" />
          <h1 className="text-[40px] font-bold ml-[10px]">name</h1>
        </div>
        <div className="flex items-center ">
          <div className="border-[1px] rounded-[50px] w-[40px] h-[40px] flex items-center justify-center hover:cursor-pointer hover:bg-[#2e3856]">
            <FontAwesomeIcon icon={faPlus} className="text-[15px] " />
          </div>
          <div className="border-[1px] rounded-[50px] w-[40px] h-[40px] flex items-center justify-center ml-[10px] hover:cursor-pointer hover:bg-[#2e3856]">
            <FontAwesomeIcon icon={faUserPlus} className="text-[15px] " />
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center mt-[20px]  font-semibold h-[40px] text-[#939bb4] border-b-[2px] border-[#2e3856]">
        <div
          className={`h-[40px] flex items-center hover:cursor-pointer hover:text-[#7583ff] hover:border-b-[1px] hover:border-[#7583ff] ${
            activeTab === "Các Học phần"
              ? "text-[#edeff4] border-b-[1px] border-[#edeff4]"
              : ""
          }`}
          onClick={() => handleTabClick("Các Học phần")}
        >
          <h1>Các Học phần</h1>
        </div>
        <div
          className={`mx-[32px] h-[40px] flex items-center hover:cursor-pointer hover:text-[#7583ff] hover:border-b-[1px] hover:border-[#7583ff] ${
            activeTab === "Thành Viên"
              ? "text-[#edeff4] border-b-[1px] border-[#edeff4]"
              : ""
          }`}
          onClick={() => handleTabClick("Thành Viên")}
        >
          <h1>Thành Viên</h1>
        </div>
      </div>
    </div>
  );
}
