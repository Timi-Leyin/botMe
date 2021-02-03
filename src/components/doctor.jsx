import React, {useState , useEffect } from 'react';
import { Row , Col , Container , Card ,CardBody } from 'reactstrap'
import {MdArrowBack} from "react-icons/md";
import {Link} from 'react-router-dom'
import { FaUserNurse } from "react-icons/fa";
const Doctor=()=>{
    //fetch the datas
    let [art , setArt]=useState('')
    let [name , setName]=useState('')
    let [sec , setSec]=useState()
    let [uname , setUname]=useState()
    const userDate=()=>{
        fetch('https://dev.to/api/articles').then( data => data.json())
        .then(dev =>{
            
            setArt(dev[0].user.name)
            setName(dev[3].user.name)
            setUname(dev[6].user.name)
            setSec(dev[7].user.name)
        } )
    }
    useEffect(()=>{
        userDate()
    })
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
                Stay safe and sound
            </h5>
            <small>
               
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
                            meet new developers and connect with them
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
                                    {art}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="col-6">
                            <Card >
                                <CardBody>
                                    {name}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                    <Col className="col-6">
                            <Card >
                                <CardBody>
                                   {sec}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="col-6">
                            <Card >
                                <CardBody>
                                    {uname}
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </div>

            <Card className="mt-4" className="down">
                <CardBody>
                    <h6>connect with other developers too one</h6>
                   <span className="meet">
                        


                   </span>
                </CardBody>
            </Card>
        </Container>

                </Col>
            </Row>



        </>
    )
}
export default Doctor;