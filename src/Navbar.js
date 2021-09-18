import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> Scale-Sales</h1>
            <div className="SearchBar" >
                <input type="text" placeholder="Search.." name="search"></input>
             
            </div>
            <div className="links">
            <Link to="/home" style={{
                    color:"white",
                    backgroundColor:'#54AEDE',
                    borderRadius: '8px'
                }} >Home</Link>
                <Link to="/" style={{
                    color:"white",
                    backgroundColor:'#54AEDE',
                    borderRadius: '8px'
                }} >Profile</Link>
                <Link to="/newsale" style={{
                    color:"white",
                    backgroundColor:'#54AEDE',
                    borderRadius: '8px'
                }} >New Sale</Link>
                <Link to="/login" style={{
                    color:"white",
                    backgroundColor:'#54AEDE',
                    borderRadius: '8px'
                }} >Login</Link>
                
            </div>
           
        </nav>
      );
}



export default Navbar;