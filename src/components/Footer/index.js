import { React, useState } from "react";
import Link from "next/link";
import { Image, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutubeSquare,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const columns = [
    {
      title: "Giới thiệu",
      links: [
        { label: "Giới thiệu về Quizlet", href: "/lienket1" },
        { label: "Tuyển dụng", href: "/lienket2" },
        { label: "Quảng cáo trên Quizlet", href: "/lienket3" },
        { label: "Tải ứng dụng", href: "/lienket4" },
      ],
    },
    {
      title: "Dành cho học sinh",
      links: [
        { label: "Thẻ ghi nhớ", href: "/lienket1" },
        { label: "Học", href: "/lienket2" },
        { label: "Lời giải", href: "/lienket3" },
        { label: "Quizlet Plus", href: "/lienket4" },
      ],
    },
    {
      title: "Dành cho giáo viên",
      links: [
        { label: "Live", href: "/lienket1" },
        { label: "Cột móc", href: "/lienket2" },
        { label: "Blog", href: "/lienket3" },
        { label: "Quizlet Plus cho giáo viên", href: "/lienket4" },
      ],
    },
    {
      title: "Tài nguyên",
      links: [
        { label: "Trung tâm hỗ trợ", href: "/lienket1" },
        { label: "Đăng ký", href: "/lienket2" },
        { label: "Quy tắc danh dự", href: "/lienket3" },
        { label: "Nguyên tắc cộng động", href: "/lienket4" },
        { label: "Quyền riêng tư", href: "/lienket5" },
        { label: "Quyền riêng tư", href: "/lienket6" },
        { label: "Điều khoản", href: "/lienket7" },
        { label: "Chính sách quảng cáo và cookie", href: "/lienket8" },
      ],
    },
    {
      title: "Ngôn ngữ",
      links: [{ label: "Tiếng Việt", href: "/lienket1" }],
    },
  ];

  return (
    <footer className="bg-[#f6f7fb]  ">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-5 gap-4 px-[40px] mx-[194px] mt-[64px]">
          {columns.map((column, index) => (
            <div key={index} className="text-[#282e3e]">
              <h5 className="text-[16px] font-bold mb-4">{column.title}</h5>
              <ul className="space-y-2">
                {column.links.map((link, subIndex) => (
                  <li key={subIndex} className="text-[13px]">
                    <Link href={link.href}>
                      <span className="font-semibold">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {index === columns.length - 1 && (
                <div className="mt-4">
                  <LanguageSelector options={column.links} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-[40px] mx-[194px] mt-[32px]">
        <div className="flex justify-between  h-[76px]">
          <div>
            <div className="flex items-center space-x-2">
              <Link href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-3 h-3 text-gray-500 hover:bg-gray-200 rounded-full p-2"
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  className="w-3 h-3 text-gray-500 hover:bg-gray-200 rounded-full p-2"
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-3 h-3 text-gray-500 hover:bg-gray-200 rounded-full p-2"
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-3 h-3 text-gray-500 hover:bg-gray-200 rounded-full p-2"
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="w-3 h-3 text-gray-500 hover:bg-gray-200 rounded-full p-2"
                />
              </Link>
            </div>

            <span className="text-[12px]">&copy; 2023 Quizlet, Inc.</span>
          </div>

          <div className="">
            <Box width="140px" height="70px">
              <Image
                src="https://assets.quizlet.com/a/j/dist/app/i/global/footer/coppa-seal.cdf1828279fe2a1.png"
                alt="hinh footer"
              />
            </Box>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LanguageSelector = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-sm underline focus:outline-none"
        onClick={toggleDropdown}
      >
        <svg
          className={`w-3 h-3 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 8.586L10.95 3.636a.5.5 0 0 1 .707.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 .708-.708L6 8.586z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-8 left-0 z-10 bg-white shadow-md rounded overflow-hidden">
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <a href={option.href}>{option.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Footer;
