import Image from "next/image";
export default function RightImage() {
  return (
    <div className="flex gap-[5%] lg:w-[80%] xl:w-[90%] custom:w-full">
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
  );
}
