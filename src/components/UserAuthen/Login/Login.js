import { React } from "react";
import OptionsRegis from "../Register/OptionsRegis";
import { Button, Input } from "@chakra-ui/react";
import Link from "next/link";
const Login = () => {
  return (
    <div className="w-full h-full bg-red flex">
      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-md">
          {/* <div>
          <GoogleLoginButton />
        </div>
        <div className="relative w-full ml-[10vh] mt-8 mb-8">
          <hr className="w-full" />
          <p className="absolute right-[40%] bottom-[0] bg-white text-[#939bb4] text-sm">
            HOẶC EMAIL
          </p>
        </div> */}
          <OptionsRegis />
          <div className="mb-4">
            <Input
              focusBorderColor="#ffcd1f"
              width={"80vh"}
              placeholder="user@quizlet.com"
              type="email"
              name="email"
              id="email"
              required
              variant="flushed"
              placeholder="Nhập Email hoặc tên người dùng của bạn"
            />
            <p className="text-sm mt-2 text-[#939bb4] font-semibold ">EMAIL</p>
          </div>
          <div>
            <Input
              focusBorderColor="#ffcd1f"
              width={"80vh"}
              placeholder="user@quizlet.com"
              type="password"
              name="password"
              id="password"
              required
              variant="flushed"
              placeholder="Nhập mật khẩu"
            />
            <div className="flex justify-between mt-2 w-[80vh]">
              <p className="text-sm text-[#939bb4] font-semibold ">MẬT KHẨU</p>
              <Link
                className=" text-sm text-[#3ccfcf] font-semibold hover:text-yellow-300 "
                href={""}
              >
                Bạn quên rồi à?
              </Link>
            </div>
          </div>
          <div className="text-center text-sm p-3 w-[80vh]">
            Bằng cách nhấp Đăng nhập, bạn chấp nhận Điều khoản dịch vụ Và Chính
            sách quyền riêng tư của Quizlet
          </div>
          <div className="">
            <Button
              backgroundColor={"#3ccfcf"}
              textColor={"#ffffff"}
              type="submit"
              width={"80vh"}
              // disabled={!isFormValid}
            >
              Đăng Nhập
            </Button>
            <div>
              <p className=" mt-2 text-sm text-[#939bb4] ">
                Hãy nhớ đăng xuất trên thiết bị dùng chung
              </p>
            </div>
            <div className=" flex justify-center mt-4 border-solid border-2 border-[#d9dde8]-300 font-semibold w-[80vh] p-2">
              <p className="text-[#586380]">Mới sử dụng Quizlet?</p>
              <span>
                <Link
                  href="/login"
                  className="text-[#3ccfcf] ml-1 mr-1 hover:text-yellow-300"
                >
                  Tạo tài khoản
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
