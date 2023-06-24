import React from "react";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Box,
} from "@chakra-ui/react";

export default function Parameter() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Box>
            <div>
              <h1 className="flex justify-center items-center rounded-[10px]  hover:cursor-pointer hover:bg-[#2e3856] h-[50px] w-[200px]">
                Thông số của bạn
              </h1>
            </div>
          </Box>
        </PopoverTrigger>
        <PopoverContent
          bg="#0a092d"
          color="#f6f7fb"
          borderColor="#282e3e"
          width="250px"
          borderRadius="15px"
        >
          <PopoverArrow />
          <PopoverBody fontSize="md">
            <div className="flex flex-col ">
              <div className="flex justify-start items-center w-full h-[40px] pl-[5px] hover:cursor-pointer hover:bg-[#2e3856]">
                <Link href="#"> Thứ tự gốc</Link>
              </div>
              <div className="flex justify-start items-center w-full h-[40px] pl-[5px] hover:cursor-pointer hover:bg-[#2e3856]">
                <Link href="#"> Bảng chữ cái</Link>
              </div>
              <div className="flex justify-start items-center w-full h-[40px] pl-[5px] hover:cursor-pointer hover:bg-[#2e3856]">
                <Link href="#"> Thông số của bạn</Link>
              </div>
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}
