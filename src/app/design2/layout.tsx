import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Design1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-br from-[#C8CCCF] to-[#97A3A3]`}>{children}</body>
    </html>
  );
}
