import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading,setLoading]=useState(true);
  const createUser = (email, password) => {
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password);
  }
  const logInUser = (email, password) => {
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      return () => {
        unsubscribe();
      }
    })
  }, [])
  const logOut = () => {
    setLoading(true)
    signOut(auth);
  }
  const authInfo = {logOut,loading, user,createUser, logInUser };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;
