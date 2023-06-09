import React, { useState } from "react";
import { Button, Link, Input, Text, Select, Image } from "@chakra-ui/react";

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

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
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
      "Tên người dùng của bạn quá dài. Độ dài tối đa là 20 ký tự."
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
        <div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isTeacher"
                checked={formData.isTeacher}
                onChange={handleChange}
                className="mr-2 leading-tight"
              />
              <span className="text-xs">I am a teacher</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isStudent"
                checked={formData.isStudent}
                onChange={handleChange}
                className="mr-2 leading-tight"
              />
              <span className="text-xs">I am a student</span>
            </label>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full h-full bg-red= flex">
      {/* <Image className="w-[100vh] h-[100vh]" src="https://assets.quizlet.com/a/j/dist/app/i/signup/QZ_Auth_Light.f0832112f8d66a6.png" alt="banner"></Image> */}
      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Text as="em">EMAIL</Text>
            <div>
              <Input
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
                <p className="text-red-400 text-xs font-bold">{emailError}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <div className="bold text-gray-700" htmlFor="username">
              <Text as="em">TÊN NGƯỜI DÙNG</Text>
            </div>
            <Input
              className={usernameError ? "border-red-500" : ""}
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
              <p className="text-red-400 text-xs font-bold">{usernameError}</p>
            )}
          </div>
          <div className="mb-4">
            <Text as="em">MẬT KHẨU</Text>
            <Input
              className={passwordError ? "border-red-500" : ""}
              focusBorderColor={passwordError ? "red" : "lime"}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <p className="text-red-400 text-xs font-bold">{passwordError}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="flex items-center text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateOfBirth"
            >
              Date of Birth
              <span
                className="ml-1 text-gray-500 cursor-pointer"
                onMouseEnter={handleQuestionMarkHover}
                onMouseLeave={handleQuestionMarkLeave}
              >
                ?
              </span>
            </label>
            {showTooltip && (
              <p className="text-gray-600 text-xs">
                Please enter your date of birth to determine your age.
              </p>
            )}
            <div className="flex">
              <Select
                className=" shadow appearance-none border roundedtext-gray-700 focus:outline-none focus:shadow-outline"
                name="dayOfBirth"
                id="dayOfBirth"
                placeholder="Day"
                value={formData.dayOfBirth}
                onChange={handleDateChange}
                required
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Select>

              <Select
                className="shadow appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-outline "
                name="monthOfBirth"
                id="monthOfBirth"
                placeholder="Month"
                value={formData.monthOfBirth}
                onChange={handleDateChange}
                required
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </Select>

              <Select
                className="shadow appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-outline"
                name="yearOfBirth"
                id="yearOfBirth"
                placeholder="Year"
                value={formData.yearOfBirth}
                onChange={handleDateChange}
                required
              >
                <option value="">Year</option>
                {Array.from({ length: 124 }, (_, i) => 2023 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          {renderCheckboxes()}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2 leading-tight"
                required
              />
              <span className="text-xs">
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
            {/* <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button> */}
            <Button>Register</Button>
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
