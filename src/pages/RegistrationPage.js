import React, { useState } from "react";
import { Button, Input, Text, Select, Checkbox } from "@chakra-ui/react";
import GoogleLoginButton from "./api/auth/GoogleLoginButton";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Email from "@/components/Register/Email";
import User from "@/components/Register/User";
import Password from "@/components/Register/Password";
import Privacity from "@/components/Register/Privacy";
const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    isTeacher: false,
    isStudent: false,
  });

  // const [termsError, setTermsError] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [termsError, setTermsError] = useState("");

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const handleQuestionMarkHover = () => {
    setShowTooltip(true);
  };

  const handleQuestionMarkLeave = () => {
    setShowTooltip(false);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(
      formData.yearOfBirth,
      formData.monthOfBirth - 1,
      formData.dayOfBirth
    );
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const renderCheckboxes = () => {
    const { dayOfBirth, monthOfBirth, yearOfBirth } = formData;
    const age = calculateAge(dayOfBirth, monthOfBirth, yearOfBirth);

    if (dayOfBirth && monthOfBirth && yearOfBirth && age >= 18) {
      return (
        <div className="leading-8">
          <div>
            <label className="inline-flex items-center">
              <Checkbox
                name="isTeacher"
                checked={formData.isTeacher}
                onChange={handleChange}
                className="mr-2 "
              />
              <span className="text-sm">I am a teacher</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <Checkbox
                name="isStudent"
                checked={formData.isStudent}
                onChange={handleChange}
                className="mr-2 "
              />
              <span className="text-sm">I am a student</span>
            </label>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full h-full bg-red flex">
      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="">
            <GoogleLoginButton />
          </div>
          <Email />
          <User />
          <Password />
          <div className="mb-4 ">
            <label
              className="flex items-center text-sm mb-2 text-[#939bb4] font-semibold"
              htmlFor="dateOfBirth"
            >
              NGÀY SINH
              <span
                className="ml-1 text-[#586380] cursor-pointer rounded-full p-1"
                onMouseEnter={handleQuestionMarkHover}
                onMouseLeave={handleQuestionMarkLeave}
              >
                <AiOutlineQuestionCircle fontSize={"18"} />
              </span>
            </label>
            {showTooltip && (
              <p className="w-auto h-auto text-xs bg-[#1a1d28] text-[#ffffff] rounded-r-lg p-8 fs-12 leading-8">
                Quizlets dành cho mọi lứa tuổi nhưng người dùng buộc phải cung
                cấp ngày sinh thật để tuân thủ luật lệ quốc gia
              </p>
            )}
            <div className="flex">
              <Select
                className=" shadow appearance-none border focus:outline-none focus:shadow-outline cursor-pointer hover:[#ffcd1f]"
                name="dayOfBirth"
                id="dayOfBirth"
                placeholder="Ngày"
                color={"#3ccfcf"}
                fontSize={"14"}
                fontWeight={"600"}
                value={formData.dayOfBirth}
                onChange={handleDateChange}
                required
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Select>

              <Select
                className="shadow appearance-none border rounded focus:outline-none focus:shadow-outline cursor-pointer"
                name="monthOfBirth"
                id="monthOfBirth"
                placeholder="Tháng"
                color={"#3ccfcf"}
                fontSize={"14"}
                fontWeight={"600"}
                value={formData.monthOfBirth}
                onChange={handleDateChange}
                required
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </Select>
              <Select
                className="shadow appearance-none border rounded focus:outline-none focus:shadow-outline cursor-pointer"
                name="yearOfBirth"
                id="yearOfBirth"
                color={"#3ccfcf"}
                fontSize={"14"}
                fontWeight={"600"}
                placeholder="Năm"
                value={formData.yearOfBirth}
                onChange={handleDateChange}
                required
              >
                {Array.from({ length: 124 }, (_, i) => 2023 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          {renderCheckboxes()}
          <div className="mb-4 mt-2 mb-3 ">
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
