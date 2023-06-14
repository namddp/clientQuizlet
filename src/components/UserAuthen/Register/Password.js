import {React,useState} from "react";
import { Text, Input } from "@chakra-ui/react";

const Password = () => {
  const [passwordError, setPasswordError] = useState("");
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
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

  const [formData, setFormData] = useState({
    password: "",
  });
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
        value={formData.password}
        onChange={handlePasswordChange}
        required
      />
      {passwordError && (
        <p className="mt-2 text-red-400 text-xs font-bold">{passwordError}</p>
      )}
    </div>
  );
};

export default Password;
