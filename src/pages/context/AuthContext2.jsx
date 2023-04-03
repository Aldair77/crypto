import { useContext,createContext } from "react"
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext2 = createContext()

export function AuthContext2Provider({children}) {


    const googleSignIn=()=>{
        const provider=new GoogleAuthProvider()
        signInWithPopup(auth,provider)
    }


  return (
    <AuthContext2.Provider value={{googleSignIn}}>
        {children}
    </AuthContext2.Provider>
  )
}

export function UserAuth(){
    return useContext(AuthContext2)
}