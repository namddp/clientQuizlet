// import React from "react";
// import { Button, Input, Text, Select, Checkbox } from "@chakra-ui/react";
// import { useState } from "react";

// const DateOfBirth = () => {
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     username: "",
//     password: "",
//     dayOfBirth: "",
//     monthOfBirth: "",
//     yearOfBirth: "",
//     termsAccepted: false,
//     isTeacher: false,
//     isStudent: false,
//   });
//   const handleDateChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleQuestionMarkHover = () => {
//     setShowTooltip(true);
//   };

//   const handleQuestionMarkLeave = () => {
//     setShowTooltip(false);
//   };
//   return (
//     <div>
//       <div className="mb-4 ">
//         <label
//           className="flex items-center text-gray-700 text-sm font-bold mb-2"
//           htmlFor="dateOfBirth"
//         >
//           Date of Birth
//           <span
//             className="ml-1 text-gray-500 cursor-pointer"
//             onMouseEnter={handleQuestionMarkHover}
//             onMouseLeave={handleQuestionMarkLeave}
//           >
//             ?
//           </span>
//         </label>
//         {showTooltip && (
//           <p className="text-gray-600 text-xs">
//             Please enter your date of birth to determine your age.
//           </p>
//         )}
//         <div className="flex">
//           <Select
//             className=" shadow appearance-none border roundedtext-gray-700 focus:outline-none focus:shadow-outline"
//             name="dayOfBirth"
//             id="dayOfBirth"
//             placeholder="Ngày"
//             value={formData.dayOfBirth}
//             onChange={handleDateChange}
//             required
//           >
//             {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
//               <option key={day} value={day}>
//                 {day}
//               </option>
//             ))}
//           </Select>

//           <Select
//             className="shadow appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-outline "
//             name="monthOfBirth"
//             id="monthOfBirth"
//             placeholder="Tháng"
//             value={formData.monthOfBirth}
//             onChange={handleDateChange}
//             required
//           >
//             {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
//               <option key={month} value={month}>
//                 {month}
//               </option>
//             ))}
//           </Select>

//           <Select
//             className="shadow appearance-none border rounded text-gray-700 focus:outline-none focus:shadow-outline"
//             name="yearOfBirth"
//             id="yearOfBirth"
//             placeholder="Năm"
//             value={formData.yearOfBirth}
//             onChange={handleDateChange}
//             required
//           >
//             {Array.from({ length: 124 }, (_, i) => 2023 - i).map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </Select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DateOfBirth;
