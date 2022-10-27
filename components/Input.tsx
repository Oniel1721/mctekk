interface Props {
    name: string,
    children: any,
    type?: string,
    required?: boolean,
    minLength?: number
}

export const Input = (props: Props)=>{
    return (
        <input 
            className="form-input" 
            placeholder={props.children} 
            min={props.minLength ?? 0} 
            required={props.required ?? true} 
            type={props.type || 'text'} 
            name={props.name} 
        />
    )
    
}