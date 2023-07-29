import React from "react";
import Link from "next/link";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Exercises() {
  const Work = [
    { id: 1, test: "hhsshs", LINK: "#" },
    { id: 2, test: "hhssfdhs", LINK: "#" },
  ];

  return (
    <div>
      <div className="w-[50%] pt-[44px]">
        <InputGroup>
          <Input
            placeholder="tìm kiếm học phần"
            _placeholder={{ opacity: 1, color: "white.500" }}
            bgColor="#2e3856"
            pr="4.5rem"
          />
          <InputRightElement width="4.5rem">
            <SearchIcon color="white" />
          </InputRightElement>
        </InputGroup>
      </div>
      <div className="flex justify-start mt-[32px]">
        <h1 className="text-[#f6f7fb] h-[40px] w-[90px] flex items-center font-semibold">
          Tiến trình
        </h1>
        <div className="border-b h-[10px] border-[#2e3856] mt-[10px] w-[100%]"></div>
      </div>

      <div className="mt-[32px]">
        {Work.map((item) => (
          <div
            key={item.id}
            className="h-[60px] flex items-center justify-start px-[15px] rounded-[5px] mt-[10px] bg-[#2e3856] font-semibold text-[20px]"
          >
            <Link href={item.LINK}>
              <p>{item.test}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
