export type Session = {
    id: number,
    token: string,
    time: string,
    expires: string
}

export type User = {
    firstname: string,
    lastname: string,
    email: string,
    default_company: number
}


export type SingupResponse = {
    user: User,
    session: Session
}   

export type ApiError = {
    [key: string]: string[]
}

