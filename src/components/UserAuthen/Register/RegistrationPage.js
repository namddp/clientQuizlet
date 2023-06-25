import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import GoogleLoginButton from "../auth/GoogleLoginButton";
import Email from "@/components/UserAuthen/Register/Email";
import User from "@/components/UserAuthen/Register/User";
import Password from "@/components/UserAuthen/Register/Password";
import Privacity from "@/components/UserAuthen/Register/Privacy";
import BirthOfDate from "@/components/UserAuthen/Register/BirthOfDate";
import Link from "next/link";
import OptionsRegis from "@/components/UserAuthen/Register/OptionsRegis";
import Login from "../Login/Login";
const RegistrationPage = () => {
  const [formData, setFormData] = useState({});
  const [termsError, setTermsError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setTermsError(
        "Vui lòng chấp nhận Điều khoản dịch vụ và Chính sách Quyền riêng tư của Quizlets để tiếp tục."
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

  const oneClick = () => {
    // Chuyển hướng tới component Login
    window.location.href = "/login";
  };
  return (
    <div className="w-full h-full bg-red flex">
      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <OptionsRegis />
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
                  onClick={oneClick}
                  href=""
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
