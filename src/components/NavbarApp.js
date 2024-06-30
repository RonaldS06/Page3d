import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, } from "@nextui-org/react";
const NavbarApp = () => {
    return (_jsxs(Navbar, { shouldHideOnScroll: true, children: [_jsx(NavbarBrand, { children: _jsx("p", { className: "font-bold text-inherit", children: "Ronaldsp7" }) }), _jsxs(NavbarContent, { className: "hidden sm:flex gap-4", justify: "center", children: [_jsx(NavbarItem, { children: _jsx(Link, { color: "foreground", href: "#", children: "Inicio" }) }), _jsx(NavbarItem, { isActive: true, children: _jsx(Link, { href: "#", "aria-current": "page", children: "Nosotros" }) }), _jsx(NavbarItem, { children: _jsx(Link, { color: "foreground", href: "#", children: "Contactanos" }) })] }), _jsxs(NavbarContent, { justify: "end", children: [_jsx(NavbarItem, { className: "hidden lg:flex ", children: _jsx(Link, { href: "#", className: "text-blue-50", children: "Entrar" }) }), _jsx(NavbarItem, { children: _jsx(Button, { as: Link, color: "success", href: "#", variant: "flat", className: "text-blue-100", children: "Registrase" }) })] })] }));
};
export default NavbarApp;
