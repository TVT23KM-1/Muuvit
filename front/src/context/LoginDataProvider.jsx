import { useEffect, useState } from "react";
import { LoginDataContext } from "./LoginDataContext";

export default function LoginDataProvider(props) {
    const [token, setToken] = useState(null)
    const [userName, setUserName] = useState(null)
    const [aggregate, setAggregate] = useState(null)

    useEffect(() => {
      setAggregate({userName: userName, 
        token: token, 
        setUserName: setUserName, 
        setToken: setToken})
    }, [token, userName])
    

  return (
    <LoginDataContext.Provider value={aggregate}>
        { props.children }
    </LoginDataContext.Provider>
  )
}
