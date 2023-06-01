import { auth, db } from '@/config/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
export const AuthContext = createContext(null);
function AuthContextProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [dbUser, setdbUser] = useState<any>({});
  useEffect(() => {
    let unsubscribe;
    
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      unsubscribe = onSnapshot(docRef, (docSnap) => {
        setdbUser(docSnap.data());
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);
  return (
    <AuthContext.Provider value={{ ...dbUser, loading, user }}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
