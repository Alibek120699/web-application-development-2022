import { Flex, Input } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

import { getSecureURL } from "../../security/helpers";

type CategoryLink = {
  href: string;
  title: string;
};

const links: CategoryLink[] = [
  { href: "/laptops", title: "Laptops" },
  { href: "/tablets", title: "Tablets" },
  { href: "/smartphones", title: "Smartphones" },
  { href: "/desktops", title: "Desktops" },
];

const Header: FC = () => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    eval(e.target.value);
  };

  // const createLogo = () => {
  //   return {
  //     __html: "<img onerror='alert(\"Hacked!\");' src='invalid-image' />",
  //   };
  // };

  return (
    <Flex
      justify="space-between"
      align="center"
      bgColor="teal.100"
      px={4}
      py={5}
    >
      {/* <div dangerouslySetInnerHTML={createLogo()}></div> */}
      <p>Web Dev</p>
      <Input
        placeholder="Search"
        onChange={handleSearchChange}
        bg="white"
        width="400px"
        px={2}
        py={1}
        type="search"
      />
      <Flex as="nav" gap={5}>
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.title}
          </a>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
