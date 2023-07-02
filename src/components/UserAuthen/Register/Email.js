import { React, useState } from "react";
import { Text, Input } from "@chakra-ui/react";
const Email = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
  const [emailError, setEmailError] = useState("");
  return (
    <div className="mb-4">
      <Text className="text-sm mb-2 text-[#939bb4] font-semibold ">EMAIL</Text>
      <div>
        <Input
          width={"80vh"}
          focusBorderColor={emailError ? "red" : "lime"}
          placeholder="user@quizlet.com"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleEmailChange}
          required
          className={emailError ? "border-red-500 border-3" : ""}
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