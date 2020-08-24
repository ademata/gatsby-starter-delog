import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/events">Events</Link>
    <Link to="/jobs">Jobs</Link>
    <Link to="/food">Food</Link>
    <Link to="/housing">Housing</Link>
    <Link to="/immigration">Immigration</Link>
    <Link to="/buysell">Buy/Sell</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/exchange">Exchange Rate</Link>
    <Link to="/balikbayan">Balikbayan Box</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)