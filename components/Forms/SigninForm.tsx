import { useRouter } from 'next/router'
import { useSubmit } from '../../hooks'
import { Session } from '../../types'
import { Input } from './'

export const SigninForm = ()=>{
    const router = useRouter()
    const { data, onSubmit } = useSubmit<Session>('auth')
    if(data){
        router.push('/')
    }

    return <form onSubmit={onSubmit} >
        <h2>SignIp</h2>
        <section>
            <Input type='email' name='email'>Email</Input>
            <Input minLength={8} type='password' name='password'>Password</Input>
        </section>
        <button type='submit'>
            Signin
        </button>
    </form>
}

