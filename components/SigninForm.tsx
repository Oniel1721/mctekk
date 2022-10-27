import { useSubmit } from '../hooks'
import { ApiSession } from '../types'
import { Input, HelperText } from './'

export const SigninForm = ()=>{
    const { onSubmit, error } = useSubmit<ApiSession>('auth')

    return <form onSubmit={onSubmit} >
        <h2>SignIp</h2>
        <section>
            <Input type='email' name='email'>Email</Input>
            <Input minLength={8} type='password' name='password'>Password</Input>
        </section>
        <HelperText text={error} />
        <button type='submit'>
            Signin
        </button>
    </form>
}

