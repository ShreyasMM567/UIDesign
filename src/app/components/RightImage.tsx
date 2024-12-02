import Image from "next/image";
export default function RightImage() {
  return (
    <>
      <Image
            src="/Images/Rectangle-27.png"
            alt="First-rectangle.png"
            height={473}
            width={348}
            layout="responsive"
            className="object-contain w-full"
          />
          <Image
            src="/Images/Rectangle-31.png"
            alt="First-rectangle.png"
            height={473}
            width={348}
            layout="responsive"
            className="object-contain w-full"
          />
    </>
  );
}
