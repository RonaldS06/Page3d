import Tierra from "./Tierra";
const Planet = () => {
  return (
    <section className="bg-banner2 max-w-[1600px] mx-auto bg-commets w-full pt-10 pb-7 px-5 md:px-10 font-titleFont">
      <h1 className="capitalize text-4xl font-bold text-center text-primary-500">
        Planetas
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row items-center pt-10 md:pt-0">
        <div className="w-full lg:w-1/2 flex flex-col gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold textScroll">
              Explorar{" "}
              <span className="text-green-600 capitalize textScroll">
                Tierra
              </span>
            </h1>
            <h2 className="text-4xl font-bold capitalize">
              una plataforma mas interativa
            </h2>
            <p className="text-lg italic font-bodyFont font-semibold textScroll">
              Satellites serve as humanity's vigilant guardians, silently
              orbiting above, their watchful eyes scanning the Earth's surface,
              monitoring weather patterns, tracking environmental changes, and
              facilitating global communication. They bridge the vast distances
              between remote corners of the world, enabling seamless
              connectivity and offering invaluable insights into the mysteries
              of the cosmos, from distant galaxies to our own planet's intricate
              ecosystems.
            </p>
            <p className="text-base font-bodyFont leading-6 tracking-wide textScroll">
              Satellites, orbiting high above Earth, are instrumental in
              communication, navigation, weather monitoring, and scientific
              research. These artificial bodies traverse the cosmos, providing
              critical data, enabling global connectivity, and expanding our
              understanding of space, making profound impacts on industries,
              economies, and everyday life.
            </p>
          </div>
        </div>
        <div className="hidden z-10 w-full lg:w-1/2 md:flex justify-center items-center h-[400px] md:h-[600px] order-2">
          <Tierra />
        </div>
      </div>
    </section>
  );
};

export default Planet;
