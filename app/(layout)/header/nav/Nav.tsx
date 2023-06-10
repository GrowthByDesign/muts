import Container from "../../Container";
import NavLink from "./NavLink";
import { navItems } from "./data";

const Nav = () => {
  return (
    <nav className="bg-brandingBlue-400 md:py-4 pos">
      <Container>
        <ul className="hidden justify-center gap-24 md:flex">
          {navItems.map((link, idx) => {
            return (
              <NavLink
                key={idx}
                text={link.text}
                link={link.link}
                className={link.className ? link.className : ""}
              />
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
