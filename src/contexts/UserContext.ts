import { User } from "../types/user";
import { createContext } from "react";

export interface UserContextProps {
  user?: User;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);
