import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md';
import error404 from '../vectors/error404.png';
import spirit from '../audio/spirit.mp3'
const Err=()=>{
    let [page ]=useState('page not found ')
    return(
        <div className="not_found">
            
            <img src={error404} alt={page}/>
            <span>
                <h5>PAGE NO FOUND</h5>
                <Link to="parent"><h1><MdKeyboardArrowLeft/></h1></Link>
            </span>
          
            <audio src={spirit}  autoPlay="true"/>
        </div>
    )
}
export default Err;