export default function StatusText () {
    const status = true

    return (
        <h2 
            style={{
                color: status ? "#00ff9f" : "#f6348"
            }}
        >
            Current Status: {status ? "ON" : "FALSE"}
        </h2>
    )
}


//export default () => {
//    const status = true
//
//    return <h2>Current Status: {status ? "ON" : "FALSE"}</h2>
//    
//}