import React, {useState , useEffect } from 'react';
import { Row , Col , Container , Card ,CardBody } from 'reactstrap'
import {MdArrowBack} from "react-icons/md";
import {Link} from 'react-router-dom'
import { FaUserNurse, FaGithub , FaTwitter} from "react-icons/fa";
import {MdDeveloperMode} from 'react-icons/md'
import world from '../vectors/world.png';
const Doctor=()=>{
    //fetch the datas
    let [art , setArt]=useState('')
    let [name , setName]=useState('')
    let [sec , setSec]=useState()
    let [uname , setUname]=useState()
    let [met , setMet]=useState('');
    let [twit, setTwit]=useState('')
    let [twi , setTwi]=useState('')
    let [tw, setTw]=useState('');

         //now the github usernames
         const [git , setGit ]=useState()
         const [giti , setGiti]=useState()
         const [gity , setGity]=useState()
         const [gif , setGif]=useState()
    const userDate=()=>{
        fetch('https://dev.to/api/articles').then( data => data.json())
        .then(dev =>{
            
            setArt(dev[0].user.name)
            setName(dev[3].user.name)
            setUname(dev[6].user.name)
            setSec(dev[7].user.name)
            //twitter user name 
            setMet(dev[0].user.twitter_username);
            setTwit(dev[3].user.twitter_username)
            setTwi(dev[6].user.twitter_username);
            setTw(dev[7].user.twitter_username);

            //call the github users back
            setGif(dev[0].user.github_username)
            setGiti(dev[3].user.github_username)
            setGity(dev[6].user.github_username)
            setGit(dev[7].user.github_username)
            
            console.log(dev);
        } )
    }
    useEffect(()=>{
        userDate()
    })

    const first= e =>window.open(`https://www.twitter.com/${e}` , '_blank');
    const seconde= ev => window.open(`https://www.github.com/${ev}`, '_blank');
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
                    <div className="world">
                         <img src={world} alt="side iamge"/>
                    </div>
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

                                    <div id='list'>
                                        <br/><br/>
                                        <h5  onClick={()=>seconde(gif)}><FaGithub/></h5>
                                        <h5 onClick={()=>first(met)}><FaTwitter/></h5>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="col-6">
                            <Card >
                                <CardBody>
                                    {name}

                                    <div id='list'>
                                        <br/><br/>
                                        <h5 onClick={()=>seconde(giti)}><FaGithub/></h5>
                                        <h5 onClick={()=>first(met)}><FaTwitter/></h5>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                    <Col className="col-6">
                            <Card >
                                <CardBody>
                                   {sec}

                                   <div id='list'>
                                        <br/><br/>
                                        <h5 onClick={()=>seconde(git)}><FaGithub/></h5>
                                        <h5 onClick={()=>first(twit)}><FaTwitter/></h5>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="col-6">
                            <Card >
                                <CardBody>
                                    {uname}

                                    <div id='list'>
                                        <br/><br/>
                                        <h5 onClick={()=>seconde(gity)}><FaGithub/></h5>
                                        <h5 onClick={()=>first(tw)}><FaTwitter/></h5>
                                    </div>
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