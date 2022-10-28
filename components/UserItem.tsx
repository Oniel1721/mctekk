import { User } from "../types"
import Image from 'next/image'

interface Props {
    user: User
}

export const UserItem = ({ user: { default_company, email, firstname, lastname, id } }: Props)=>{
    return (
        <li className="user-item">
            <header className="user-header">
                <img src="https://thispersondoesnotexist.com/image" alt={`${firstname}`}/>
            </header>
            <article className="user-content">
                <h2 className="user-id"><small>#</small>{id}</h2>
                <h4>{firstname} {lastname}</h4>
                <p>{email}</p>
            </article>
        </li>
    )
}