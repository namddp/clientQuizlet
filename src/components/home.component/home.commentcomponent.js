import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
const comments = [
  {
    src: "https://images.prismic.io/quizlet-prod/8568c5a7-2554-43c5-81bf-322169240769_Image+%2812%29.png?auto=compress,format&rect=0,3,310,228&w=286&h=210",
    cmt: "Quizlet đã tiếp sức cho thành công của tôi từ khi còn học trung học. Những tấm thẻ ghi nhớ có thể dùng ngay khi đang di chuyển đang hỗ trợ đắc lực cho tôi ở đại học",
    info: "Hamza, năm cuối, Y học",
  },
  {
    src: "https://images.prismic.io/quizlet-prod/17a32b86-e009-47f6-acb0-cdc8e89d35c4_06Sydney+1.png?auto=compress,format&rect=0,10,930,683&w=286&h=210",
    cmt: "Chế độ Học là điều tuyệt vời nhất từng có từ Quizlet. Nó hiển thị cho bạn các thuật ngữ theo cách dễ ghi nhớ nhất.",
    info: "Sydney, năm hai, Sinh học",
  },
  {
    src: "https://images.prismic.io/quizlet-prod/8160414d-ed6b-41ce-9654-18fc839916f6_oscar+and+owen+photo+for+us+homepage_fullsize+%281%29+1.png?auto=compress,format&rect=0,8,793,582&w=286&h=210",
    cmt: "Tất cả bạn bè của chúng tôi đều sử dụng Quizlet. Đây là một cách học thú vị và chúng tôi thấy tự tin hơn khi chuẩn bị cho kỳ thi giữa kỳ và cuối kỳ.",
    info: "Owen & Oscar, học sinh năm hai phổ thông",
  },
];
export default function HomeComment() {
  return (
    <div>
      <h1 className="text-[32px] font-[700] leading-[40px] text-center py-[100px]">
        Các học sinh nói gì về Quizlet
      </h1>
      <div className="flex justify-center">
        {comments.map((item, idx) => {
          return (
            <Card maxW="sm" key={idx} className="w-[300px]">
              <CardBody>
                <Image
                  src={item.src}
                  alt="pic"
                  width={300}
                  height={300}
                  borderRadius="lg"
                />
                <Heading
                  className="font-[700] leading-[24px] py-[30px]"
                  size="md"
                >
                  "{item.cmt}"
                </Heading>
                <Text>{item.info}</Text>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
