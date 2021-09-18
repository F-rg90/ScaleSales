import { Link } from "react-router-dom"

const LostBoy = () => {
    return ( 
        <div className="lost-boy">
            <h2>No boxes here...</h2>
            <p>...Seems like you got lost</p>
            <Link to="/">Take me back!</Link>
        </div>
     );
}
 
export default LostBoy;
