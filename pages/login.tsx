import { useState } from 'react'
import { SigninForm, SignupForm } from '../components'

export default function LoginPage () {
    const [isFormActive, setIsFormActive] = useState(false)

    const handleSigninClick = ()=>{
        setIsFormActive(false)
    }

    const handleSignupClick = ()=>{
        setIsFormActive(true)
    }

    return (
        <main className={`login-main ${isFormActive?'active':''}`}>
            <section className='login-container'>
                <aside className='login-blueBg'>
                    <article className='login-box login-signin'>
                        <h2 className='login-h2'>Already Have an Account?</h2>
                        <button onClick={handleSigninClick} className='login-btn' >Sign in</button>
                    </article>
                    <article className='login-box login-signup'>
                        <h2 className='login-h2'>Don&apos;t Have an Account?</h2>
                        <button onClick={handleSignupClick} className='login-btn'>Sign up</button>
                    </article>
                </aside>
                <section
                 className={`login-formBx ${isFormActive?'active':''}`}
                >
                    <SigninForm />
                    <SignupForm />
                </section>
            </section>
        </main>
    )
}