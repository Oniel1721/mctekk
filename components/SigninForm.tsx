import { useSubmit } from '../hooks'
import { ApiSession } from '../types'
import { Input, HelperText } from './'

export const SigninForm = ()=>{
    const { onSubmit, error } = useSubmit<ApiSession>('auth')

    return <section className='form-section signin-form'>
        <form className='form' onSubmit={onSubmit} >
            <h3 className='form-title'>Sign In</h3>
            <Input type='email' name='email'>Email</Input>
            <Input minLength={8} type='password' name='password'>Password</Input>
            <HelperText text={error} />
            <button className='form-btn' type='submit'>
                Login
            </button>
        </form>
    </section> 
}

