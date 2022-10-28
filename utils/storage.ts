import { ApiSession } from "../types"
import { isClientSide } from './render-side'

const SessionIndex = 'user-session'

export const getSession = ()=>{
    if(!isClientSide()) return null
    const rawValue = window.localStorage.getItem(SessionIndex)
    if(!rawValue) return null
    return JSON.parse(rawValue) as ApiSession
}

export const setSession = (session: ApiSession)=>{
    if(!isClientSide()) return null
    window.localStorage.setItem(SessionIndex, JSON.stringify(session))
    return session
}

export const removeSession = ()=>{
    if(!isClientSide()) return null
    window.localStorage.removeItem(SessionIndex)
}