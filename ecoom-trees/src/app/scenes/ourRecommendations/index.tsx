import { SelectedPage, RecommendationType } from "@/app/shared/types";
import PexelsKenStringer from "@/app/assets/PexelsKenStringer.jpg";
import PexelsPixabay from "@/app/assets/PexelsPixabay.jpg";
import PexelsVladChetan from "@/app/assets/PexelsVladChețan.jpg";
import PexelsFelixMittermeier from "@/app/assets/PexelsFelixMittermeier.jpg";
import PexelsYanKrukau from "@/app/assets/PexelsYanKrukau.jpg";
import { motion } from "framer-motion";
import HText from "@/app/shared/HText";
import Image from "next/image";
import Recommendation from "./Recommendation";
import { StaticImageData } from "next/image";

const recommendations: Array<RecommendationType> = [
  {
    name: "Reforestation as priority",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: PexelsKenStringer,
  },
  {
    name: "Species of Trees",
    image: PexelsYanKrukau,
  },
  {
    name: "Identifying Trees Species",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: PexelsPixabay,
  },
  {
    name: "Days Off in Trees",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: PexelsVladChetan,
  },
  {
    name: "Find more Fun Facts About Trees",
    image: PexelsKenStringer,
  },
  {
    name: "Famous Trees",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: PexelsFelixMittermeier,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurRecommendations = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-secondary-500 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurRecommendations)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR RECOMMENDATIONS</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {recommendations.map((item: RecommendationType, index) => (
              <Recommendation
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurRecommendations;
