interface Props {
    isLoading: boolean,
    children: any
}

export const SubmitButton = ({ isLoading, children }: Props)=>{
    return <button 
        disabled={isLoading}  
        className='form-btn' 
        type='submit'
    >
        {isLoading?'Sending...':<>{children}</>}
    </button>
}