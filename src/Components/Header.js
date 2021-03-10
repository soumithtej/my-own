import React from 'react';
import '../Styles/header.css';

class Header extends React.Component
{
    render()
    {
        return(
            <div>
            <div className="band"></div>
            <div style={{textAlign:"center",marginTop:"-50px",color:"white",fontSize:"150%"}}>CALCULATOR</div>
            </div>
            
    
        )
    }
}

export default Header;