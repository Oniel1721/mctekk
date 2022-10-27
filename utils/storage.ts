import { ApiSession } from "../types"

const SessionIndex = 'user-session'

export const getSession = ()=>{
    if(typeof window === 'undefined') return null
    const rawValue = window.localStorage.getItem(SessionIndex)
    if(!rawValue) return null
    return JSON.parse(rawValue) as ApiSession
}

export const setSession = (session: ApiSession)=>{
    if(typeof window === 'undefined') return null
    window.localStorage.setItem(SessionIndex, JSON.stringify(session))
    return session
}