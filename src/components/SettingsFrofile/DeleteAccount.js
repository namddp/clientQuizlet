import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chakra-ui/react";

export default function DeleteAccount() {
  return (
    <div className="flex mx-[119px] pt-[24px] ">
      <div className="w-1/5 flex-shrink-0 flex flex-col justify-items-start items-center max-w-[20%] max-h-[100%] ">
        <div className="flex justify-center items-center w-[50px] h-[50px]">
          <FontAwesomeIcon
            icon={faUserXmark}
            className="w-[50px] h-[50px] text-[#f6f7fb]"
          />
        </div>
        <div className="flex justify-center items-center mt-[15px] ">
          <h1 className="text-[#f6f7fb] text-xl font-bold">Xóa tài khoản</h1>
        </div>
      </div>
      <div className="w-4/5 bg-[#2e3856] rounded-lg ">
        <div className="p-[16px]">
          <h1 className="text-xl font-bold text-[#f6f7fb] py-[4px]  ">
            Xóa vĩnh viễn
          </h1>
          <div>
            <h1 className="pt-[12px] pb-[8px]  text-[#fafafa] text-[15px] py-[24px]">
              Hãy cẩn thận - nút này sẽ xóa toàn bộ dữ liệu và không thể hoàn
              tác.
            </h1>
            <div className="  my-[10px] ">
              <Button colorScheme="orange" variant="solid">
                Xóa tài khoản
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
