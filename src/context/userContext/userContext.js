import { createContext } from "react";

const userContext = createContext({
  username: "",
});

const userContextProvider = userContext.Provider;
