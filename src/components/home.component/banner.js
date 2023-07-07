import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import FullScreenComponent from "../UserAuthen/FullScreenComponent";

export default function HomeBanner() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleButtonClick = () => {
    setIsFullScreen(true);
  };
  const handleClose = () => {
    setIsFullScreen(false);
  };
  return (
    <div style={{ position: "relative", height: "700px" }}>
      <Image
        src="https://images.prismic.io/quizlet-prod/6aa15201-1bbd-4bab-803d-93e7d2d4110e_Alt+Image+1+%281%29.png?auto=compress,format&rect=0,0,2880,1317&w=2880&h=1317" // Đường dẫn tới tệp ảnh trong thư mục public
        alt="Mô tả ảnh"
        style={{ width: "100%" }}
        layout="fill" // Thiết lập layout thành fill để lấp đầy không gian của container
        objectFit="cover" // Sử dụng objectFit để lấp đầy không gian hiển thị
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 150,
          width: "45%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <h1 className="text-[2.75rem] pb-[30px] w-[560px] leading-[56px]">
          Thẻ ghi nhớ kỹ thuật số và các công cụ học tốt nhất
        </h1>
        <h2 className="text-[1.25rem] pb-[30px] text-[#4255ff] w-[560px]">
          Tham gia cùng hơn 60 triệu học sinh đang sử dụng các thẻ ghi nhớ dựa
          trên nền tảng khoa học, các bài kiểm tra thử và lời giải chuyên gia
          của Quizlet để cải thiện điểm số và đạt được mục tiêu.
        </h2>
        <div>
          <Button
            onClick={handleButtonClick}
            bg="#ffcd1f"
            color="#282e3e"
            _hover={{
              bg: "#ffdc62",
            }}
          >
            Đăng ký miễn phí
          </Button>
          {isFullScreen && <FullScreenComponent onClose={handleClose} />}
        </div>
      </div>
    </div>
  );
}
