import { React, useState } from "react";
import OptionsRegis from "../Register/OptionsRegis";
import { Button, Input } from "@chakra-ui/react";
import Link from "next/link";
import Email from "@/components/UserAuthen/Register/Email";
import Password from "@/components/UserAuthen/Register/Password";
import axiosInstance from "@/utils/axiosConfig";
import { loginSuccess } from "@/redux/actions/usersActions";

const Login = ({onClose}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [serverErr , setServerErr] = useState([])
 
  const handleFormChange = (keyName, value) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        [keyName]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      setServerErr([])
      axiosInstance.post('/auth/login',formData)
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
          console.log(error)
          if (error.response && error.response.data) {
            const { message } = error.response.data
            setServerErr(prev => [...prev , message])
          }
        })
    }
  };


  return (
    <div className="w-full h-full bg-red flex">
      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <OptionsRegis />
          <div className="error-message">
            <ul className="mt-6 mb-6">
              { serverErr.length > 0 && (
                serverErr.map((err,index) => ( 
                  <li key={index} className="text-red-400 text-md font-bold">{err}</li>
                ))
              )}
            </ul>
          </div>
          <div className="mb-4">
            <Email onChange={handleFormChange} />
          </div>
          <div>
            <Password onChange={handleFormChange} />
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
                <div className="text-[#3ccfcf] ml-1 mr-1 hover:text-yellow-300">
                  Tạo tài khoản
                </div>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
