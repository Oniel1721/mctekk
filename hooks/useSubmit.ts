import { useCallback, FormEvent, useState } from "react"
import { ApiError } from "../types"

type UseSubmitState = 'idle' | 'loading' | 'error' | 'success'

export const useSubmit = <T>(endpoint: 'users' | 'auth')=>{
    const [state, setState] = useState<UseSubmitState>('idle')
    const [data, setData] = useState<T>()
    const [error, setError] = useState<ApiError>()

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const url = process.env.NEXT_PUBLIC_API_URL ?? ''
        setState('loading')
        fetch(`${url}/${endpoint}`, { 
            method: 'POST',
            body: formData,
        })
        .then(response=>response.json())
        .then((json)=>{
            setState('success')
            setData(json)
        })
        .catch((err)=>{
            setState('error')
            setError(err)
        })
    }, [endpoint])

    return {
        onSubmit,
        isLoading: state === 'loading',
        data,
        state,
        error
    }
}