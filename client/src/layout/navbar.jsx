import React from 'react';
import './styles/navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Navbar">
                    <div className="container-fluid">
                       
                        <span>MyCode</span>
                    
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Navbar;