import PowerOfDesign from "../components/powerofdesign";
import Image from "next/image";
export default function Design1() {
  return (
    <div className="bg-[#010625] h-full w-screen overflow-x-hidden flex justify-center">
      <div className="px-[5%] grid grid-cols-[40%,60%] grid-rows-2 place-items-center w-full w-max-full custom:w-[1440px] custom:h-[1457px]">
        <div className="">
          <PowerOfDesign />
        </div>
        <div className="flex gap-[5%] self-start">
          <Image
            src="/Images/Rectangle-27.png"
            alt="First-rectangle.png"
            height={473}
            width={348}
            // layout="responsive"
            className="object-contain"
          />
          <Image
            src="/Images/Rectangle-31.png"
            alt="First-rectangle.png"
            height={473}
            width={348}
            // layout="responsive"
            className="object-contain"
          />
        </div>
        <div>HIdughigh</div>
      </div>
    </div>
  );
}
