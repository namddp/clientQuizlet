import React from "react";
import Link from "next/link";
import { Input } from "@chakra-ui/react";

export default function Header() {
  return (
    <div className="bg-gray-200 py-1">
      <header className="container mx-auto flex items-center justify-center py-0">
        <div className="flex items-center space-x-3">
          <Link href="/trangchu">
            <span className="text-lg font-bold text-green-500 m-2">logo</span>
          </Link>
          <nav className="space-x-4">
            <Link href="/trangchu">
              <span className="text-gray-700 hover:text-green-500 m-2">
                Trang chủ
              </span>
            </Link>
            <Link href="/chude">
              <span className="text-gray-700 hover:text-green-500 m-2">
                Chủ đề
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center justify-center mx-auto">
          <Input borderRadius="15px" placeholder="small size" size="sm" />
        </div>
        <div className="flex items-center m-2">
          <Link href="/login">
            <button className="px-7 py-2 bg-gray-300 text-white rounded-[10px] hover:bg-green-600 m-1">
              Đăng nhập
            </button>
          </Link>
          <Link href="/register">
            <button className="px-7 py-2 bg-green-500 text-white rounded-[10px] hover:bg-green-600 m-1">
              Đăng ký
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
