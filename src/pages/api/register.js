import { connectToDatabase } from "@/components/UserAuthen/utils/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Kết nối với MongoDB
      const { db } = await connectToDatabase();

      // Lấy thông tin từ yêu cầu
      const { username, dayOfBirth, monthOfBirth, yearOfBirth } = req.body;

      // Kiểm tra nếu ngày sinh và tên người dùng đã được cung cấp
      if (!dayOfBirth || !monthOfBirth || !yearOfBirth || !username) {
        return res
          .status(400)
          .json({ message: "Vui lòng cung cấp đầy đủ thông tin" });
      }

      // Thực hiện lưu thông tin vào MongoDB
      await db.collection("users").insertOne({
        username,
        dayOfBirth,
        monthOfBirth,
        yearOfBirth,
      });

      // Phản hồi thành công
      return res.status(200).json({ message: "Đăng ký thành công" });
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
      return res.status(500).json({ message: "Đã xảy ra lỗi" });
    }
  }

  // Phản hồi phương thức không hợp lệ
  return res.status(405).json({ message: "Phương thức không được chấp nhận" });
}
