import React from 'react';
import './search.css'
import Logo from '../../img/1.png'

const Search = () => {
    return (
        <div className="main">
            <div className="header-search">
               <input type='search' alt='' placeholder='Search'/>
            </div> 
            <div className="header-avatar">
            <img src={Logo} alt='Avatar' className="avatar rounded-circle mb-3" style={{ width: "40px"}}/>
                <strong className="text-1" style={{fontSize: '10.7px'}}>Alaba Jammal</strong>
            </div>
        
         
        </div>
    );
}

export default Search;
