import { React, useState } from "react";
import { Select, Checkbox, Tooltip, Button } from "@chakra-ui/react";

const DateOfBirth = ({ onChange }) => {

    // manage component state
    const [DOB, setDOB] = useState({
        dayOfBirth: "",
        monthOfBirth: "",
        yearOfBirth: "",
    });

    const [accountType, setAccountType] = useState("")

    // handle component state

    const handleDateChange = (e) => {
        const { name, value } = e.target;

        setDOB((prevDOB) => ({
            ...prevDOB,
            [name]: value,
        }));
    };

    const handleAccountTypeChange = (e) => {
        const value = e.target.value;
        if (accountType === value) {
            setAccountType("");
        } else {
            setAccountType(value);
        }
    };

    const dateOfBirth = new Date(

    )

    // sending dateOfBirth and accountType back to RegistrationPage

    const [registrationData, setRegistrationData] = useState({});

    const updateRegisterData = () => {

        onChange({ dateOfBirth, accountType });
    }

    const calculateAge = (dayOfBirth, monthOfBirth, yearOfBirth) => {
        const today = new Date();
        const birthDate = new Date(
            yearOfBirth,
            monthOfBirth - 1,
            dayOfBirth
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
        const { dayOfBirth, monthOfBirth, yearOfBirth } = DOB;
        const age = calculateAge(dayOfBirth, monthOfBirth, yearOfBirth);

        if (dayOfBirth && monthOfBirth && yearOfBirth) {
            return (
                <div className="">
                    <div>
                        <label className="inline-flex items-center mb-2 mt-2">
                            <Checkbox
                                name="teacher"
                                value={"teacher"}
                                checked={accountType === "teacher"}
                                onChange={handleAccountTypeChange}
                                className="mr-2"
                                size="lg"
                                disabled={age < 18}
                            />
                            <span className="text-base">Tôi là Giáo viên</span>
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center mt-2 mb-2">
                            <Checkbox
                                name="student"
                                value={"student"}
                                checked={accountType === "student"}
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
                        label=" Quizlets dành cho mọi lứa tuổi nhưng người dùng buộc phải cung cấp
          ngày sinh thật để tuân thủ luật lệ quốc gia"
                        placement="right-end"
                        className="bg-red-500 "
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
                    name="dayOfBirth"
                    id="dayOfBirth"
                    placeholder="Ngày"
                    color={"#3ccfcf"}
                    fontSize={"14"}
                    fontWeight={"600"}
                    value={DOB.dayOfBirth}
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
                    value={DOB.monthOfBirth}
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
                    value={DOB.yearOfBirth}
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