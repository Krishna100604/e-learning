import React from "react";


function Login(){
    
    return(
        <div className="formContainer">
        <div className="formWrapper">
          {/* <span className="logo">Login</span> */}
          <span className="title">Login</span>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>   
                {/* <input type="google" placeholder="Sign in with google"/> */}
                <button>Sign in with google</button>
                <button>Sign in</button>   
                {/* {err && <span>Something went wrong </span>} */}
            </form>
            {/* <p>Don't have an Account? <Link to="/register">Register</Link></p> */}
        
      
    </div>
        </div>
    // </div>
    );
}

export default Login;