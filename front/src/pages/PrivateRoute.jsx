import React from 'react'
import { useLoginData } from '../context/useLoginData'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const loginData  = useLoginData()
    console.log("loginData.userName: ", loginData)
    if (!loginData.userName) {
        return <Navigate to="/login" />
    }

  return <Outlet />
}
