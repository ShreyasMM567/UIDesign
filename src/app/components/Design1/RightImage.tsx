import Image from "next/image";
export default function RightImage() {
  return (
    <div className="pb-[5%] md:pb-0 grid grid-cols-6 col-span-12 md:col-start-6 md:col-span-7 gap-10 mx-10">
      <div className="col-span-3 row-span-1 justify-self-center">
        <Image
          src="/Images/Design1-images/Rectangle-27.png"
          alt="First-rectangle.png"
          height={473}
          width={348}
          className="object-contain max-w-full"
        />
      </div>
      <div className="col-span-3 row-span-1 justify-self-center">
        <Image
          src="/Images/Design1-images/Rectangle-31.png"
          alt="First-rectangle.png"
          height={473}
          width={348}
          className="object-contain max-w-full"
        />
      </div>
    </div>
  );
}
