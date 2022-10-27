import { useEffect, useState } from "react"
import { User } from "../types"
import { useSession } from './'

export const useUserList = ()=>{
    const session = useSession()
    const [ users, setUsers ] = useState<User[]>([])

    useEffect(()=>{
        if(!session) return;
        const url = process.env.NEXT_PUBLIC_API_URL ?? ''
        fetch(`${url}/users`, {
            headers: {
                Authorization: session.token
            }
        })
        .then(response => response.json())
        .then((json)=> setUsers(json))
        .catch(err=>{
            console.log('error getting users')
        })
    }, [session])


    return users
}
