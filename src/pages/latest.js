import Hobby from "@/components/detail_personal/hobby";
import Recently from "@/components/detail_personal/recently";
import Accomplish from "@/components/detail_personal/accomplish";
export default function Latest() {
  return (
    <div className="bg-[#f6f7fb] py-[24px]">
      <Hobby />
      <Recently />
      <Accomplish />
    </div>
  );
}
