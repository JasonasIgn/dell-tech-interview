import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./pages/Home";

const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
