import Image from "next/image";
export default function LeftImage(){
    return(
        <Image
            src="/Images/lower-left-image.png"
            alt="Lower-left-image.png"
            height={304}
            width={676}
            // layout="intrinsic"
            className="object-contain"
          />
    )
}