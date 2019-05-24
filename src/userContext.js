import React, { createContext } from "react";
import { auth } from "./firebase";

export const UserContext = createContext(null);

export const user = auth;
//  {
//   username: auth.currentUser.displayName,
//   profilePic: auth.currentUser.photoURL
// };
