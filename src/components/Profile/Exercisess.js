import React from "react";
import Link from "next/link";

export default function Exercises() {
  const Work = [
    { id: 1, test: "hhsshs", LINK: "#" },
    { id: 2, test: "hhssfdhs", LINK: "#" },
  ];

  return (
    <div className="mt-[32px]">
      {Work.map((item) => (
        <div
          key={item.id}
          className="h-[50px] flex items-center justify-start px-[15px] rounded-[10px] mt-[10px] bg-[#2e3856] font-semibold text-[20px]"
        >
          <Link href={item.LINK}>
            <p>{item.test}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
