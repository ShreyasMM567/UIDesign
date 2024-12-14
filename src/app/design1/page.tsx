import PowerOfDesign from "../components/Design1/PowerOfDesign";
import RightImage from "../components/Design1/RightImage";
import LeftImage from "../components/Design1/LeftImage";
import RightColumn from "../components/Design1/RightColumn";
import Image from "next/image";
import BottomImage from "../components/Design1/BottomImage";

export default function Design1() {
  return (
    <main className="bg-[#010625] overflow-x-hidden flex mx-auto justify-center max-w-[1440px]">
      <div className="grid grid-cols-12">
        <PowerOfDesign />
        <RightImage />
        <LeftImage />
        <RightColumn />
        <BottomImage />
      </div>
    </main>
  );
}
