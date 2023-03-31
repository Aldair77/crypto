import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';


const authContext = createContext();

export function  useAuth(){
    return useContext(authContext)
}

function AuthContext({children}) {

    const [currectUser,setCurrentUser]= useState(null)
    const [modal, setModal] = useState({isOpen:false,title:'', content:''})

    const signUp = (email,password)=>{  /*funcion para el registro*/
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email,password)=>{ /* funcion para el login */
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>{ /* cerrar sesión */
        return signOut(auth)
    }

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            console.log('Estado de usuario cambiado',user)
        })
         return unsuscribe
    },[])

    const value= {
        currectUser,
        signUp,
        login,
        modal,
        setModal,
    }
  return <authContext.Provider {...{value}}>{children}</authContext.Provider>
}


export default AuthContext