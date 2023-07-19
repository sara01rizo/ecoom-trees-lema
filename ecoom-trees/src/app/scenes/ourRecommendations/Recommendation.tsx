import { StaticImageData } from "next/image"
import Image from "next/image";

type Props = {
  name: string;
  description?: string;
  image: string | StaticImageData;
};

const Recommendation = ({ name, description, image, }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-100 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <Image id="anchor" alt={`${image}`} src={image} className="rounded"/>
    </li>
  );
};

export default Recommendation;
