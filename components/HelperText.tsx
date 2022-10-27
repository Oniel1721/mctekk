
interface Props {
    text?: string
}

export const HelperText = (props: Props)=>{

    return (
        <p style={{color: 'red'}}>{props.text}</p>
    )
}