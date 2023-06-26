export default function Recently() {
  return (
    <div className="py-[40px]">
      <h1 className="ml-[150px] font-[700] leading-[24px]">Gần đây</h1>
      <div className="flex relative justify-between items-center bg-[#ffffff] mx-[150px] my-[24px] rounded-[8px] leading-[26px]">
        <div className="text-[#2e3856] mx-[auto] py-[24px]  flex flex-col items-center ">
          <h1 className="text-[24px] font-[700] leading-[32px]">
            Bạn chưa có học phần nào
          </h1>
          <p className="leading-[24px]">
            Các học phần bạn đã tạo hoặc đã học sẽ hiển thị ở đây.
          </p>
        </div>
      </div>
    </div>
  );
}
