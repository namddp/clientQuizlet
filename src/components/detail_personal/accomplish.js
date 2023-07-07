import Image from "next/image";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function Accomplish() {
  return (
    <div>
      <h1 className="ml-[150px] font-[700] leading-[24px]">Thành tựu</h1>
      <div className="flex relative justify-between items-center bg-[#fff6ef] mx-[150px]  rounded-[8px] leading-[26px] mt-[24px]">
        <div className="text-[#2e3856] pr-[50px] pl-[20px]">
          <h1 className="text-[20px] font-[700] leading-[28px]">
            Bắt đầu một chuỗi phiên học
          </h1>
          <p className="leading-[24px]">
            Các chuỗi phiên học giúp bạn có động lực và đạt được mục tiêu. Bắt
            đầu chuỗi đầu tiên của bạn ngay hôm nay!
          </p>
        </div>
        <Image
          src="https://quizlet.com/static/achievements/streak-Week.svg"
          alt="pic2"
          width={130}
          height={130}
          className="mr-[50px] rotate-12 hover:scale-125 ease-in duration-300  "
        />
      </div>
    </div>
  );
}
