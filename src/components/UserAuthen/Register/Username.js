import { React, useState } from "react";
import { Text, Input, useShortcut } from "@chakra-ui/react";

const Username = ({ username, onChange }) => {

  const [usernameError, setUsernameError] = useState("");

  // hàm để cập nhật username trong form đăng ký ở RegistrationPage (component cha)
  const updateRegistrationData = (e) => {
    const value = e.target.value;
    onChange("username", value);
  };

  // hàm để xử lý input change ở field Username
  const handleUsernameChange = (e) => {
    const value = e.target.value;

    if (value.length > 20) {
      setUsernameError(
        "TÊN NGƯỜI DÙNG QUÁ DÀI. ĐỘ DÀI TỐI ĐA LÀ 20 KÝ TỰ"
      );
    } else {
      setUsernameError("");
    }
    updateRegistrationData(e);
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
        value={username}
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
