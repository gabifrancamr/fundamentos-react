import { useContext } from "react"
import userContext from "./UserContext"

export default function AllInfo() {
    const user = useContext(userContext)
    return (
        <>
            <hr />
            <h2>nome: {user.name}</h2>
            <h2>email: {user.email}</h2>
            <hr />
        </>
    )
}