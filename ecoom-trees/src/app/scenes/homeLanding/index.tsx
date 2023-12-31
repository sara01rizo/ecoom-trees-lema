import useMediaQuery from "@/app/hooks/useMediaQuery";
import { SelectedPage } from "@/app/shared/types";
import ActionButton from "@/app/shared/ActionButton";
import HomeGraphic from "@/app/assets/HomeGraphic.png";
import HomeText from "@/app/assets/HomeText.svg";
import AbstractWaves from "@/app/assets/AbstractWaves.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
// import { loadGetInitialProps } from "next/dist/shared/lib/utils";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="mt-7 mb-7 gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <Image alt="HomeText" src={HomeText} />
              </div>
            </div>

            <p className="mt-8 text-base">
              First Ecoom Trees. Incredible Non Profit Trees World. Dimension Class
              Territory to get the Tree Spirit That you should Dream of.. Get Your Tree
              come True.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Jump in!
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-secondary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <Image alt="HomeGraphic" src={HomeGraphic} className="rounded mb-7" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-24">
              <Image alt="AbstractWaves" src={AbstractWaves} />
              <Image alt="AbstractWaves" src={AbstractWaves} />
              <Image alt="AbstractWaves" src={AbstractWaves} />
              <Image alt="AbstractWaves" src={AbstractWaves} />
              <Image alt="AbstractWaves" src={AbstractWaves} />
              <Image alt="AbstractWaves" src={AbstractWaves} />
              <Image alt="AbstractWaves" src={AbstractWaves} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
