import React from 'react'
import { useLoginData } from '../context/useLoginData'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const { user } = useLoginData()
    if (!user) {
        return <Navigate to="/login" />
    }

  return <Outlet />
}
