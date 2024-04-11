import "./App.css";
import Login from "./Login";
import Signin from "./Signin";
function App({login}){
  console.log(login);

    return <>
    {login==="yes"?<Login></Login> :<Signin></Signin>}
    </>

}
export default App;