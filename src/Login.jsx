import "./App.css";
function Login(){
    return <>
    <body class="d-flex align-items-center py-4 bg-body-tertiary">
  
<main class="form-signin w-100 m-auto">
  <form class="signup">
    <h1 class="h3 mb-3 fw-normal">Please Login</h1>

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
      <p>New user? <a href="https://www.google.com">Signin</a></p>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Login</button>
  </form>
</main>
    

</body></>

}
export default Login;