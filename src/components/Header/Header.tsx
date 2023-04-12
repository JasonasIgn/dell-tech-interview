import React from "react";

import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { appRoutes } from "config";

export const Header = () => (
  <Flex padding={4} alignItems="center" width="100%">
    <Link to={appRoutes.users} className="App-link">
      Users
    </Link>
    <Link to={appRoutes.newUser} className="App-link">
      Add User
    </Link>
  </Flex>
);
