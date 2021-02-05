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
    let [last_article , setLast_article]=useState()
    let [failed , setFailed]=useState();
    //hooks for the comments
    let [firstcom , setFirstcom ]=useState();
    let [sec_reply , setSec_reply ]=useState();
    let [third_reply , setThird_reply ]=useState();
    let [forth_reply , setForth_reply ]=useState();
    let [last , setLast]=useState(89)
    //to set the loading 
    let [loading , setLoading]=useState('')
    const userDate=()=>{
        fetch('https://dev.to/api/articles').then( data => data.json())
        .then(dev =>{
          //  setFirstcom(dev[0])
           setArticle(dev[0].title)
           setFirstcom(dev[0].comments_count)

           //now the second article 
           setView(dev[3].title)
           setSec_reply(dev[3].comments_count)

           //third article 
           setThird_article(dev[5].title)
           setThird_reply(dev[5].comments_count)

           //forth article 
           setForth_article(dev[6].title)
           setForth_reply(dev[6].comments_count)

           //lasat article 
           setLast_article(dev[24].title)
           setLast(dev[24].comments_count)
            
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
                            <p>{article}</p>

                            <FaClock/>
                        </CardDeck>

                        
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

             {/* the second part */}
             <Card className="mt-3">
                 <small className="text-muted">{loading ===''?<FaSpinner/>:''}</small>
                 <CardBody>
                 <p className="catch">{failed}</p>
                 <p>{view}</p>
                    
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

             {/* third part */}
             <Card className="mt-3">
             <small className="text-muted">{loading ===''?<FaSpinner/>:''}</small>
                 <CardBody>
                    <p className="catch">{failed}</p>
                    <p>{last_article}</p>
                 </CardBody>
             </Card>
             {/* forth part */}
             <Card className="mt-3">
               <small className="text-muted">{loading ===''?<FaSpinner/>:''}</small>
                 <CardBody>
                     <CardDeck>
                       <p className="catch">{failed}</p>
                       {third_article} 
                     </CardDeck>
                 </CardBody>
                   
                    {/* info side */}
                    <span>
                     <ul>
                         <li><FaGithub/></li>
                         <li><BiComment/><Badge color="warning">
                            {third_reply}
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
                       {forth_article} 
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