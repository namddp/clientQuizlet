import Image from "next/image";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function Hobby() {
  return (
    <div className="flex relative justify-between  items-center bg-[#edefff] mx-[150px]  rounded-[8px] leading-[26px] ">
      <div className="text-[#2e3856] pr-[50px] pl-[20px] ">
        <h1 className="text-[20px] font-[700] leading-[28px]">
          Cột mốc: Hoạt động đánh giá quá trình thú vị
        </h1>
        <p className="leading-[24px]">
          Học sinh của bạn sẽ yêu thích hoạt động hấp dẫn và đầy tính tương tác
          này.
        </p>
      </div>
      <Image
        src="https://assets.quizlet.com/a/j/dist/app/i/homepage/checkpoint_banner.235abe07e3f72d3.png"
        alt="pic2"
        width={400}
        height={100}
        className=" "
      />
      <div className="absolute right-3 ">
        <button className=" bg-blue-600 rounded-[50%] text-[white] hover:bg-blue-500  p-[0.5rem]">
          <ArrowForwardIcon w={7} h={7} />
        </button>
      </div>
    </div>
  );
}
