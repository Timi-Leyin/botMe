import React, { useState, useEffect } from 'react';
import {MdArrowBack} from "react-icons/md";
import {Link} from 'react-router-dom'
import { Container , Button , Card , Badge ,CardBody,BreadcrumbItem,Breadcrumb, Form, Row , Col} from 'reactstrap'
import radio from '../vectors/radio.svg';
const More=()=> {
    return (
        <>

            <Row>
                <Col className="col-md-6 col-12 col-lg-6 side_left">
                    <div className="side_image">
                        <center>   <img src={radio} alt="side image"/> </center>
                    </div>
                </Col>
                <Col className="col-md-6 col-12 col-lg-6"> 
                    <div>
                    <header>
             <div className="upper">
                 <span>
                        <Link to="parent">
                          <MdArrowBack/>
                        </Link>
                 </span>
                 <span>
                     icon
                 </span>
             </div>

            
         </header>

         <Container>
             <Breadcrumb>
                <Breadcrumb>
                    <BreadcrumbItem>
                        see trending developers articles
                    </BreadcrumbItem>
                </Breadcrumb>
             </Breadcrumb>
             <form>
                <input type="text" className="form-control"/>
             </form>
             <br/>
             <Card>
                 <CardBody>
                     card 
                 </CardBody>
             </Card>
             
         </Container>
                    </div>
                
                </Col>
            </Row>
   

        </>
    )
}
export default More;