import Image from "next/image";

export default function Design2() {
  return (
    <main className="overflow-x-hidden flex mx-auto place-items-center max-w-[1440px]">
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-12 place-items-center">

        <div className="lg:col-span-7 lg:row-start-1 lg:row-span-1 relative left:0 md:left-[25%] lg:left-[25%] xl:left-[25%] hd:left-[25%] custom:left-[30%] flex flex-col lg:p-[5%] gap-2 xl:gap-5">
          <h1 className="m-0 text-[#363830] font-bold text-8xl lg:text-7xl xl:text-[88px]">
            Interior design
          </h1>
          <div className="w-[90%]">
            <span className="text-[#363830] text-pretty md:text-lg lg:text-lg xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget.
            </span>
          </div>
          <div>
            <button className="mt-3 md:text-base lg:text-2xl text-white bg-[#363830] rounded-full md:p-2 lg:p-4 md:w-[20%] lg:w-[25%]">
              Explore
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 lg:row-start-1 lg:row-span-2 lg:col-start-8 lg:pr-10">
          <Image
            src="/Images/Design2-images/image-right.png"
            alt="First-rectangle.png"
            height={512}
            width={537}
            className="object-contain max-w-full"
          />
        </div>

        <div className="relative lg:bottom-[20%] lg:row-start-3 lg:row-span-2 lg:col-span-5 lg:pl-[10%]">
          <Image
            src="/Images/Design2-images/image-left.png"
            alt="First-rectangle.png"
            height={462}
            width={508}
            className="object-contain max-w-full"
          />
        </div>

        <div className="transform lg:-translate-x-[15%] lg:row-start-3 lg:col-span-7">
          <div className="w-[110%] text-[#363830] bg-white/30 z-10 px-[10%] py-[5%] rounded-full mt-[10%] grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 hd:grid-cols-12 gap-[68px]">
            <div className="grid col-span-1 xl:col-span-2 hd:col-span-4 gap-10">
              <div>
                <span className="border-b-2 border-[#363830]  text-lg xl:text-2xl font-bold pb-5">5.8</span>
              </div>
              <div>
                <span className="text-xs lg:text-sm xl:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget.
                </span>
              </div>
            </div>
            <div className="grid col-span-1 xl:col-span-2 hd:col-span-4 gap-10">
              <div>
                <span className="border-b-2 border-[#363830]  text-lg xl:text-2xl font-bold pb-5">99+</span>
              </div>
              <div>
                <span className="text-xs lg:text-sm xl:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget.
                </span>
              </div>
            </div>
            <div className="grid col-span-1 xl:col-span-2 hd:col-span-4 gap-10">
              <div>
                <span className="border-b-2 border-[#363830]  text-lg xl:text-2xl font-bold pb-5">110k</span>
              </div>
              <div>
                <span className="text-xs lg:text-sm xl:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
