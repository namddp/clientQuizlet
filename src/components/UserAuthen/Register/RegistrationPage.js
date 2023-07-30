import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import Email from "@/components/UserAuthen/Register/Email";
import Username from "@/components/UserAuthen/Register/Username";
import Password from "@/components/UserAuthen/Register/Password";
import Privacity from "@/components/UserAuthen/Register/Privacy";
import DateOfBirth from "@/components/UserAuthen/Register/DateOfBirth";
import Link from "next/link";
import OptionsRegis from "@/components/UserAuthen/Register/OptionsRegis";
import axiosInstance from "@/utils/axiosConfig";
import { loginSuccess } from "@/redux/actions/usersActions";

const RegistrationPage = () => {

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    dateOfBirth: '',
    accountType: '',
    termsAccepted: false,
  });
  const [termsError, setTermsError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  

  useEffect(() => {
    setIsFormValid(validateForm(formData));
  },[formData])

  const handleFormChange = (keyName, value) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        [keyName]: value,
    }));
    // setIsFormValid(validateForm(formData))
  };

  const handleDateOfBirth = (value) => {
    for (const key in value) {
      handleFormChange(key, value[key])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setTermsError(
        "PLEASE ACCEPT THE QUIZLET'S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE."
      );
      return;
    }

    if (isFormValid) {
      axiosInstance.post('/auth/register',formData)
        .then(res => {
          const {accessToken, ...user} = res.data
          localStorage.setItem("accessToken", accessToken);
          // Store user into localStore
          const userJSON = JSON.stringify(user);
          localStorage.setItem('user', userJSON);
          loginSuccess(user);
          window.location.reload();
        })
        .catch(error => {
          console.error(error)
        })
    }
  };

  // mỗi input field (component con) đều đã có hàm kiểm tra giá trị input riêng, nên nếu tất cả giá trị đều được filled nghĩa là form hợp lệ
  const validateForm = (data) => {
    return (
      data.email &&
      data.username &&
      data.password &&
      data.dateOfBirth &&
      data.accountType &&
      data.termsAccepted
    );
  };
  
  const onClick = () => {
    // Chuyển hướng tới component Login
    Router.push("/login");
  };

  return (
    <div className="w-full h-full bg-red flex">
      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <OptionsRegis />
          <Email onChange={handleFormChange} />
          <Username onChange={handleFormChange} />
          <Password onChange={handleFormChange} />
          <DateOfBirth onChange={handleDateOfBirth} />
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
                  onClick={onClick}
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