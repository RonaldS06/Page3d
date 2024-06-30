import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const LadoIzquierdo = () => {
    useGSAP(() => {
        gsap.to(".title", {
            ease: "power1.inOut",
            opacity: 1,
            y: 0,
            delay: 2,
            color: "#4ade80",
        });
        gsap.fromTo(".parrafo", {
            opacity: 0,
            y: 50,
        }, {
            ease: "power1.inOut",
            opacity: 1,
            y: 0,
            delay: 0.3,
            stagger: 0.2,
        });
    });
    return (_jsx("div", { className: "w-full lg:w-1/2 flex flex-col gap-20", children: _jsxs("div", { className: "flex flex-col gap-5", children: [_jsx("h4", { className: "title opacity-0 translate-y-8 text-lg font-bold", children: "BIENVENIDO A ESTA WEB" }), _jsxs("h1", { className: "text-6xl font-bold", children: ["Explora", " ", _jsx("span", { className: "text-primary-500 capitalize parrafo", children: "esta p\u00E1gina 3D" })] }), _jsx("h2", { className: "text-4xl font-bold capitalize parrafo", children: "Pasa el cursor sobre el objeto" }), _jsx("p", { className: "text-base font-bodyFont leading-6 tracking-wide parrafo", children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem deleniti ratione illo dolorum dolor sapiente placeat tempora dignissimos repudiandae recusandae esse accusantium sequi culpa amet doloribus labore veritatis voluptas soluta rem nesciunt, laudantium, reiciendis assumenda! Laboriosam, nulla reprehenderit? Est officia magni qui quisquam, nostrum cumque autem culpa? Earum, ex aliquam?" }), _jsx("p", { className: "text-base font-bodyFont leading-6 tracking-wide italic parrafo", children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sed harum ducimus laboriosam, velit in, similique ipsam earum quasi debitis nostrum non cupiditate. A hic vitae at nobis est. Ullam, deleniti porro. Quasi cum molestiae hic facere. Distinctio, reprehenderit? Ut." })] }) }));
};
export default LadoIzquierdo;
