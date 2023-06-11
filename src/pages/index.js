import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Trangchu from "./trangchu";

export default function home() {
  return (
    <div className="bg-[#f6f7fb]">
      <Header />
      <Trangchu />
      <Footer />
    </div>
  );
}
// const RegistrationPage = () => {
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

//   const [usernameError, setUsernameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [termsError, setTermsError] = useState("");
//   const [showTooltip, setShowTooltip] = useState(false);

//   const handleChange = (e) => {
//     const value =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setFormData({ ...formData, [e.target.name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.termsAccepted) {
//       setTermsError(
//         "PLEASE ACCEPT THE QUIZLET'S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE."
//       );
//       return;
//     }
//     console.log(formData);
//   };

//   const handleUsernameChange = (e) => {
//     const value = e.target.value;
//     if (value.length > 20) {
//       setUsernameError(
//         "Your name is too long, maximum length of 20 characters."
//       );
//     } else {
//       setUsernameError("");
//     }
//     handleChange(e);
//   };
//   const handleSelectChange = (e) => {
//     const value = e.target.value;
//     setFormData({ ...formData, [e.target.name]: value });
//   };
//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//     if (!emailRegex.test(value)) {
//       setEmailError("Invalid email address.");
//     } else {
//       setEmailError("");
//     }
//     handleChange(e);
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     if (value.length < 6) {
//       setPasswordError("Password must be at least 6 characters long.");
//     } else {
//       setPasswordError("");
//     }
//     handleChange(e);
//   };

//   const handleQuestionMarkHover = () => {
//     setShowTooltip(true);
//   };

//   const handleQuestionMarkLeave = () => {
//     setShowTooltip(false);
//   };

//   const calculateAge = () => {
//     const today = new Date();
//     const birthDate = new Date(
//       formData.yearOfBirth,
//       formData.monthOfBirth - 1,
//       formData.dayOfBirth
//     );
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();
//     if (
//       monthDifference < 0 ||
//       (monthDifference === 0 && today.getDate() < birthDate.getDate())
//     ) {
//       age--;
//     }
//     return age;
//   };

//   const renderCheckboxes = () => {
//     const { dayOfBirth, monthOfBirth, yearOfBirth } = formData;
//     const age = calculateAge(dayOfBirth, monthOfBirth, yearOfBirth);

//     if (dayOfBirth && monthOfBirth && yearOfBirth && age >= 18) {
//       return (
//         <div>
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 name="isTeacher"
//                 checked={formData.isTeacher}
//                 onChange={handleChange}
//                 className="mr-2 leading-tight"
//               />
//               <span className="text-xs">I am a teacher</span>
//             </label>
//           </div>
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 name="isStudent"
//                 checked={formData.isStudent}
//                 onChange={handleChange}
//                 className="mr-2 leading-tight"
//               />
//               <span className="text-xs">I am a student</span>
//             </label>
//           </div>
//         </div>
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="flex w-full max-w-screen-xl">
//         <div className="w-1/2 bg-gray-200">
//           <img
//             src="https://quizlet.com/_next/static/media/QZ_Auth_Light.18d3856e.png"
//             alt="Image"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-1/2 bg-white">
//           <div className="flex justify-center items-center h-full">
//             <form className="w-full max-w-md" onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <input
//                   className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//                     emailError ? "border-red-500" : ""
//                   }`}
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleEmailChange}
//                   required
//                 />
//                 {emailError && (
//                   <p className="text-red-500 text-xs italic">{emailError}</p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="username"
//                 >
//                   Username
//                 </label>
//                 <input
//                   className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//                     usernameError ? "border-red-500" : ""
//                   }`}
//                   type="text"
//                   name="username"
//                   id="username"
//                   placeholder="Choose a username"
//                   value={formData.username}
//                   onChange={handleUsernameChange}
//                   required
//                 />
//                 {usernameError && (
//                   <p className="text-red-500 text-xs italic">{usernameError}</p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <input
//                   className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//                     passwordError ? "border-red-500" : ""
//                   }`}
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handlePasswordChange}
//                   required
//                 />
//                 {passwordError && (
//                   <p className="text-red-500 text-xs italic">{passwordError}</p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="flex items-center text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="dateOfBirth"
//                 >
//                   Date of Birth
//                   <span
//                     className="ml-1 text-gray-500 cursor-pointer"
//                     onMouseEnter={handleQuestionMarkHover}
//                     onMouseLeave={handleQuestionMarkLeave}
//                   >
//                     ?
//                   </span>
//                 </label>
//                 {showTooltip && (
//                   <p className="text-gray-600 text-xs">
//                     Please enter your date of birth to determine your age.
//                   </p>
//                 )}
//                 <div className="flex">
//                   <input
//                     className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     type="number"
//                     name="dayOfBirth"
//                     id="dayOfBirth"
//                     placeholder="Day"
//                     value={formData.dayOfBirth}
//                     onChange={handleChange}
//                     min="1"
//                     max="31"
//                     required
//                   />
//                   <input
//                     className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-2"
//                     type="number"
//                     name="monthOfBirth"
//                     id="monthOfBirth"
//                     placeholder="Month"
//                     value={formData.monthOfBirth}
//                     onChange={handleChange}
//                     min="1"
//                     max="12"
//                     required
//                   />
//                   <input
//                     className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     type="number"
//                     name="yearOfBirth"
//                     id="yearOfBirth"
//                     placeholder="Year"
//                     value={formData.yearOfBirth}
//                     onChange={handleChange}
//                     min="1900"
//                     max="2023"
//                     required
//                   />
//                 </div>
//               </div>
//               {renderCheckboxes()}
//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     name="termsAccepted"
//                     checked={formData.termsAccepted}
//                     onChange={handleChange}
//                     className="mr-2 leading-tight"
//                     required
//                   />
//                   <span className="text-xs">
//                     I have read and accept the Quizlets{" "}
//                     <a
//                       href="https://quizlet.com/tos"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500"
//                     >
//                       Terms of Service
//                     </a>{" "}
//                     and{" "}
//                     <a
//                       href="https://quizlet.com/privacy"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500"
//                     >
//                       Privacy Policy
//                     </a>
//                     .
//                   </span>
//                 </label>
//                 {termsError && (
//                   <p className="text-red-500 text-xs italic">{termsError}</p>
//                 )}
//               </div>
//               <div className="flex items-center justify-between">
//                 {/* <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="submit"
//                 >
//                   Register
//                 </button> */}
//                 <Button>Register</Button>
//                 <a
//                   className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//                   href="#"
//                 >
//                   Forgot Password?
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;
