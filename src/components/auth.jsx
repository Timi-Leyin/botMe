import React from 'react';
import { Link } from 'react-router-dom';
import {Container , Button} from 'reactstrap'
const Auth=()=>{
    return(
        <div>
           <Container>
               <div className="content">
                {/* Google Oauth button */}
               
                    <div className="auth_contents">
                         <div className="auth_inner">
                             <div class="g-signin2" data-onsuccess="onSignIn"></div>

                                <div className="text-center">
                                        <span >
                                        <p>click the button below if you are not automatically redirected</p>
                                            </span>
                                        <Link to='parent'>
                                            <Button color='light'>REDIRECT</Button>
                                        </Link>
                                </div>
                         </div>
                    </div>

               </div>
           </Container>
        </div>
    )
}
export default Auth;