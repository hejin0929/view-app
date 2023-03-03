import { createContext } from "react";
import User from "./user";

const storeConent = createContext({});

export const store = new (class Store {
  user: User;
})();

export const useUser = () => {
  if (!store.user) {
    store.user = new User();
  }
  return store.user;
};

export default storeConent;
