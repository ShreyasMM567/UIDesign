import Image from "next/image";

export default function Design2() {
  return (
    <main className="overflow-x-hidden flex mx-auto place-items-center max-w-[1440px]">
      <div className="grid grid-cols-12">
        <div className="col-span-7 row-start-2 row-span-1 relative left-[25%] bottom-[30%] flex flex-col gap-5 p-10">
          <h1 className="m-0 text-[#363830] font-bold text-8xl">
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
            <button className="text-2xl text-white bg-[#363830] rounded-full p-4 w-[25%]">
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

        <div className="relative right-[20%] row-start-3 col-span-7  text-[#363830] bg-white/30 h-[50%] z-10 p-[6%] rounded-full mt-[10%] grid grid-cols-12 ">
            <div className="flex flex-col">

            </div>
            <div className="flex flex-col">
                
            </div>
            <div className="flex flex-col">
                
            </div>
        </div>
      </div>
    </main>
  );
}
