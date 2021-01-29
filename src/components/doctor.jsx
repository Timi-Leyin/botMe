import React, {useState} from 'react';
import { Row , Col , Container , Card ,CardBody } from 'reactstrap'
import {MdArrowBack} from "react-icons/md";
import {Link} from 'react-router-dom'
import { FaUserNurse } from "react-icons/fa";
const Doctor=()=>{
    return (
        <>
            <header>
                <div className="head">
                    <span>
                        <Link to="/parent">
                           <MdArrowBack/>
                        </Link>

                    </span><span>
                        icons2

                    </span>
                </div>
            </header>

        {/* the other part  */}
        
            <Row>
                <Col className='col-12 col-md-6 col-lg-6'>

                </Col>

                <Col className='col-12 col-md-6 col-lg-6'>

                <Container>
            <h5>
                Take care of your health 
            </h5>
            <small>
                by Connecting with a doctor
            </small>

            {/* introl */}
            <Card className="mt-3" id="doctor">
                <CardBody>
                    <span>
                       <FaUserNurse/>
                    </span>
                     <div>
                        <h6>
                        CONNECT WITH OTHER DEVS 
                        </h6>
                        <small>
                            connect with other developers from different platforms
                        </small>
                     </div>
                </CardBody>
            </Card>

            {/* now show covid 19 status */}
                <div className="cad">
                        <Row>
                        <Col className="col-6">
                            <Card >
                                <CardBody>
                                    connect 
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="col-6">
                            <Card >
                                <CardBody>
                                    connect 
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                    <Col className="col-6">
                            <Card >
                                <CardBody>
                                    connect 
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="col-6">
                            <Card >
                                <CardBody>
                                    connect 
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </div>

            <Card className="mt-4" className="down">
                <CardBody>
                    <h6>your health</h6>
                    <small>Your health is wealth </small>
                </CardBody>
            </Card>
        </Container>

                </Col>
            </Row>



        </>
    )
}
export default Doctor;