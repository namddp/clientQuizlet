import React from "react";
import Image from "next/image";
import Exercisess from "./Exercisess";
import Directory from "./Directory";
import CreateClass from "./CreateClass";
import JoinClass from "./JoinClass";
import { useSelector, useDispatch } from "react-redux";

export default function ProfileForm() {
  const [activeTab, setActiveTab] = React.useState("");
  const [showTab, setShowTab] = React.useState(false);

  const user = useSelector((state) => state.auth.user);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setShowTab(true);
  };

  return (
    <div className="text-[#f6f7fb] pt-[32px] px-[10%]">
      <div className="my-[24px] flex items-center ">
        <div className="mr-[24px] flex justify-center items-center">
          <Image
            src="https://lh3.googleusercontent.com/a/AAcHTtc55tAZl9FmOGCnIgJdk8GbHAxg-eDpnKYcSILYDg=s96-c?sz=46"
            alt="pic"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[25px] mr-[4px]">{user?.username}</h1>
            <div className="bg-[#d9dde8] w-[70px] h-[20px] rounded-[10px] flex justify-center items-center">
                <h1 className="text-[12px] text-[#2e3856] font-semibold mx-5">
                  {user?.accountType}
                </h1>
            </div>
          </div>
          <h1 className="font-bold text-[20px] text-[#939bb4] ml-5">{user?.email}</h1>
        </div>
      </div>
      <div className="flex justify-start items-center font-semibold h-[40px] text-[#939bb4] border-b-[2px] border-[#2e3856]">
        <div
          className={`h-[40px] flex items-center hover:cursor-pointer hover:text-[#7583ff] hover:border-b-[1px] hover:border-[#7583ff] ${
            activeTab === "Học phần"
              ? "text-[#edeff4] border-b-[1px] border-[#edeff4]"
              : ""
          }`}
          onClick={() => handleTabClick("Học phần")}
        >
          <h1>Học phần</h1>
        </div>
        <div
          className={`mx-[32px] h-[40px] flex items-center hover:cursor-pointer hover:text-[#7583ff] hover:border-b-[1px] hover:border-[#7583ff] ${
            activeTab === "Thư mục"
              ? "text-[#edeff4] border-b-[1px] border-[#edeff4]"
              : ""
          }`}
          onClick={() => handleTabClick("Thư mục")}
        >
          <h1>Thư mục</h1>
        </div>
        <div
          className={`h-[40px] flex items-center hover:cursor-pointer hover:text-[#7583ff] hover:border-b-[1px] hover:border-[#7583ff] ${
            activeTab === "Lớp học"
              ? "text-[#edeff4] border-b-[1px] border-[#edeff4]"
              : ""
          }`}
          onClick={() => handleTabClick("Lớp học")}
        >
          <h1>Lớp học</h1>
        </div>
      </div>

      {showTab && (
        <div>
          {activeTab === "Học phần" && (
            <div>
              <Exercisess />
            </div>
          )}
          {activeTab === "Thư mục" && (
            <div>
              <Directory />
            </div>
          )}
          {activeTab === "Lớp học" && (
            <div>
              {user?.accountType === "teacher" && <CreateClass />}
              {user?.accountType === "student" && <JoinClass />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
