import React from 'react'
import {Link , Router} from 'react-router-dom';
import { Container , Button , Row , Col} from 'reactstrap'
import { MdKeyboardArrowRight } from "react-icons/md";
import Auth from './auth'
import './css/main.css';
const Index=()=>{
    return (
        <div className="bg">
            <div className="content">
                <Container>
                    <div className="hold">
                        <div className="text-center middle">
                            <span>
                                <div className="text-muted">
                                   Meet , Learn , Get learning Resources with BALEN 
                                </div>
                                <br/>
                                <Link to="auth">
                                    <h1>
                                        <MdKeyboardArrowRight/>
                                    </h1>
                                </Link>

                               
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </div>

    )
}
export default Index;