import { useSubmit } from '../hooks'
import { ApiSession } from '../types'
import { Input, HelperText, SubmitButton } from './'

export const SigninForm = ()=>{
    const { onSubmit, error, isLoading } = useSubmit<ApiSession>('auth')

    return <section className='form-section signin-form'>
        <form className='form' onSubmit={onSubmit} >
            <h3 className='form-title'>Sign In</h3>
            <Input type='email' name='email'>Email</Input>
            <Input minLength={8} type='password' name='password'>Password</Input>
            <HelperText text={error} />
            <SubmitButton isLoading={isLoading}>
                Login
            </SubmitButton>
        </form>
    </section> 
}

