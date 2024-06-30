import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { ContactShadows, Environment, OrbitControls, PresentationControls, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Globe from "./Globe";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Tierra = () => {
    useGSAP(() => {
        gsap.fromTo(".tierra", {
            y: -400,
            opacity: 0,
            display: "none",
            // rotation: 360,
        }, {
            scrollTrigger: {
                trigger: ".tierra",
                start: "top center",
                end: "top 100px",
                scrub: 3,
            },
            y: 0,
            ease: "none",
            opacity: 1,
            display: "block",
            // duration: 3,
        });
    });
    return (_jsx(Canvas, { camera: { position: [0, 0, 10] }, className: "tierra", children: _jsxs(PresentationControls, { global: true, config: { mass: 2, tension: 500 }, snap: { mass: 4, tension: 1500 }, polar: [-Math.PI / 3, Math.PI / 3], azimuth: [-Math.PI / 11.4, Math.PI / 2], children: [_jsx(OrbitControls, { enableZoom: false, autoRotate: true, autoRotateSpeed: 0.65 }), _jsx("directionalLight", {}), _jsx("ambientLight", { intensity: 3.5 }), _jsx(Globe, { "rotation-y": 10 }), _jsx(Environment, { preset: "apartment" }), _jsx(ContactShadows, { position: [1, 1, 1], opacity: 1, scale: 10, blur: 1, far: 2 })] }) }));
};
export default Tierra;
