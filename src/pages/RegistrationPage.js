import React, { useState } from "react";
import { Button, Input, Text, Select, Checkbox } from "@chakra-ui/react";
import GoogleLoginButton from "./api/auth/GoogleLoginButton";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    termsAccepted: false,
    isTeacher: false,
    isStudent: false,
  });

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

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

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(value)) {
      setEmailError("ĐỊA CHỈ EMAIL KHÔNG HỢP LỆ.");
    } else {
      setEmailError("");
    }
    handleChange(e);
  };

  const handleQuestionMarkHover = () => {
    setShowTooltip(true);
  };

  const handleQuestionMarkLeave = () => {
    setShowTooltip(false);
  };

  const handleFieldError = (field, value, errorMessage) => {
    if (value.length > 20) {
      field(errorMessage);
    } else {
      field("");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    handleFieldError(
      setUsernameError,
      value,
      "TÊN NGƯỜI DÙNG QUÁ DÀI. ĐỘ DÀI TỐI ĐA 20 KÍ TỰ."
    );
    handleChange(e);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value.length < 6) {
      setPasswordError(
        "MẬT KHẨU CỦA BẠN QUÁ NGẮN. ĐỘ DÀI TỐI THIỂU LÀ 6 KÝ TỰ"
      );
    } else {
      setPasswordError("");
    }
    handleChange(e);
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
        <form className="w-full max-w-md"
         onSubmit={handleSubmit}>
          <div className="">
            <GoogleLoginButton />
          </div>
          <div className="mb-4">
            <Text className="text-sm mb-2 text-[#939bb4] font-semibold ">EMAIL</Text>
            <div>
              <Input
                width={"80vh"}
                focusBorderColor={emailError ? "red" : "lime"}
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleEmailChange}
                required
                className={emailError ? "border-red-500" : ""}
              />
              {emailError && (
                <p className="mt-2 text-red-400 text-xs font-bold">
                  {emailError}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <div className="text-sm mb-2 text-[#939bb4] font-semibold " htmlFor="username">
              <Text >TÊN NGƯỜI DÙNG</Text>
            </div>
            <Input
              className={usernameError ? "border-red-500" : ""}
              width={"80vh"}
              focusBorderColor={usernameError ? "red" : "lime"}
              type="text"
              name="username"
              id="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleUsernameChange}
              required
            />
            {usernameError && (
              <p className="mt-2 text-red-400 text-xs font-bold">
                {usernameError}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Text className="text-sm mb-2 text-[#939bb4] font-semibold " >MẬT KHẨU</Text>
            <Input
              className={passwordError ? "border-red-500" : ""}
              focusBorderColor={passwordError ? "red" : "lime"}
              width={"80vh"}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <p className="mt-2 text-red-400 text-xs font-bold">
                {passwordError}
              </p>
            )}
          </div>
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
          <div className="mb-4 mt-2 mb-3">
            <label className="inline-flex items-center">
              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2 leading-tight"
                required
              />
              <span className="text-sm">
                I have read and accept the Quizlets{" "}
                <a
                  href="https://quizlet.com/tos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="https://quizlet.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            {termsError && (
              <p className="text-red-500 text-xs italic">{termsError}</p>
            )}
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
