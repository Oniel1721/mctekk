interface Props {
    name: string,
    children: any,
    type?: string,
    required?: boolean,
    minLength?: number
}

export const Input = (props: Props)=>{
    return <article>
        <label htmlFor={props.name}>{props.children}</label>
        <input min={props.minLength ?? 0} required={props.required ?? true} type={props.type || 'text'} name={props.name} />
    </article>
}