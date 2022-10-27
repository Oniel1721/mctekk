import { useRouter } from "next/router"
import { ApiSession } from "../types"
import { isClientSide } from '../utils'

export const usePageSecure = (session: ApiSession | null)=>{
    const router = useRouter()
    if(!isClientSide()) return;
    if(session && ['/signin', '/signup'].includes(router.asPath)){
        router.push('/')
    }

    if(!session && router.asPath === '/'){
        router.push('/signin')
    }
}
