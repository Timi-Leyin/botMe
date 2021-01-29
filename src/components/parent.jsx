import React, {useState} from 'react'
import './css/main.css';
import { Container , Row , Col , Button  , Badge , Card ,CardText, CardFooter , CardTitle , CardBody , Breadcrumb , BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom';
import { HiChatAlt2 } from "react-icons/hi";
import { MdLocalHospital } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserNurse } from "react-icons/fa";
import {MdChatBubble} from "react-icons/md";
import {RiArticleFill} from 'react-icons/ri'

const Main_page=()=>{
  //get the element of sidebar and show it 
    let [open , setOpen]=useState('none')
    //now mute the sidebar
    const close=()=>{
      document.querySelector('.sidebar').style.display='none'
      setOpen('none')
    }

    

    return(
        <div className="parent">
          <Row>
             <Col className="col-12 col-md-4 col-lg-4 first">
                <Container>
                    <h4 className="text-center">FEATURES</h4>
                  <Row>
                     <Col className="col-12 ">
                       <Breadcrumb >
                          <Link to="more">
                            <BreadcrumbItem className="bread">
                            <h5 className='text-muted'>MEET OTHER DEVELOPERS </h5>
                            <small className="text-muted">meet new developers around</small>
                          </BreadcrumbItem>
                          </Link>
                       </Breadcrumb>
                    </Col>
                          {/* other col */}
                     <Col className="col-12 mt-3">
                      <Breadcrumb >
                        <Link to="bot">
                        <BreadcrumbItem className="bread">
                            <h4>Chat with learning Bot </h4>
                            <small className="text-muted">Chat and get learning resource</small>
                        </BreadcrumbItem>
                        
                        </Link>
                      </Breadcrumb>

                     </Col>
                      {/* third col */}
                     <Col className="col-12 mt-3 last">
                       <Breadcrumb >
                          <Link to='share'>
                            <BreadcrumbItem className="bread">
                            <h5 className="text-muted">SHARE WITH DEVS </h5>

                            <small className="text-muted">Share your learning resources with other developers around the globe </small>
                          </BreadcrumbItem>
                          </Link>

                       </Breadcrumb>
                     </Col>

                     {/* <Col className="col-12 mt-3 ">
                      <Breadcrumb >
                        <BreadcrumbItem className="bread">
                            <h6 className="text-muted">SEE TRENDING ARTICLES </h6>
                            <small className="text-muted">see list of trending articles by other developers </small>
                        </BreadcrumbItem>
                      </Breadcrumb>
                    </Col> */}


                  </Row>


                </Container>

            </Col>
            {/* second row */}
             <Col className="col-12 col-md-4 col-lg-4">
                <div className="middles">
                  <div className="sidebar" style={{display:open}}>
                    <h3 onClick={close}>&times;</h3>
                     <ul>
                      
                      <Link to="more">
                       <li> Meet</li>
                      </Link>
                       <li> Connect </li>
                        <Link to="bot">
                          <li> Chat </li>
                        </Link>
                      <Link to="share">
                        <li> Share with</li>
                      </Link>
                    
                     </ul>
                  </div>

                 
                  <header>
                      <h6 onClick={()=>setOpen('block')} className="click"><BiMenuAltLeft/></h6>
                  </header>
                  <Container className="mt-5">
                      <Row>
                        <Col className="col-6">
                           <Card>
                            <Link to="bot">
                                <CardBody className="text-center">
                                <CardTitle>
                                  <span className="emo">
                                   <HiChatAlt2/>
                                  </span>
                                  <br/>
                                  <small className="text-muted">Chat with bot</small>
                                </CardTitle>
                               
                              </CardBody>
                            </Link>
                        </Card> 
                      
                        </Col>

                          {/* second col */}
                          <Col className="col-6">
                          <Card>
                          <CardBody className="text-center">
                            <Link to="doctor">
                              <CardTitle>
                                  <span className="emo"> 
                                    <MdLocalHospital/>
                                  </span> <br/>
                                  <small className="text-muted">Connect with other devs  </small>
                              </CardTitle>
                            </Link>
                          </CardBody>
                        </Card>
                        </Col>

                        {/* third card and col */}
                      </Row>
                      <Row>
                      <Col className="col-12 mt-3">
                          <Card>
                            <Link to="more">
                              <CardBody className="text-center">
                              <CardTitle>
                                <RiArticleFill/>
                              </CardTitle>
                              <CardText>See trending articles </CardText>
                            </CardBody>
                            </Link>

                        </Card>
                        </Col>
                      </Row>
             
                  </Container>
                </div>
              </Col>
             {/* third col */}
             <Col className="col-12 col-md-4 col-xl-4">
                  
              </Col>
          </Row>
          

        </div>
    )
}
export default Main_page;