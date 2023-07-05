import React, { useState } from "react";
import { Select, Checkbox, Tooltip, Button } from "@chakra-ui/react";

const DateOfBirth = ({ onChange }) => {
  const [dateOfBirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [accountType, setAccountType] = useState("");

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateOfBirth((prevDateOfBirth) => ({
      ...prevDateOfBirth,
      [name]: value,
    }));

    updateRegisterData();
  };

  const handleAccountTypeChange = (e) => {
    const value = e.target.value;
    setAccountType(accountType === value ? "" : value);
    updateRegisterData();
  };

  const updateRegisterData = () => {
    onChange({
      dateOfBirth: new Date(
        dateOfBirth.year,
        dateOfBirth.month - 1,
        dateOfBirth.day
      ),
      accountType,
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
          <div>
            <label className="inline-flex items-center mb-2 mt-2">
              <Checkbox
                name="accountType"
                value="teacher"
                checked={isChecked}
                onChange={handleAccountTypeChange}
                className="mr-2"
                size="lg"
                isInvalid={age < 18}
                disabled={age < 18}
              />
              <span className="text-base">Tôi là Giáo viên</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mt-2 mb-2">
              <Checkbox
                name="accountType"
                value="student"
                checked={isChecked}
                onChange={handleAccountTypeChange}
                className="mr-2 "
                size="lg"
              />
              <span className="text-base">Tôi là Học sinh</span>
            </label>
          </div>
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
