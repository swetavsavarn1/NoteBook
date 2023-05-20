import { useContext } from "react"
import { testcontext } from "../App"
function Home() {
    const abc = useContext(testcontext)
    return (
        <h1>This is {abc} </h1>
    )
}
export default Home