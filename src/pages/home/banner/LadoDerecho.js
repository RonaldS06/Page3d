import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, PresentationControls,
//PresentationControls,
 } from "@react-three/drei";
import { useProgress, Html } from "@react-three/drei";
// import Globe from "./Globe.tsx";
import { Maquina } from "./Maquina";
import Intro from "../../../components/Intro";
function Loader() {
    const { progress } = useProgress();
    return _jsx(Html, { center: true, children: progress.toFixed(1) });
}
const ladoDerecho = () => {
    return (_jsx("div", { className: "w-full lg:w-1/2 flex justify-center items-center h-[400px] md:h-[600px]", children: _jsxs(Canvas, { camera: { position: [0, 0, 10] }, className: "canvas", children: [_jsx(Intro, {}), _jsxs(PresentationControls, { global: true, config: { mass: 2, tension: 500 }, snap: { mass: 4, tension: 1500 }, polar: [-Math.PI / 3, Math.PI / 3], azimuth: [-Math.PI / 11.4, Math.PI / 2], children: [_jsx("directionalLight", {}), _jsx("ambientLight", { intensity: -0.5 }), _jsx(Suspense, { fallback: _jsx(Loader, {}), children: _jsx(Maquina, { position: [0, -1.22, 0], scale: 3, "rotation-y": -0.51 }) }), _jsx(Environment, { preset: "apartment" }), _jsx(ContactShadows, { position: [1, 1, 1], opacity: 1, scale: 10, blur: 1, far: 2 })] })] }) }));
};
export default ladoDerecho;
