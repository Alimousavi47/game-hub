import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order By:
      </MenuButton>
      <MenuList>
        <MenuItem>test</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
