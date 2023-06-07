import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-200 py-2">
      <header className="container mx-auto flex items-center justify-between py-0">
        <div className="flex items-center space-x-4">
          <Link href="/trangchu">
            <span className="text-lg font-bold text-blue-500 m-2">logo</span>
          </Link>
          <nav className="space-x-4">
            <Link href="/trangchu">
              <span className="text-gray-700 hover:text-blue-500 m-2">
                Trang chủ
              </span>
            </Link>
            <Link href="/chude">
              <span className="text-gray-700 hover:text-blue-500 m-2">
                Chủ đề
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex-grow"></div>
        <div className="w-2/3 space-x-1 flex items-center m-2">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="flex-grow px-2 py-2 border border-gray-300 rounded-full m-1"
          />
          <Link href="/login">
            <button className="px-4 py-2 bg-gray-300 text-white rounded-full hover:bg-blue-600 m-1">
              Đăng nhập
            </button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 m-1">
              Đăng ký
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
