import { useSubmit } from '../../hooks'
import { ApiSession } from '../../types'
import { Input } from './'

export const SigninForm = ()=>{
    const { onSubmit } = useSubmit<ApiSession>('auth')

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

