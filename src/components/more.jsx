import React, { useState, useEffect } from 'react';
import {MdArrowBack} from "react-icons/md";
import {Link} from 'react-router-dom'
import { Container, Card , Badge ,CardBody,BreadcrumbItem,Breadcrumb, CardDeck, Row , Col} from 'reactstrap'
import radio from '../vectors/radio.svg';
import {  FaGithub , FaSpinner} from "react-icons/fa";
import { BiComment} from 'react-icons/bi';

const More=()=> {
    let [article, setArticle]=useState()
    let [view , setView]=useState()
    let [third_article , setThird_article]=useState()
    let [forth_article , setForth_article]=useState()
    let [failed , setFailed]=useState();
    //hooks for the comments
    let [firstcom , setFirstcom ]=useState(12);
    let [sec_reply , setSec_reply ]=useState(2);
    let [third_reply , setThird_reply ]=useState(90);
    let [forth_reply , setForth_reply ]=useState(22);
    let [last , setLast]=useState(89)
    //to set the loading 
    let [loading , setLoading]=useState('')
    const userDate=()=>{
        fetch('https://dev.to/api/articles').then( data => data.json())
        .then(dev =>{
            
            
            
            console.log(dev);
        } ).catch(er => {
            setFailed(`Bad Network please check your internet connection`)
        })
    }
    useEffect(()=>{
        userDate()
    })
    return (
        <>

            <Row>
                
                <Col className="col-md-6 col-12 col-lg-6 side_left">
                    <div className="side_image">
                        <center>   <img src={radio} alt="side"/> </center>
                    </div>
                </Col>
                <Col className="col-md-6 col-12 col-lg-6"> 
                    <div>
                    <header>
             <div className="upper">
                 <span>
                        <Link to="parent">
                          <h4><MdArrowBack/></h4>
                        </Link>
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
                <div className="devTo">
                <Card>
                  <small className="text-muted">{loading ===''?<FaSpinner/>:''}</small>
                 <CardBody>
                        <CardDeck>
                            <p className="catch">{failed}</p>
                        </CardDeck>

                        
                 </CardBody>
                    {/* info side */}
                    <span>
                     <ul>
                         <li><FaGithub/></li>
                         <li><BiComment/><Badge color="warning">
                            {last}
                         </Badge> </li>
                         <li><Badge color="dark">
                             #webdev
                         </Badge></li>
                     </ul>
                 </span>
                
             </Card>

             {/* the second part */}
             <Card className="mt-3">
                 <small className="text-muted">{loading ===''?<FaSpinner/>:''}</small>
                 <CardBody>
                 <p className="catch">{failed}</p>
                    
                 </CardBody>
                 {/* info side */}
                 <span>
                     <ul>
                         <li><FaGithub/></li>
                         <li><BiComment/><Badge color="warning">
                            {firstcom}
                        </Badge> </li>
                         <li><Badge color="dark">
                             #webdev
                         </Badge></li>
                     </ul>
                 </span>
              
             </Card>

             {/* third part */}
             <Card className="mt-3">
             <small className="text-muted">{loading ===''?<FaSpinner/>:''}</small>
                 <CardBody>
                    <p className="catch">{failed}</p>
                 </CardBody>
             </Card>
             {/* forth part */}
             <Card className="mt-3">
             <small className="text-muted">{loading ===''?<FaSpinner/>:''}</small>
                 <CardBody>
                     
                 </CardBody>
                    {/* info side */}
                    <span>
                     <ul>
                         <li><FaGithub/></li>
                         <li><BiComment/><Badge color="warning">
                            {sec_reply}
                        </Badge> </li>
                         <li><Badge color="dark">
                             #webdev
                         </Badge></li>
                     </ul>
                 </span>
      
             </Card>

             {/* firth card  */}
             <Card className="mt-3">
               <small className="text-muted">{loading ===''?<FaSpinner/>:''}</small>
                 <CardBody>
                     <CardDeck>
                       <p className="catch">{failed}</p>
                     </CardDeck>
                 </CardBody>
                   
                    {/* info side */}
                    <span>
                     <ul>
                         <li><FaGithub/></li>
                         <li><BiComment/><Badge color="warning">
                            {forth_reply}
                        </Badge> </li>
                         <li><Badge color="dark">
                             #webdev
                         </Badge></li>
                     </ul>
                 </span>
                      
             </Card>



                </div>
         </Container>
                    </div>
                
                </Col>
            </Row>
   

        </>
    )
}
export default More;