import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import {
  Radio,
  RadioGroup,
  Stack,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function Account() {
  return (
    <div className="flex mx-[119px] pt-[24px] ">
      <div className="w-1/5 flex-shrink-0 flex flex-col justify-items-start items-center max-w-[20%] max-h-[100%] ">
        <div className="flex justify-center items-center w-[50px] h-[50px]">
          <FontAwesomeIcon
            icon={faBookOpenReader}
            className="w-[50px] h-[50px] text-[#f6f7fb]"
          />
        </div>
        <div className="flex justify-center items-center mt-[15px] ">
          <h1 className="text-[#f6f7fb] text-xl font-bold">Loại tài khoản</h1>
        </div>
      </div>
      <div className="w-4/5 bg-[#2e3856] rounded-lg">
        <div className="p-[16px]">
          <div className="border border-[#d9dde8]">
            <h5 className="p-[10px] text-[#d9dde8] text-[13px]">
              LOẠI TÀI KHOẢN ĐÃ ĐƯỢC THAY ĐỔI.
            </h5>
          </div>

          <h1 className="text-xl font-bold text-[#f6f7fb] pt-[16px] pb-[24px]">
            Tài khoản Giáo viên hoặc Học sinh
          </h1>
          <div>
            <h5 className="text-[#fafafa] text-[15px] font-[bold] pb-[16px]">
              Chọn loại tài khoản của bạn:
            </h5>
          </div>
          <div className="pb-[36px]">
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="column">
                <Radio colorScheme="orange" value="1" size="lg">
                  <span className="text-[#f6f7fb]">Giáo viên</span>
                </Radio>
                <Radio colorScheme="orange" value="2" size="lg">
                  <span className="text-[#f6f7fb]">Học sinh</span>
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div>
            <Button colorScheme="teal" variant="solid" size="md">
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
