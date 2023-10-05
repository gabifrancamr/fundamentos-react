import { useContext } from "react"
import userContext from "./UserContext"

export default function Header() {
    const user = useContext(userContext)
    return (
        <>
            <h1>Olá, {user.name}</h1>
            <hr />
        </>
    )
}