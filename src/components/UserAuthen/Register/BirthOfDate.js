import { React, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Select, Checkbox, Tooltip, Button } from "@chakra-ui/react";

const BirthOfDate = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [termsError, setTermsError] = useState("");

  const [formData, setFormData] = useState({
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
  });
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleQuestionMarkHover = () => {
    setShowTooltip(true);
  };
  const handleQuestionMarkLeave = () => {
    setShowTooltip(false);
  };
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        <div className="">
          <div>
            <label className="inline-flex items-center mb-2 mt-2">
              <Checkbox
                name="isTeacher"
                checked={formData.isTeacher}
                onChange={handleChange}
                className="mr-2"
                size="lg"
              />
              <span className="text-base">Tôi là giáo viên</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mt-2 mb-2">
              <Checkbox
                name="isStudent"
                checked={formData.isStudent}
                onChange={handleChange}
                className="mr-2 "
                size="lg"
                // marginBottom={"2"}
                // marginTop={"2"}
              />
              <span className="text-base">Tôi là học sinh</span>
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
            label=" Quizlets dành cho mọi lứa tuổi nhưng người dùng buộc phải cung cấp
          ngày sinh thật để tuân thủ luật lệ quốc gia"
            placement="right-end"
          >
            <Button 
            size={"xs"}
            marginLeft={"2"}
            >?</Button>
          </Tooltip>
        </span>
      </label>

      <div className="flex mb-2 ">
        <Select
          className="shadow appearance-none border focus:outline-none focus:shadow-outline cursor-pointer hover:[#ffcd1f]"
          name="dayOfBirth"
          id="dayOfBirth"
          placeholder="Ngày"
          color={"#3ccfcf"}
          fontSize={"14"}
          fontWeight={"600"}
          value={formData.dayOfBirth}
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
          name="monthOfBirth"
          id="monthOfBirth"
          placeholder="Tháng"
          color={"#3ccfcf"}
          fontSize={"14"}
          fontWeight={"600"}
          value={formData.monthOfBirth}
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
          name="yearOfBirth"
          id="yearOfBirth"
          color={"#3ccfcf"}
          fontSize={"14"}
          fontWeight={"600"}
          placeholder="Năm"
          value={formData.yearOfBirth}
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

export default BirthOfDate;
