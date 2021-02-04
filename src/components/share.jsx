import React, { useState, useEffect } from 'react';
import {MdArrowBack} from "react-icons/md";
import {Link} from 'react-router-dom'
import { Container  , Card , Badge ,CardBody,BreadcrumbItem,Breadcrumb} from 'reactstrap'
import firebase from './firebase'
const Share=()=>{
    let [upload , setUpload]=useState('')
    let [msg , setMsg]=useState('')
    let [size_msg , setSize_msg]=useState('')
    let uploadTo=(e)=>{
        let file=e.target;
        let fileTo=file.files[0];
        let fileNames=fileTo.name;
            //let match for the pattern 
            let pattern=new RegExp(/\.pdf/)
                if(fileTo.name.match(pattern)){
                    //set the error msg back to normal
                    setMsg(false)

                    //now set the msg for the uploaaded files 
                    setUpload(fileTo.name)
                    let storageRef=firebase.storage().ref(`uploads/${fileNames}`)
                    let store=storageRef.put(fileTo)
                    console.log(store);
                    store.on('state_change',snapshot=>{
                        console.log('uploaed to firebase ');
                    })

                    //now upload to firebase 

                    
                } else {
                   setMsg('only PDF files can be uploaded ')
                   setUpload(false)
                }

    }
    return (
        <>
           
            <Container>
            <header>
                <div>
                    <span>
                        <Link to="parent">
                             <MdArrowBack/>
                        </Link>
                        <Breadcrumb>
                            <BreadcrumbItem>
                            <small className="text-muted">share your your learning resources with firends </small>
                            <small className="text-muted">share your your learning resources with firends </small>
                            <small className="text-muted">share your your learning resources with firends </small>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </span>
                
                </div>
            </header>

            {/* next part for the uploaded files  */}
            <div className="uploads">
                <small className="text-muted">List of uploaded files </small>
                <br/>
        



             
                <hr/>

            </div>
          <footer className="foot">
          <div className="errors">
                  <small className="err"> {msg}</small>
                  <small className="loadMsg">{upload}</small>
                </div>
          <div className="upload-btn" >
                <form action="" onSubmit={e=>e.preventDefault()}>
                   <label htmlFor="pdf">+</label>
                    <input type="file" name="load" id="pdf" style={{display:'none'}} onChange={uploadTo}/>


                </form>
                <br/>
               
             </div>
          </footer>
            </Container>

        </>
    )
}
export default Share ;