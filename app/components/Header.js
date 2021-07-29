import React from 'react';
import {history} from '../store/configureHistory';

// HEADER COMPONENT, PUSHES TO HISTORY TO CHANGE ROUTE, CAN BE MOVED TO SEPERATE ACTION FOLDER FOR COMPLICATED ROUTES
const Header = () => {
    return (<div className="header">
        <span className="header-button" onClick={()=>{
            history.push('/home')
        }}>Home</span>
        <span className="header-button" onClick={()=>{
            history.push('/docs')
        }}>Docs</span>
    </div>)
}
export default Header;