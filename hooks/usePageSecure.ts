import { useRouter } from "next/router"
import { ApiSession } from "../types"
import { isClientSide } from '../utils'

export const usePageSecure = (session: ApiSession | null)=>{
    const router = useRouter()
    if(!isClientSide()) return;
    if(session && router.asPath === '/login'){
        router.push('/')
    }

    if(!session && router.asPath === '/'){
        router.push('/login')
    }
}
