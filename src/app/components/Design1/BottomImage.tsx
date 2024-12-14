import Image from "next/image";

export default function BottomImage() {
  return (
    <div className="my-[5%] flex justify-center gap-[5%] ">
      <Image
        src="/Images/Flex-image-1.png"
        alt="First-rectangle.png"
        width={412}
        height={260}
        className="object-contain max-w-full"
      />
      <Image
        src="/Images/Flex-image-2.png"
        alt="First-rectangle.png"
        width={412}
        height={260}
        className="object-contain max-w-full"
      />
      <Image
        src="/Images/Flex-image-3.png"
        alt="First-rectangle.png"
        width={412}
        height={260}
        className="object-contain max-w-full"
      />
    </div>
  );
}
