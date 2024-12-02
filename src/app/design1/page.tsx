import PowerOfDesign from "../components/PowerOfDesign";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import RightColumn from "../components/RightColumn";
import Image from "next/image";

export default function Design1() {
  return (
    <div className="bg-[#010625] max-w-full overflow-x-hidden flex flex-col items-center">
      <div className="px-[5%] grid grid-cols-[40%,60%] gap-10 place-items-center w-full w-max-full custom:w-[1440px]">
        <div className="ps-[5%] mt-16">
          <PowerOfDesign />
        </div>
        <div className="flex gap-[5%] self-start w-full lg:w-[70%] custom:w-[100%]">
          <RightImage />
        </div>
        <div className="grid grid-cols-[60%,40%] self-start w-full col-span-2">
          <LeftImage />
          <RightColumn />
        </div>
      </div>
      <div className="my-[5%] flex custom:gap-14 xl:gap-10 2xl:gap-12">
      <Image
            src="/Images/Flex-image-1.png"
            alt="First-rectangle.png"
            height={412}
            width={260}
            // layout="intrinsic"
            className="object-contain w-full"
          />
          <Image
            src="/Images/Flex-image-2.png"
            alt="First-rectangle.png"
            height={412}
            width={260}
            // layout="intrinsic"
            className="object-contain w-full"
          />
          <Image
            src="/Images/Flex-image-3.png"
            alt="First-rectangle.png"
            height={412}
            width={260}
            // layout="intrinsic"
            className="object-contain w-full"
          />
      </div>
    </div>
  );
}
