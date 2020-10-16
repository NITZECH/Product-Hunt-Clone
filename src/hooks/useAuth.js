import React from 'react'

function useAuth() {
    const [authUser, setAuthUser] = React.useState(null);
    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if (user) {
                setAuthUser(user);
            }else{
                setAuthUser(null)
            }
        })
        return () => {
            unsuscribe();
        }
    }, [])
    return [authUser, setAuthUser]
}

export default useAuth
