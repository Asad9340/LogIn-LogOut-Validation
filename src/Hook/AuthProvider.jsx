import { createContext, useEffect, useState } from 'react';
import auth from './../Firebase/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const createUser = (email,password) => {
   return createUserWithEmailAndPassword(auth, email, password);
  }
  const logInUser = (email,password) => {
   return signInWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      return () => {
        unsubscribe();
      }
    })
  },[])
  const authInfo = { user,createUser, logInUser };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;
