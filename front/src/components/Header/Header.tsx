import { Flex, Input } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

type Props = {
  onSearchChange: (value: string) => void;
};

type CategoryLink = {
  href: string;
  title: string;
};

const links: CategoryLink[] = [
  { href: "/shops", title: "Shops" },
  { href: "/payment/1", title: "Payment" },
  // { href: "/smartphones", title: "Smartphones" },
  // { href: "/desktops", title: "Desktops" },
];

const Header: FC<Props> = ({ onSearchChange }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
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
