import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LadoIzquierdo = () => {
  useGSAP(() => {
    gsap.to(".title", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
      delay: 1,
      color: "red",
    });

    gsap.fromTo(
      ".parrafo",
      {
        opacity: 0,
        y: 50,
      },
      {
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        delay: 0.3,
        stagger: 0.2,
      }
    );
  });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="title opacity-0 translate-y-8 text-lg font-bold text-yellow-400">
          BIENVENIDO A ESTA WEB
        </h4>
        <h1 className="text-6xl font-bold">
          Explora{" "}
          <span className="text-primary-500 capitalize parrafo">
            esta página 3D
          </span>
        </h1>
        <h2 className="text-4xl font-bold capitalize parrafo">
          Pasa el cursor sobre el objeto
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide parrafo">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          deleniti ratione illo dolorum dolor sapiente placeat tempora
          dignissimos repudiandae recusandae esse accusantium sequi culpa amet
          doloribus labore veritatis voluptas soluta rem nesciunt, laudantium,
          reiciendis assumenda! Laboriosam, nulla reprehenderit? Est officia
          magni qui quisquam, nostrum cumque autem culpa? Earum, ex aliquam?
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide italic parrafo">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sed
          harum ducimus laboriosam, velit in, similique ipsam earum quasi
          debitis nostrum non cupiditate. A hic vitae at nobis est. Ullam,
          deleniti porro. Quasi cum molestiae hic facere. Distinctio,
          reprehenderit? Ut.
        </p>
      </div>
    </div>
  );
};

export default LadoIzquierdo;
