import React from "react";
import { Button } from "@chakra-ui/react";
import GoogleLoginButton from "./api/auth/GoogleLoginButton";
import HiOutlineMinus from "react-icons/hi";
import Email from "@/components/Register/Email";
import User from "@/components/Register/User";
import Password from "@/components/Register/Password";
import Privacity from "@/components/Register/Privacy";
import BirthOfDate from "@/components/Register/BirthOfDate";
const RegistrationPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setTermsError(
        "PLEASE ACCEPT THE QUIZLET'S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE."
      );
      return;
    }
    console.log(formData);
  };

  return (
    <div className="w-full h-full bg-red flex">
      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div>
            <GoogleLoginButton />
          </div>
          <div className="relative w-full ml-[10vh] mt-8 mb-8 ">
            <hr className=" w-full" />
            <p className=" absolute right-[40%] bottom-[0] bg-white text-[#939bb4] text-sm ">
              HOẶC EMAIL
            </p>
          </div>
          <Email />
          <User />
          <Password />
          <BirthOfDate />
          <div className="mb-4">
            <Privacity />
          </div>
          <div className="flex items-center justify-between">
            <Button colorScheme="blue" type="submit">
              Register
            </Button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
