import Image from "next/image";
export default function LeftImage(){
    return(
        <Image
            src="/Images/Lower-left-image.png"
            alt="Lower-left-image.png"
            height={304}
            width={676}
            // layout="intrinsic"
            className="object-contain md:w-[70%] lg:w-[80%] xl:w-[90%] max-w-full"
          />
    )
}