/* import gsap from "gsap";
import { useGSAP } from "@gsap/react"; */
import { Card, CardBody, CardHeader } from "@nextui-org/card";

const ImgGallery = () => {
  /*   useGSAP(() => {
    gsap.fromTo(
      ".parrafo2",
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
        color: "red",
      }
    );
  }); */

  return (
    <section className="bg-gradientbanner max-w-[1600px] mx-auto grid grid-rows-1 my-5 py-10 px-5 md:px-10">
      <h1 className="capitalize text-4xl font-bold text-center text-primary-500">
        Featured Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-6 pt-10">
        <Card className="py-4 order-2 md:order-1">
          <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-start"></CardHeader>
          <CardBody className="overflow-visible">
            <img
              src="./public/200.gif"
              className="w-full h-[450px] object-cover rounded-lg"
              alt=""
            />
          </CardBody>
        </Card>
        <div className="flex flex-col gap-40 order-1 md:order-2">
          <div className="flex flex-col gap-5">
            <h4 className=" text-lg font-bold text-red-600 parrafo2 parrafo">
              TODAY
            </h4>
            <h1 className="text-6xl font-bold">
              <span className="text-success-500 capitalize parrafo">
                Image Of The Day
              </span>
            </h1>
            <h2 className="text-3xl font-bold parrafo">Pikachu</h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide parrafo">
              Descripcion de pikachu
            </p>
            <p className="font-bodyFont italic text-sm parrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga
              quod, dolorem ducimus neque tempore fugiat sapiente illum
              corrupti, dicta, nihil nobis! Tempore voluptates voluptatibus
              fugiat. Quae asperiores corporis deleniti. Nihil illum mollitia
              ullam quod itaque asperiores id impedit ipsum sint nobis qui,
              quaerat repellendus distinctio! Ipsam incidunt, veritatis aliquid
              tempore reiciendis voluptatibus? Assumenda, eum? Ducimus excepturi
              optio exercitationem quaerat. Commodi iure consectetur mollitia,
              facere voluptates totam tempora ea maxime, consequuntur minima
              veritatis repellendus optio? Accusantium repudiandae nostrum sequi
              quas ea vel architecto rem, cumque, culpa, voluptatem inventore
              aperiam ad. Est excepturi velit hic amet repellendus, ducimus
              quae! Ab ad sint vitae deleniti, voluptatem nulla beatae
              cupiditate eaque debitis hic, dolorum quas animi vel, molestias
              ea. Quibusdam quas quae laudantium? Repudiandae recusandae hic
              accusantium. Maxime fugit consectetur totam architecto harum
              assumenda eveniet quo iure a eaque! Tempore quibusdam nobis sequi
              earum recusandae commodi, necessitatibus quos ipsa impedit
              repudiandae temporibus ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgGallery;
