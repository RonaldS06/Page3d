import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import LadoDerecho from "./LadoDerecho";
import LadoIzquierdo from "./LadoIzquierdo";
const Home = () => {
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "bg-banner max-w-[1600px] mx-auto pt-10 pb-7 px-5 md:px-10 flex flex-col gap-10 lg:flex-row items-center font-titleFont", children: [_jsx(LadoIzquierdo, {}), _jsx(LadoDerecho, {})] }) }));
};
export default Home;
