import { useMemo } from "react";
import { ApiSession, SingupResponse } from "../types";
import { Storage } from "../utils";
import { usePageSecure } from './usePageSecure'

export const useSession = (payload?: ApiSession | SingupResponse):ApiSession | null => {
    
    const apiSession:ApiSession | undefined = useMemo(()=>{
        if(!payload) return;
        if('token' in  payload) return payload as ApiSession;
        return payload.session
    }, [payload])

    const session = useMemo(()=>{
        if(apiSession) {
            Storage.setSession(apiSession)
            return apiSession
        }
        const storageSession = Storage.getSession()
        return storageSession
    }, [apiSession])

    usePageSecure(session)

    return session
}