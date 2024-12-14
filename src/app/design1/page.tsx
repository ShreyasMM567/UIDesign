import PowerOfDesign from "../components/Design1/PowerOfDesign";
import RightImage from "../components/Design1/RightImage";
import LeftImage from "../components/Design1/LeftImage";
import RightColumn from "../components/Design1/RightColumn";
import Image from "next/image";
import BottomImage from "../components/Design1/BottomImage";

export default function Design1() {
  return (
    <main className="bg-[#010625] max-w-full overflow-x-hidden flex flex-col items-center custom:w-[1440px]">
      <div className="grid grid-cols-12">
        <div className="place-self-center ps-[20%] pt-[10%] row-span-2 col-span-5 flex flex-col text-white gap-5">
          <div className="">
            <span className="text-8xl leading-tight font-black">
              Discover the power of design
            </span>
          </div>
          <div className="text-xl text-pretty font-thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            error ea unde quam! Beatae fuga vel ullam placeat, incidunt nobis
            veritatis reiciendis error tempore.
          </div>
          <button className="p-3 w-[40%] text-2xl rounded-xl border bg-white text-[#010625] font-bold">
            Explore
          </button>
        </div>

        <div className="row-span-1 place-self-start justify-self-center col-span-7 flex gap-[5%]">
          <Image
            src="/Images/Rectangle-27.png"
            alt="First-rectangle.png"
            height={473}
            width={348}
            className="object-contain max-w-full"
          />
          <Image
            src="/Images/Rectangle-31.png"
            alt="First-rectangle.png"
            height={473}
            width={348}
            className="object-contain max-w-full"
          />
        </div>

        <div className="ps-[10%] place-self-start row-start-3 row-span-1 col-span-7">
          <Image
            src="/Images/Lower-left-image.png"
            alt="Lower-left-image.png"
            height={304}
            width={676}
            className=""
          />
        </div>

        <div className="ps-[15%] pt-[25%] row-span-2 col-span-4 row-start-2 col-start-8 flex flex-col gap-7 text-white text-pretty">
          <div className="w-[96px] h-[8px] bg-white rounded-full"></div>
          <div className="font-bold text-4xl">01</div>
          <div className="font-thin text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur unde enim?
          </div>
          <div className="font-bold text-4xl">02</div>
          <div className="font-thin text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur unde enim?
          </div>
          <div className="font-bold text-4xl">03</div>
          <div className="font-thin text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur unde enim?
          </div>
        </div>

        <div className="p-[5%] row-start-4 col-span-12 justify-self-center flex gap-5">
          <Image
            src="/Images/Flex-image-1.png"
            alt="First-rectangle.png"
            width={412}
            height={260}
            className=""
          />
          <Image
            src="/Images/Flex-image-2.png"
            alt="First-rectangle.png"
            width={412}
            height={260}
            className=""
          />
          <Image
            src="/Images/Flex-image-3.png"
            alt="First-rectangle.png"
            width={412}
            height={260}
            className=""
          />
        </div>
      </div>
    </main>
  );
}
