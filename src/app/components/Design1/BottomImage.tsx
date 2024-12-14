import Image from "next/image";

export default function BottomImage() {
  return (
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
  );
}
