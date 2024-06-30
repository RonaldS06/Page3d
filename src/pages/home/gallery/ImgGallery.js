import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGSAP } from "@gsap/react";
import { Card, CardBody } from "@nextui-org/card";
import gsap from "gsap";
const ImgGallery = () => {
    useGSAP(() => {
        gsap.fromTo(".textScroll", {
            y: 30,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 3,
            delay: 0.3,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".textScroll",
                start: "top 90%",
                end: "top 0px",
                scrub: 5,
            },
        });
    });
    return (_jsxs("section", { className: "bg-gradientbanner max-w-[1600px] mx-auto grid grid-rows-1 my-5 py-10 px-5 md:px-10", children: [_jsx("h1", { className: "capitalize text-4xl font-bold text-center text-primary-500", children: "Galeria destacada" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 my-6 pt-10", children: [_jsx(Card, { className: "py-4 order-2 md:order-1", children: _jsx(CardBody, { className: "overflow-visible", children: _jsx("img", { src: "public/200.gif", className: "w-full h-[450px] object-cover rounded-lg", alt: "imagenogif" }) }) }), _jsx("div", { className: "flex flex-col gap-40 order-1 md:order-2", children: _jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("h4", { className: " text-lg font-bold textScroll", children: "HOY" }), _jsx("h1", { className: "text-6xl font-bold", children: _jsxs("span", { className: "text-success-500 capitalize textScroll", children: ["imagen del d\u00EDa", " "] }) }), _jsx("h2", { className: "text-3xl font-bold textScroll", children: "Pikachu" }), _jsx("p", { className: "text-base font-bodyFont leading-6 tracking-wide textScroll", children: "Descripcion de pikachu" }), _jsx("p", { className: "font-bodyFont italic text-sm textScroll", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga quod, dolorem ducimus neque tempore fugiat sapiente illum corrupti, dicta, nihil nobis! Tempore voluptates voluptatibus fugiat. Quae asperiores corporis deleniti. Nihil illum mollitia ullam quod itaque asperiores id impedit ipsum sint nobis qui, quaerat repellendus distinctio! Ipsam incidunt, veritatis aliquid tempore reiciendis voluptatibus? Assumenda, eum? Ducimus excepturi optio exercitationem quaerat. Commodi iure consectetur mollitia, facere voluptates totam tempora ea maxime, consequuntur minima veritatis repellendus optio? Accusantium repudiandae nostrum sequi quas ea vel architecto rem, cumque, culpa, voluptatem inventore aperiam ad. Est excepturi velit hic amet repellendus, ducimus quae! Ab ad sint vitae deleniti, voluptatem nulla beatae cupiditate eaque debitis hic, dolorum quas animi vel, molestias ea. Quibusdam quas quae laudantium? Repudiandae recusandae hic accusantium. Maxime fugit consectetur totam architecto harum assumenda eveniet quo iure a eaque! Tempore quibusdam nobis sequi earum recusandae commodi, necessitatibus quos ipsa impedit repudiandae temporibus ad." })] }) })] })] }));
};
export default ImgGallery;
