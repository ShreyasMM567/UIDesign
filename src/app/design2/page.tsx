import Image from "next/image";

export default function Design2() {
  return (
    <main className="overflow-x-hidden flex mx-auto place-items-center max-w-[1440px]">
      <div className="grid grid-cols-12">
        <div className="col-span-7 row-start-1 row-span-1 relative left-[30%] flex flex-col p-[5%]">
          <h1 className="m-0 text-[#363830] font-bold text-[88px]">
            Interior design
          </h1>
          <div className="">
            <span className="text-[#363830] text-pretty text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget.
            </span>
          </div>
          <div>
            <button className="mt-3 text-2xl text-white bg-[#363830] rounded-full p-4 w-[25%]">
              Explore
            </button>
          </div>
        </div>

        <div className="col-span-5 row-start-1 row-span-2 col-start-8">
          <Image
            src="/Images/Design2-images/image-right.png"
            alt="First-rectangle.png"
            height={512}
            width={537}
            className="object-contain max-w-full"
          />
        </div>

        <div className="relative bottom-[20%] row-start-3 row-span-2 col-span-5 pl-[10%]">
          <Image
            src="/Images/Design2-images/image-left.png"
            alt="First-rectangle.png"
            height={462}
            width={508}
            className="object-contain max-w-full"
          />
        </div>

        <div className="relative right-[15%] row-start-3 col-span-7">
          <div className="absolute text-[#363830] bg-white/30 z-10 px-[10%] py-[5%] rounded-full mt-[10%] grid grid-cols-12 gap-[68px]">
            <div className="flex flex-col col-span-4 gap-10">
              <div>
                <span className="border-b-2 border-[#363830] text-2xl font-bold pb-5">5.8</span>
              </div>
              <div>
                <span className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget.
                </span>
              </div>
            </div>
            <div className="flex flex-col col-span-4 gap-10">
              <div>
                <span className="border-b-2 border-[#363830] text-2xl font-bold pb-5">99+</span>
              </div>
              <div>
                <span className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget.
                </span>
              </div>
            </div>
            <div className="flex flex-col col-span-4 gap-10">
              <div>
                <span className="border-b-2 border-[#363830] text-2xl font-bold pb-5">110k</span>
              </div>
              <div>
                <span className="text-base">
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
