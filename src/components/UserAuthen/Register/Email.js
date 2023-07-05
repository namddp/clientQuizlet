import { React, useState } from "react";
import { Text, Input } from "@chakra-ui/react";

const Email = ({email, onChange}) => {

  const [emailError, setEmailError] = useState("");

  // hàm để cập nhật email trong form đăng ký ở RegistrationPage (component cha)
  const updateRegistrationData = (e) => {
    const value = e.target.value;
    onChange("email", value);
  };

  // hàm để xử lý input change ở field Email
  const handleEmailChange = (e) => {
    const value = e.target.value;

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(value)) {
      setEmailError("ĐỊA CHỈ EMAIL KHÔNG HỢP LỆ.");
    } else {
      setEmailError("");
    }
    updateRegistrationData(e);
  };

  return (
    <div className="mb-4">
      <Text className="text-sm mb-2 text-[#939bb4] font-semibold ">EMAIL</Text>
      <div>
        <Input
          className={emailError ? "border-red-500 border-3" : ""}
          width={"80vh"}
          focusBorderColor={emailError ? "red" : "lime"}
          placeholder="user@quizlet.com"
          type="email"
          name="email"
          id="email"
          value= {email}
          onChange={handleEmailChange}
          required
          size='lg'
        />
        {emailError && (
          <p className="mt-2 text-red-400 text-xs font-bold">{emailError}</p>
        )}
      </div>
    </div>
  );
};

export default Email;