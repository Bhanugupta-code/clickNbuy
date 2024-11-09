import React from 'react'
import './project.css'
const Navbar = ({ uniquelist, Filter }) => {

    return (
        <>
            {
                uniquelist.map((curelem) => {
                    return (<li className="arrow" onClick={() => Filter(curelem)}>
                        {curelem}<span></span>
                    </li>)

                })
            }
        </>
    );

}

export default Navbar;
