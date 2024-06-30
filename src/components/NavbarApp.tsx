import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const NavbarApp = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {/* Aca va el logo */}
        <p className="font-bold text-inherit">Ronaldsp7</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contactanos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link href="#" className="text-blue-50">
            Entrar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href="#"
            variant="flat"
            className="text-blue-100"
          >
            Registrase
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarApp;
