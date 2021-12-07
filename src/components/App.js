import React from "react";
import { Link, Outlet } from "react-router-dom"


const App = () => {
  return (
      <div>
        <nav
          style= {{
            borderBottom: "solid 1px", 
            paddingBottom: "1rem",
            display: 'flex',
            gap: '10px'
        }}>
          <Link to="/home">Go to Home Page</Link> 
          <Link to="/procedures">See Our Procedures</Link>
          <Link to="/contact">Contact Us!</Link>
        </nav>
        <Outlet />
      </div>
  );
}

export default App;
