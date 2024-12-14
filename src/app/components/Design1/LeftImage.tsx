import Image from "next/image";
export default function LeftImage() {
  return (
    <div className="p-[5%] md:p-0 justify-self-center md:ps-[10%] place-self-start col-span-12 md:row-start-3 md:row-span-1 md:col-span-7">
      <Image
        src="/Images/Lower-left-image.png"
        alt="Lower-left-image.png"
        height={304}
        width={676}
        className="object-contain max-w-full"
      />
    </div>
  );
}
