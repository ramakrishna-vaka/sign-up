import { useState } from "react";
import "./App.css";
import App from "./App";
function Signin(){
  const[login,setLogin]=useState("no");
  const handleClick=()=>{
    setLogin("yes");
    // console.log(login);
    App({login});
}

    return <>
    <body class="d-flex align-items-center py-4 bg-body-tertiary">
  
<main class="form-signin w-100 m-auto">
  <form class="signup">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating form-item">
      <input type="text" class="form-control" id="floatingInput" placeholder="First Name"/>
      <label for="floatingInput">First Name</label>
    </div>
    <div class="form-floating form-item">
      <input type="text" class="form-control" id="floatingInput" placeholder="Last Name"/>
      <label for="floatingInput">Last Name</label>
    </div>
    <div class="form-floating form-item">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating form-item">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      {/* <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label> */}
      <p>Already a member? <span onClickCapture={() => {handleClick()}}>Login</span></p>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
  </form>
</main>
    

</body></>

}
export default Signin;