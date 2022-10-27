
interface Props {
    text?: string
}

export const HelperText = (props: Props)=>{

    return (
        <>
            {props.text && <p className="form-error">{props.text}</p>}
        </>
    )
}