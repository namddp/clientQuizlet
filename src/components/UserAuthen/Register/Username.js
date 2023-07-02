import { React, useState } from "react";
import { Text, Input } from "@chakra-ui/react";

const Username = () => {
  const [usernameError, setUsernameError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
  });
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
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
  const handleFieldError = (field, value, errorMessage) => {
    if (value.length > 20) {
      field(errorMessage);
    } else {
      field("");
    }
  };
  return (
    <div className="mb-4">
      <div
        className="text-sm mb-2 text-[#939bb4] font-semibold "
        htmlFor="username"
      >
        <Text>TÊN NGƯỜI DÙNG</Text>
      </div>
      <Input
        className={usernameError ? "border-red-500" : ""}
        width={"80vh"}
        focusBorderColor={usernameError ? "red" : "lime"}
        type="text"
        name="username"
        id="username"
        placeholder="mindx123"
        value={formData.username}
        onChange={handleUsernameChange}
        required
        size='lg'
      />
      {usernameError && (
        <p className="mt-2 text-red-400 text-xs font-bold">{usernameError}</p>
      )}
    </div>
  );
};

export default Username;
