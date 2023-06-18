import { React, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

export default function ChangeEmail() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex mx-[119px] pt-[24px] ">
      <div className="w-1/5 flex-shrink-0 flex flex-col justify-items-start items-center max-w-[20%] max-h-[100%] ">
        <div className="flex justify-center items-center w-[50px] h-[50px]">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-[50px] h-[50px] text-[#f6f7fb]"
          />
        </div>
        <div className="flex justify-center items-center mt-[15px] ">
          <h1 className="text-[#f6f7fb] text-xl font-bold">
            Đổi email của bạn
          </h1>
        </div>
      </div>
      <div className="w-4/5 bg-[#2e3856] rounded-lg p-[16px]">
        <h1 className="text-xl font-bold text-[#f6f7fb] pt-[16px] pb-[24px]">
          Cập nhật địa chỉ email của bạn
        </h1>
        <h1 className="text-[15px] text-[#fafafa] pb-[24px]  ">
          Địa chỉ email hiện tại của bạn là
        </h1>
        <hr className="border-black" />
        <div className="pt-[24px] text-[#fafafa]">
          <Input
            variant="flushed"
            focusBorderColor="orange"
            _focus={{ borderBottomWidth: '3px' }}
          />
          <h1 className="mt-[10px] text-[12px] text-[#fafafa]">EMAIL MỚI</h1>
        </div>
        <div className="text-[#fafafa]">
          <Input
            variant="flushed"
            type="password"
            focusBorderColor="orange"
            name="password"
            id="password"
            _focus={{ borderBottomWidth: '3px' }}
          />

          <h1 className="mt-[13px] text-[12px] text-[#fafafa]">
            MẬT KHẨU QUIZLET
          </h1>
        </div>
        <div className="py-[24px]">
          <Button colorScheme="teal" size="md">
            Gửi
          </Button>
        </div>
        <h1 className="text-[15px] text-[#fafafa]">
          Nếu bạn quên mật khẩu, bạn có thể{" "}
          <Link href="#" className="text-[#99e6e6] hover:text-[orange]">
            cài đặt lại mật khẩu.
          </Link>
        </h1>
      </div>
    </div>
  );
}
