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
        <div className="row-start-2 md:row-start-1 p-[10%] md:p-0 place-self-center md:ps-[20%] md:row-span-2 col-span-12 md:col-span-5 flex flex-col items-center md:items-start text-white gap-10 md:gap-5">
          <div className="flex justify-center md:justify-start">
            <span className="leading-tight text-center md:text-left text-7xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight xl:text-8xl xl:leading-tight font-black">
              Discover the power of design
            </span>
          </div>
          <div className="sm:text-3xl text-center md:text-left md:text-base lg:text-lg xl:text-xl text-pretty font-thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            error ea unde quam! Beatae fuga vel ullam placeat, incidunt nobis
            veritatis reiciendis error tempore.
          </div>
          <button className="p-2 lg:p-3 w-[40%] text-lg lg:text-2xl rounded-xl border bg-white text-[#010625] font-bold">
            Explore
          </button>
        </div>

        {/* <div className="row-span-1 place-self-start justify-self-center col-span-7 flex gap-[5%]"> */}
        <div className="pb-[5%] md:pb-0 grid grid-cols-6 col-span-12 md:col-start-6 md:col-span-7 gap-10 mx-10">
          <div className="col-span-3 row-span-1 justify-self-center">
            <Image
              src="/Images/Rectangle-27.png"
              alt="First-rectangle.png"
              height={473}
              width={348}
              className="object-contain max-w-full"
            />
          </div>
          <div className="col-span-3 row-span-1 justify-self-center">
            <Image
              src="/Images/Rectangle-31.png"
              alt="First-rectangle.png"
              height={473}
              width={348}
              className="object-contain max-w-full"
            />
          </div>
        </div>
        {/* </div> */}

        <div className="p-[5%] md:p-0 justify-self-center md:ps-[10%] place-self-start col-span-12 md:row-start-3 md:row-span-1 md:col-span-7">
          <Image
            src="/Images/Lower-left-image.png"
            alt="Lower-left-image.png"
            height={304}
            width={676}
            className="object-contain max-w-full"
          />
        </div>

        <div className="p-[10%] md:p-0 md:ps-[15%] md:pt-[25%] col-span-12 md:row-span-2 md:col-span-4 md:row-start-2 md:col-start-8 flex flex-col gap-7 md:gap-3 lg:gap-5 xl:gap-7 text-white text-pretty">
          <div className="w-[96px] h-[8px] bg-white rounded-full"></div>
          <div className="font-bold text-4xl md:text-2xl xl:text-4xl">01</div>
          <div className="font-thin text-2xl md:text-sm lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur unde enim?
          </div>
          <div className="font-bold text-4xl md:text-2xl xl:text-4xl">02</div>
          <div className="font-thin text-2xl md:text-sm lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur unde enim?
          </div>
          <div className="font-bold text-4xl md:text-2xl xl:text-4xl">03</div>
          <div className="font-thin text-2xl md:text-sm lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur unde enim?
          </div>
        </div>

        <div className="p-[5%] col-span-12 md:row-start-4 md:col-span-12 justify-self-center grid grid-cols-12 gap-5">
          <Image
            src="/Images/Flex-image-1.png"
            alt="First-rectangle.png"
            width={412}
            height={260}
            className="object-contain col-span-4"
          />
          <Image
            src="/Images/Flex-image-2.png"
            alt="First-rectangle.png"
            width={412}
            height={260}
            className="object-contain col-span-4"
          />
          <Image
            src="/Images/Flex-image-3.png"
            alt="First-rectangle.png"
            width={412}
            height={260}
            className="object-contain col-span-4"
          />
        </div>
      </div>
    </main>
  );
}
