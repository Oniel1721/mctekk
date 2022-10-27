import { useSubmit } from '../hooks'
import { SingupResponse } from '../types'
import { Input, HelperText } from './'

export const SignupForm = ()=>{
    const { onSubmit, error } = useSubmit<SingupResponse>('users')

    return <form onSubmit={onSubmit} >
        <h2>SignUp</h2>
        <section>
            <Input name='firstname'>First name</Input>
            <Input name='lastname'>Last name</Input>
            <Input type='email' name='email'>Email</Input>
            <Input minLength={8} type='password' name='password'>Password</Input>
            <Input minLength={8} type='password' name='verify_password'>Confirm password</Input>
            <Input name='default_company'>Company</Input>
        </section>
        <HelperText text={error} />
        <button type='submit'>
            Singup
        </button>
    </form>
}

