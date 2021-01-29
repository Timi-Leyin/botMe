import React from 'react';
import {Container} from 'reactstrap'
const Auth=()=>{
    return(
        <div>
           <Container>
               <div className="content">
                {/* Google Oauth button */}
               
                <div class="g-signin2" data-onsuccess="onSignIn"></div>

               </div>
           </Container>
        </div>
    )
}
export default Auth;