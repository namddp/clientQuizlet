import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import GoogleLoginButton from "./api/auth/GoogleLoginButton";
import Email from "@/components/Register/Email";
import User from "@/components/Register/User";
import Password from "@/components/Register/Password";
import Privacity from "@/components/Register/Privacy";
import BirthOfDate from "@/components/Register/BirthOfDate";
import Link from "next/link";
const RegistrationPage = () => {
  const [formData, setFormData] = useState({});
  const [termsError, setTermsError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
    setIsFormValid(validateForm(newFormData));
  };

  const validateForm = (data) => {
    // Add your form validation logic here
    // Return true if the form is valid, otherwise return false
    // For example, check if all required fields are filled
    return (
      data.email &&
      data.user &&
      data.password &&
      data.birthOfDate &&
      data.termsAccepted
    );
  };

  return (
    <div className="w-full h-full bg-red flex">
      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div>
            <GoogleLoginButton />
          </div>
          <div className="relative w-full ml-[10vh] mt-8 mb-8">
            <hr className="w-full" />
            <p className="absolute right-[40%] bottom-[0] bg-white text-[#939bb4] text-sm">
              HOẶC EMAIL
            </p>
          </div>
          <Email onChange={handleFormChange} />
          <User onChange={handleFormChange} />
          <Password onChange={handleFormChange} />
          <BirthOfDate onChange={handleFormChange} />
          <div className="mb-4">
            <Privacity onChange={handleFormChange} />
          </div>
          <div className="">
            <Button
              backgroundColor={isFormValid ? "#3ccfcf" : "gray.300"}
              textColor={isFormValid ? "#ffffff" : "gray.500"}
              type="submit"
              width={"80vh"}
              disabled={!isFormValid}
            >
              Đăng Ký
            </Button>
            <div className=" flex justify-center mt-4 border-solid border-2 border-[#d9dde8]-300 font-semibold w-[80vh] p-2">
              <p className="text-[#586380]">Bạn đã có tài khoản rồi à?</p>
              <span>
                <Link
                  href="/login"
                 
                  className="text-[#3ccfcf] ml-1 mr-1 hover:text-yellow-300"
                 
                >
                  Đăng Nhập
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
