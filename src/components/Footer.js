import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (_jsx("div", { className: "p-10", children: _jsxs("div", { className: "w-full h-full flex flex-col gap-5 items-center", children: [_jsx("p", { className: "text-center font-bold", children: "Desarrollo web 3d" }), _jsxs("div", { className: "flex gap-4", children: [_jsx("span", { className: "bannerIcon", children: _jsx("a", { href: "https://www.linkedin.com/in/ronald-santamaria-pizarro/", target: "_blanck", children: _jsx(FaLinkedin, {}) }) }), _jsx("span", { className: "bannerIcon", children: _jsx(FaFacebook, {}) }), _jsx("span", { className: "bannerIcon", children: _jsx(FaTwitter, {}) })] })] }) }));
};
export default Footer;
