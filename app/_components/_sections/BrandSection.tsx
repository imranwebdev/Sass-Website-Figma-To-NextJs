import Image from "next/image";
import { inter } from "../_ui/fonts";
export default function BrandSection() {
  const imageUrl = [
    "/brandImages/unsplash.png",
    "/brandImages/notion.png",
    "/brandImages/intercom.png",
    "/brandImages/descript.png",
    "/brandImages/grammerly.png",
  ];
  return (
    <>
      <div className="brandSection py-16 md:py-10 lg:py-12 flex flex-col items-center justify-center gap-10">
        <h2
          className={`text-4xl text-center font-bold ${inter.className} antialiased`}
        >
          More than 25,000 teams use Collabs
        </h2>
        <div className="brands flex flex-wrap items-center justify-center gap-10">
          {imageUrl.map((url, index) => (
            <div className="images" key={index}>
              <Image
                src={url}
                width={120}
                height={0}
                alt="unsplash"
                className="w-120 md:w-28 lg:w-36 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
