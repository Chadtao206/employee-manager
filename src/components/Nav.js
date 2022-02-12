import { Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
const navItems = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/employees",
    name: "Employees",
  },
  {
    link: "/about",
    name: "About",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Flex
        justify={"space-evenly"}
        background="blue.800"
        padding={"2"}
        shadow="dark-lg"
      >
        <Button colorScheme="teal" onClick={() => setIsOpen(true)}>
          Side Menu
        </Button>
        {navItems.map((item) => {
          return (
            <Link key={Math.random()} to={item.link}>
              <Button>{item.name}</Button>
            </Link>
          );
        })}
      </Flex>
    </>
  );
}
