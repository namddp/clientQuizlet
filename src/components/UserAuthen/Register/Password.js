import {React,useState} from "react";
import { Text, Input } from "@chakra-ui/react";

const Password = ({ password, onChange }) => {
  
  const [passwordError, setPasswordError] = useState("");


  // hàm để cập nhật password trong form đăng ký ở RegistrationPage (component cha)
  const updateRegistrationData = (e) => {
    const value = e.target.value;
    onChange("password", value);
  };

  // hàm để xử lý input change ở field Password
  const handlePasswordChange = (e) => {
    const value = e.target.value;

    if (value.length < 6) {
      setPasswordError(
        "MẬT KHẨU CỦA BẠN QUÁ NGẮN. ĐỘ DÀI TỐI THIỂU LÀ 6 KÝ TỰ"
      );
    } else {
      setPasswordError("");
    }
    updateRegistrationData(e);
  };

  return (
    <div className="mb-4">
      <Text className="text-sm mb-2 text-[#939bb4] font-semibold ">
        MẬT KHẨU
      </Text>
      <Input
        className={passwordError ? "border-red-500" : ""}
        focusBorderColor={passwordError ? "red" : "lime"}
        width={"80vh"}
        type="password"
        name="password"
        id="password"
        placeholder="Chọn mật khẩu cho bạn"
        value={password}
        onChange={handlePasswordChange}
        required
        size='lg'
      />
      {passwordError && (
        <p className="mt-2 text-red-400 text-xs font-bold">{passwordError}</p>
      )}
    </div>
  );
};

export default Password;
