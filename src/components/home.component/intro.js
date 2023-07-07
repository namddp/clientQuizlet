import Image from "next/image";
import Link from "next/link";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function HomeIntro() {
  return (
    <div>
      <div
        id="intro-1"
        className="h-[240px] leading-[26px] flex justify-center items-center"
      >
        <h2 className="text-[#2e3856] text-[32px] font-[700] leading-[40px]">
          90% học sinh sử dụng Quizlet cho biết họ đã cải thiện được điểm số
        </h2>
      </div>
      <div id="intro-2" className="flex justify-center items-center py-[50px]">
        <div className="items-start pr-[70px] w-[500px]">
          <h2 className="text-[32px] font-[700] leading-[40px] text-[#2e3856]">
            Ghi nhớ nhanh hơn, miễn phí
          </h2>
          <p className="text-[#2e3856] text-[20px] leading-[28px] py-[24px]">
            Nghiên cứu cho thấy việc tự kiểm tra bằng thẻ ghi nhớ sẽ hiệu quả
            hơn việc đọc lại ghi chú của bạn. Từ toán học, y học đến ngôn ngữ
            hiện đại, Quizlet được học sinh sử dụng trong hơn 100 chủ đề khác
            nhau.
          </p>
          <button className="flex text-[#ffffff] px-[32px] py-[20px] items-center bg-[#4255ff] rounded-[8px] font-[600] justify-center leading-[24px]">
            Bắt đầu
          </button>
        </div>
        <Image
          src="https://images.prismic.io/quizlet-prod/130dc509-6919-47bc-b27d-17f600a41b0c_IntlFirstSlice.png?auto=compress,format"
          alt="Mô tả ảnh"
          width={500}
          height={500}
        />
      </div>
      <div id="intro-3" className="flex justify-center items-center py-[50px]">
        <Image
          src="https://images.prismic.io/quizlet-prod/1d359d1f-be06-481d-af18-30a4d93b3b0f_commute-image.png?auto=compress,format&rect=0,0,1001,1000&w=1001&h=1000"
          alt="Mô tả ảnh"
          width={500}
          height={500}
        />
        <div className="items-start pl-[70px] w-[500px]">
          <h2 className="text-[32px] font-[700] leading-[40px] text-[#2e3856]">
            Thời gian đi lại hôm qua,hôm nay lại là buổi học
          </h2>
          <p className="text-[#2e3856] text-[20px] leading-[28px] py-[24px]">
            Học ở mọi nơi – ngay cả khi ngoại tuyến – với ứng dụng iOS và
            Android của chúng tôi. Tiến trình của bạn được đồng bộ hóa giữa điện
            thoại và máy tính
          </p>
          <div className="flex justify-between items-center">
            <Link
              href="https://apps.apple.com/us/app/quizlet-flashcards-study-tools/id546473125"
              target="_blank"
            >
              <Image
                src="https://i-invdn-com.investing.com/landingPages/mobile_2018/vn/vn-badge-ios.png"
                alt="Mô tả ảnh"
                width={200}
                height={200}
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.quizlet.quizletandroid&hl=en&referrer=utm_source%3D&pli=1"
              target="_blank"
            >
              <Image
                src="https://lh3.googleusercontent.com/fDQJDxFZsHM07MIaoqj3vOTmFKm3QZWdP_dFcGgp0SFWPPJyis5eOMM50eZLPEh0b-_XC9KQFyJ4gCe5Fqd9WdZNUpzCNjUE92sWVG3gcXnP1nAsC2w=w1000-e365"
                alt="Mô tả ảnh"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
      </div>
      <div id="intro-4" className="flex justify-center items-center py-[50px]">
        <div className="items-start pr-[70px] w-[500px]">
          <span className="bg-[#ffcd1f] inline rounded-[4px] text-[12px] font-[600] leading-[19.5px] p-[4px]">
            QUIZLET PLUS
          </span>
          <h2 className="text-[32px] font-[700] leading-[40px] text-[#2e3856]">
            Sẵn sàng cho ngày thi với Học và Kiểm tra
          </h2>
          <p className="text-[#2e3856] text-[20px] leading-[28px] py-[24px]">
            Biến thẻ ghi nhớ của bạn thành các bài kiểm tra thử có thể tùy
            chỉnh. Vượt qua sự ghi nhớ thông thường với các loại câu hỏi thách
            thức khả năng của bạn.
          </p>
          <List spacing={3}>
            <ListItem className="flex pb-[30px]">
              <Image
                src="https://prismic-io.s3.amazonaws.com/quizlet-prod/8ec0178c-1b86-4698-b547-bcbe3e5172d4_learn.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="pl-[20px]">
                <h1 className="text-[20px] font-[700] leading-[28px]">
                  Ôn luyện bằng chế độ Học
                </h1>
                <p className="leading-[24px]">
                  Nhận phản hồi tức thì trong khi thực hành với các câu hỏi trắc
                  nghiệm, đúng hoặc sai, tự luận và hơn thế nữa.
                </p>
              </div>
            </ListItem>
            <ListItem className="flex pb-[30px]">
              <Image
                src="https://prismic-io.s3.amazonaws.com/quizlet-prod/69eba793-2788-47dd-a8a7-e89d723edbe7_Test.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="pl-[20px]">
                <h1 className="text-[20px] font-[700] leading-[28px]">
                  Làm bài kiểm tra
                </h1>
                <p className="leading-[24px]">
                  Học tập hiệu quả với các bài kiểm tra thử để bạn sẵn sàng cho
                  kỳ thi.
                </p>
              </div>
            </ListItem>
            <ListItem className="flex pb-[30px]">
              <Image
                // src="https://cdn-icons-png.flaticon.com/512/858/858045.png"
                src="https://prismic-io.s3.amazonaws.com/quizlet-prod/5364d9dd-a28d-41ca-a5d1-308c49aa0f49_Smart+Grading.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="pl-[20px]">
                <h1 className="text-[20px] font-[700] leading-[28px]">
                  Truy cập chấm điểm thông minh
                </h1>
                <p className="leading-[24px]">
                  Tính năng chấm điểm thông minh của Quizlet đảm bảo bạn không
                  bị chấm sai vì những lỗi nhỏ.
                </p>
              </div>
            </ListItem>
          </List>
          <button className="flex text-[#ffffff] px-[24px] py-[12px] items-center bg-[#4255ff] rounded-[8px] font-[600] justify-center leading-[24px]">
            Thử miễn phí Học và Kiểm tra
          </button>
        </div>
        <Image
          src="https://images.prismic.io/quizlet-prod/d1d625f2-24d7-4434-bc06-b2562e4d659c_LearnandTestINTL-web.gif?auto=compress,format"
          alt="Mô tả ảnh"
          width={500}
          height={500}
        />
      </div>
      <div id="intro-5" className="flex justify-center items-center py-[50px]">
        <Image
          src="https://images.prismic.io/quizlet-prod/f26af523-4f77-4676-9646-e437ab1e7062_homepageexpert2.gif?auto=compress,format&rect=0,0,1080,1456&w=1080&h=1456"
          alt="Mô tả ảnh"
          width={500}
          height={500}
        />
        <div className="items-start pl-[70px] w-[500px]">
          <span className="bg-[#ffcd1f] inline rounded-[4px] text-[12px] font-[600] leading-[19.5px] p-[4px]">
            QUIZLET PLUS
          </span>
          <h2 className="text-[32px] font-[700] leading-[40px] text-[#2e3856]">
            Nhận trợ giúp cho bài tập về nhà với lời giải chuyên gia
          </h2>
          <p className="text-[#2e3856] text-[20px] leading-[28px] py-[24px]">
            Các lời giải chuyên gia Quizlet hướng dẫn cho bạn cách tiếp cận từng
            bước để giải quyết các câu hỏi khó. Tìm hàng triệu lời giải trong 64
            chủ đề.
          </p>
          <List spacing={3}>
            <ListItem className="flex pb-[30px]">
              <Image
                src="https://prismic-io.s3.amazonaws.com/quizlet-prod/d6cecb4b-2807-42e7-9d31-1d7f22c02987_Textbook+Solutions.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="pl-[20px]">
                <h1 className="text-[20px] font-[700] leading-[28px]">
                  Hàng nghìn cuốn sách giáo khoa
                </h1>
                <p className="leading-[24px]">
                  Tìm lời giải cho các câu hỏi trong sách giáo khoa về toán,
                  khoa học, kinh doanh và hơn thế nữa.
                </p>
              </div>
            </ListItem>
            <ListItem className="flex pb-[30px]">
              <Image
                src="https://prismic-io.s3.amazonaws.com/quizlet-prod/0e684f93-8be7-46bc-b970-0ce888ba9bf7_Solutions.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="pl-[20px]">
                <h1 className="text-[20px] font-[700] leading-[28px]">
                  Chuyên gia biên soạn
                </h1>
                <p className="leading-[24px]">
                  Mỗi lời giải sách giáo khoa đều được biên soạn cẩn thận và
                  kiểm tra kỹ lưỡng bởi đội ngũ chuyên gia của chúng tôi.
                </p>
              </div>
            </ListItem>
            <ListItem className="flex pb-[30px]">
              <Image
                src="https://prismic-io.s3.amazonaws.com/quizlet-prod/86d561c3-c0c5-47b6-a75e-a3d85fc64709_Step+by+Step.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <div className="pl-[20px]">
                <h1 className="text-[20px] font-[700] leading-[28px]">
                  Học từng bước
                </h1>
                <p className="leading-[24px]">
                  Đừng chỉ ghi nhớ, hãy hiểu rõ! Tiết lộ từng bước một để nắm
                  đảm bảo nắm rõ, và xem thử lời giải miễn phí từ mọi đầu sách
                  giáo khoa.
                </p>
              </div>
            </ListItem>
          </List>
          <button className="flex text-[#ffffff] px-[24px] py-[12px] items-center bg-[#4255ff] rounded-[8px] font-[600] justify-center leading-[24px]">
            Khám phá lời giải miễn phí
          </button>
        </div>
      </div>
    </div>
  );
}
