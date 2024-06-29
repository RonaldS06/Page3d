import LadoDerecho from "./LadoDerecho";
import LadoIzquierdo from "./LadoIzquierdo";

const Home = () => {
  return (
    <>
      <section className="bg-banner max-w-[1600px] mx-auto pt-10 pb-7 px-5 md:px-10 flex flex-col gap-10 lg:flex-row items-center font-titleFont">
        <LadoIzquierdo />
        <LadoDerecho />
      </section>
    </>
  );
};

export default Home;
