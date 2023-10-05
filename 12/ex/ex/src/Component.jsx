import { useContext } from "react"
import userContext from "./UserContext"
import AllInfo from "./AllInfo"

export default function Component() {
    const user = useContext(userContext)
    return (
        <>
            <p>Email: {user.email}</p>
            <AllInfo/>
        </>
    )
}