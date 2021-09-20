import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "@reach/router";
import './Navbar.scss';

export default function Navbar() {
  const [navlink, setNavlink] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/categories')
    .then((response)=>{ 
      console.log("Navbar response",response.data)
      setNavlink(response.data)
    })
  }, [setNavlink])

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <Link to="/">All</Link>
        </li>
       {navlink.map((link) => (
       <li className="navbar__list__item" key={link.id}  >
         <Link to={`/${link.name}`}>{link.name}</Link>
        </li>
       ))}
      </ul>
    </nav>
  )
}
