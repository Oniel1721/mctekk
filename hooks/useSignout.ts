import { useRouter } from "next/router"
import { useCallback } from "react"
import { Storage } from "../utils"



export const useSignout = ()=>{
    const router = useRouter()

    const onSignout = useCallback(()=>{
        Storage.removeSession()
        router.push('/login')
    }, [])

    return {
        onSignout
    }
}