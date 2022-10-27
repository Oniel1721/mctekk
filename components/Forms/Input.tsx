import { useRef } from "react"


interface Props {
    name: string,
    children: any,
    type?: string,
    required?: boolean,
    minLength?: number
}

export const Input = (props: Props)=>{
    const type = useRef(props.type)
    return <article>
        <label htmlFor={props.name}>{props.children}</label>
        <input min={props.minLength ?? 0} required={props.required ?? true} type={type.current || 'text'} name={props.name} />
    </article>
}