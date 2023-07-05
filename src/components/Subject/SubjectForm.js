import ButtonShare from "./ButtonShare";
import Image from "next/image";
import Parameter from "./Parameter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faSdCard,
  faLinesLeaning,
  faCheckDouble,
  faHardDrive,
  faCopy,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import RateModalButton from "@/components/Subject/RateModalButton";

import LearningPage from "./LearningItem";

export default function SubjectForm() {
  return (
    <div className="pt-[40px] pb-[190px]">
      <div className="mx-[143px]">
        <div className="mx-[40px]">
          <div className=" flex justify-between items-center pb-[16px]">
            <h1 className="font-bold text-[32px]">NGUYÊN LÝ KẾ TOÁN</h1>
            <ButtonShare />
          </div>
          <div className="flex font-bold pb-[32px]">
            <div className="flex items-center mr-[50px]">
              <FontAwesomeIcon
                icon={faUserGroup}
                className="text-[20px] mr-[8px]"
              />
              <h1>10 người học gần đây</h1>
            </div>
            <div>
              <RateModalButton />
            </div>
          </div>
          <div className="flex justify-between ỉtems-center font-bold ">
            <div className="flex justify-center items-center h-[50px] w-[250px] rounded-[8px] bg-[#2e3856] hover:cursor-pointer hover:border-b-[5px] hover:border-b-[#7583ff] ">
              <FontAwesomeIcon
                icon={faSdCard}
                className="text-[25px] mr-[10px]"
              />
              <h1>Thẻ nghi nhớ</h1>
            </div>
            <div className="flex justify-center items-center h-[50px] w-[250px] rounded-[8px] bg-[#2e3856] hover:cursor-pointer hover:border-b-[5px] hover:border-b-[#7583ff]">
              <FontAwesomeIcon
                icon={faLinesLeaning}
                className="text-[25px] mr-[10px]"
              />
              <h1>Học</h1>
            </div>
            <div className="flex justify-center items-center h-[50px] w-[250px] rounded-[8px] bg-[#2e3856] hover:cursor-pointer hover:border-b-[5px] hover:border-b-[#7583ff]">
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="text-[25px] mr-[10px]"
              />
              <h1>Kiểm tra</h1>
            </div>
            <div className="flex justify-center items-center h-[50px] w-[250px] rounded-[8px] bg-[#2e3856] hover:cursor-pointer hover:border-b-[5px] hover:border-b-[#7583ff] ">
              <FontAwesomeIcon
                icon={faHardDrive}
                className="text-[25px] mr-[10px]"
              />
              <h1>Ghép thẻ</h1>
            </div>
          </div>
          <div className="flex justify-between items-center pt-[40px] pb-[24px]">
            <div className="flex ">
              <Image
                src="https://lh3.googleusercontent.com/a/AAcHTtc55tAZl9FmOGCnIgJdk8GbHAxg-eDpnKYcSILYDg=s96-c?sz=46"
                alt="pic"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-[16px]">
                <span className="text-[10px] pb-[4px]">Tạo bởi</span>
                <h1 calssName="text-[15px] font-bold">tmh</h1>
              </div>
            </div>
            <div className="flex text-[20px] text-[#f6f7fb]">
              <button className=" flex mr-[8px] w-[50px] h-[50px] border-[1px] border-[#f6f7fb] items-center justify-center rounded-[10px] hover:cursor-pointer hover:bg-[#2e3856]">
                <FontAwesomeIcon icon={faCopy} />
              </button>
              <button className=" flex w-[50px] h-[50px] border-[1px] border-[#f6f7fb]  items-center justify-center rounded-[10px] hover:cursor-pointer hover:bg-[#2e3856]">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
          </div>
          <div className="mb-[40px]">
            <span className="text-[20px]">môn học</span>
          </div>
          <div className="flex justify-between items-center text-[20px] mb-[10px]  font-bold">
            <h1>Thuật ngữ trong học phần này </h1>
            <div>
              <Parameter />
            </div>
          </div>
          <div>
            <LearningPage />
          </div>
        </div>
      </div>
    </div>
  );
}
