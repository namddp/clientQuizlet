import React from "react";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";

const avatarimgs = [
  {
    src: "https://lh3.googleusercontent.com/a/AAcHTtc55tAZl9FmOGCnIgJdk8GbHAxg-eDpnKYcSILYDg=s96-c?sz=46",
  },
  {
    src: "https://lh3.googleusercontent.com/a/AAcHTtc55tAZl9FmOGCnIgJdk8GbHAxg-eDpnKYcSILYDg=s96-c?sz=46",
  },
  {
    src: "https://lh3.googleusercontent.com/a/AAcHTtc55tAZl9FmOGCnIgJdk8GbHAxg-eDpnKYcSILYDg=s96-c?sz=46",
  },
];

export default function AvatarSettings() {
  return (
    <div className="flex mx-[119px] pt-[24px] ">
      <div className="w-1/5 flex-shrink-0 flex flex-col justify-items-start items-center max-w-[20%] max-h-[100%] ">
        <div className="flex justify-center items-center ">
          <Image
            src="https://lh3.googleusercontent.com/a/AAcHTtc55tAZl9FmOGCnIgJdk8GbHAxg-eDpnKYcSILYDg=s96-c?sz=46"
            alt="pic"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center items-center mt-[15px] ">
          <h1 className="text-[#f6f7fb] text-xl font-bold">Ảnh hồ sơ</h1>
        </div>
      </div>
      <div className="w-4/5 bg-[#2e3856] rounded-lg p-[16px]">
        <h1 className="text-xl font-bold text-[#f6f7fb] pt-[16px] pb-[24px]">
          Chọn ảnh hồ sơ của bạn
        </h1>
        <div className="flex">
          {avatarimgs.map((item, idx) => {
            return (
              <div
                key={idx}
                className=" w-[46px] h-[46px] rounded-full overflow-hidden mr-[8px] block hover:cursor-pointer border-[1px] border-black hover:border-[#99a1e6]  "
              >
                <Image
                  src={item.src}
                  alt={`Avatar ${idx}`}
                  width={50}
                  height={50}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center pb-[16px] ">
          <span className="flex justify-center items-center bg-[#1a1d28]  text-[#bfbfbf] p-[8px] w-[52px] h-[26px] ">
            hoặc
          </span>
        </div>
        <div className="pb-[14px]">
          <div className="flex justify-center items-center py-[8px]">
            <Button colorScheme="teal" size="md">
              Tải lên ảnh riêng của bạn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
