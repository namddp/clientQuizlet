// import React from "react";
// import Link from "next/link";
// import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
// import { MdLockOutline } from "react-icons/md";

// export default function Login() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
//       <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
//         <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
//           <div className="w-3/5 p-5">
//             <div className="py-10">
//               <h2 className="text-3xl font-bold text-green-500 mb-2">
//                 Đăng Nhập
//               </h2>
//               <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
//               <div className="flex justify-center my-2">
//                 <Link href="#">
//                   <div className="border-2 border-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
//                     <FaGoogle className="text-sm" />
//                   </div>
//                 </Link>
//               </div>
//               <div className="flex items-center my-2">
//                 <div className="border-b border-gray-300 flex-grow mr-2"></div>
//                 <p className="text-gray-300 text-[13px]">HOẶC EMAIL</p>
//                 <div className="border-b border-gray-300 flex-grow ml-2"></div>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="bg-gray-200 w-64 p-2 flex items-center mb-3 ">
//                   <FaRegEnvelope className="text-gray-400 m-2" />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="bg-gray-200 outline-none text-sm flex-1"
//                   />
//                 </div>
//                 <div className="bg-gray-200 w-64 p-2 flex items-center ">
//                   <MdLockOutline className="text-gray-400 m-2" />
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="bg-gray-200 outline-none text-sm flex-1"
//                   />
//                 </div>
//                 <div className="flex justify-between w-64 mb-5">
//                   <label className="flex items-center text-xs">
//                     <input
//                       type="checkbox"
//                       name="remember"
//                       className="mr-1 cursor-pointer"
//                     />
//                     Remembe
//                   </label>
//                   <Link href="#">
//                     <span className="text-xs">Forgot password</span>
//                   </Link>
//                 </div>
//                 <Link href="/signup">
//                   <span className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">
//                     Đăng Nhập
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
//             <h2 className="text-3xl font-bold mb-2">Xin chào, bạn!</h2>
//             <div className="border-2 w-10 border-white inline-block mb-2"></div>
//             <p className="mb-10">
//               Học tập không chỉ là việc đạt điểm số, mà là quá trình trưởng
//               thành và phát triển bản thân.
//             </p>
//             <Link href="/signup">
//               <span className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
//                 Đăng Ký
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function LoginPage() {
  return <h1>HEllo login page</h1>;
}
