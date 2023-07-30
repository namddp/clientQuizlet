import React, { useEffect, useState } from "react";
import { Select, Checkbox, Tooltip, Button, Radio, RadioGroup, Stack  } from "@chakra-ui/react";

const DateOfBirth = ({ onChange }) => {
  const accountTypeOptions = {
    "teacher": "Tôi là Giáo viên", 
    "student": "Tôi là Học sinh"
  }; // Danh sách các lựa chọn
  const [dateOfBirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [accountType, setAccountType] = useState("student");
  const [accountTypeError, setAccountTypeError] = useState(false)

  useEffect(() => {
    updateRegisterData()
  },[dateOfBirth, accountType, accountTypeError])

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateOfBirth((prevDateOfBirth) => ({
      ...prevDateOfBirth,
      [name]: value,
    }));
  };

  const handleAccountTypeChange = (value) => {
    setAccountType(value)
  };

  const updateRegisterData = () => {
    setAccountTypeError(false)
    if (accountType == 'teacher' ) {
      const today = new Date(); // Lấy ngày hiện tại
      const birthDate = new Date(dateOfBirth.year, dateOfBirth.month - 1, dateOfBirth.day); // Tạo đối tượng Date từ thông tin ngày, tháng và năm sinh
    
      let age = today.getFullYear() - birthDate.getFullYear(); // Tính toán tuổi dựa vào năm sinh và năm hiện tại
    
      // Kiểm tra xem đã qua ngày sinh nhật của năm hiện tại chưa
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
      setAccountTypeError(age < 18)
    }
    onChange({
      dateOfBirth: new Date(
        dateOfBirth.year,
        dateOfBirth.month - 1,
        dateOfBirth.day
      ),
      accountType: !accountTypeError  ? accountType : '' ,
    });
  };

  const calculateAge = () => {
    const today = new Date();

    let age = today.getFullYear() - dateOfBirth.year;
    const monthDifference = today.getMonth() - dateOfBirth.month;
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dateOfBirth.day)
    ) {
      age--;
    }
    return age;
  };

  const renderCheckboxes = () => {
    const age = calculateAge();

    if (dateOfBirth.day && dateOfBirth.month && dateOfBirth.year) {
      return (
        <div className="">
          <RadioGroup value={accountType} onChange={(value) => handleAccountTypeChange(value)}>
            <Stack spacing={4}>
              {Object.entries(accountTypeOptions).map(([key, value]) => (
                <Radio key={key} value={key}>
                  {value}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          {accountTypeError && (
          <p className="mt-2 text-red-400 text-xs font-bold">GIÁO VIÊN CHỈ DANH CHO ĐỐI TƯỢNG TRÊN 18 TUỔI</p>
        )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="mb-4 w-[50vh]">
      <label
        className="flex items-center text-sm mb-2 text-[#939bb4] font-semibold"
        htmlFor="dateOfBirth"
      >
        NGÀY SINH
        <span>
          <Tooltip
            label="Quizlets dành cho mọi lứa tuổi nhưng người dùng buộc phải cung cấp ngày sinh thật để tuân thủ luật lệ quốc gia"
            placement="right-end"
            className="bg-red-500"
          >
            <Button size={"xs"} marginLeft={"2"}>
              ?
            </Button>
          </Tooltip>
        </span>
      </label>

      <div className="flex mb-2 ">
        <Select
          className="shadow appearance-none border focus:outline-none focus:shadow-outline cursor-pointer hover:[#ffcd1f]"
          name="day"
          id="dayOfBirth"
          placeholder="Ngày"
          color={"#3ccfcf"}
          fontSize={"14"}
          fontWeight={"600"}
          value={dateOfBirth.day}
          onChange={handleDateChange}
          required
          size="lg"
        >
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </Select>
        <Select
          className="shadow appearance-none border rounded focus:outline-none focus:shadow-outline cursor-pointer"
          name="month"
          id="monthOfBirth"
          placeholder="Tháng"
          color={"#3ccfcf"}
          fontSize={"14"}
          fontWeight={"600"}
          value={dateOfBirth.month}
          onChange={handleDateChange}
          required
          size="lg"
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>
        <Select
          className="shadow appearance-none border rounded focus:outline-none focus:shadow-outline cursor-pointer"
          name="year"
          id="yearOfBirth"
          color={"#3ccfcf"}
          fontSize={"14"}
          fontWeight={"600"}
          placeholder="Năm"
          value={dateOfBirth.year}
          onChange={handleDateChange}
          required
          size="lg"
        >
          {Array.from({ length: 124 }, (_, i) => 2023 - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </div>
      {renderCheckboxes()}
    </div>
  );
};

export default DateOfBirth;
