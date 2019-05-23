import React, { createContext } from "react";
import { auth } from "./firebase";
import { useContext } from "react";

var user = auth.currentUser;

export const userContext = createContext(user);

// export const useSession = () => {
//   const { user } = useContext(userContext);
//   return user;
// };

// export const useAuth = () => {
//   const [state, setState] = React.useState(() => {
//     const user = auth.currentUser;
//     return {
//       initializing: !user,
//       user
//     };
//   });

//   function onChange(user) {
//     setState({ initializing: false, user });
//   }

//   React.useEffect(() => {
//     // listen for auth state changes
//     const unsubscribe = auth.onAuthStateChange(onChange);

//     // unsubscribe to the listener when unmounting
//     return () => unsubscribe();
//   }, []);

//   return state;
// };
