import { useEffect, useState } from "react";
import { LoginDataContext } from "./LoginDataContext";

/**
 * LoginDataProvider component provides login data to the application.
 * @param props The properties of the component.
 * @returns {Element}
 */


export default function LoginDataProvider(props) {
    const [token, setToken] = useState(null)
    const [userName, setUserName] = useState(null)
    const [aggregate, setAggregate] = useState((() => {
        //console.log("savedstate, ennen if lausetta");
        const savedState = localStorage.getItem('loginData');
        if (savedState) {
            //console.log("savedstate, if lauseke");
            const { userName, token } = JSON.parse(savedState);
            return { userName, token, setUserName, setToken };
        }
        //console.log("savedstate, return nullit lauseke");
        return { userName: null, token: null, setUserName, setToken };
    } )() );

    useEffect(() => {
        //console.log("useeffect 1.1");
        const loadedState = JSON.parse(localStorage.getItem('loginData'));
        if (loadedState?.userName && loadedState?.token) {
            //console.log("useeffect 1.2");
            setUserName(loadedState.userName);
            setToken(loadedState.token);
        }
        localStorage.setItem('loginData', JSON.stringify({userName: userName, token: token}));
        setAggregate({
            userName: userName,
            token: token,
            setUserName: setUserName,
            setToken: setToken
        })
    }, [token, userName])

    return (
        <LoginDataContext.Provider value={aggregate}>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </LoginDataContext.Provider>
    )
}
