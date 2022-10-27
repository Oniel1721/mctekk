interface Props {
    name: string,
    children: any,
    type?: string,
    required?: boolean,
    minLength?: number
}

export const Input = (props: Props)=>{
    return (
        <div className="input-box">
            <input 
                className="form-input input" 
                min={props.minLength ?? 0} 
                required={props.required ?? true} 
                type={props.type || 'text'} 
                name={props.name} 
            />
            <span className="input-placeholder">
                {props.children}
            </span>
        </div>
    )
    
}