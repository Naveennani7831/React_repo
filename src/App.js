
import Buttoncomponent from "./components/button/button.js";
import { Heading1,Heading2,Heading3 } from "./components/heading.js";
   

const App = () =>{
  return (
    <div>
      <h1>hlo iam k.naveen</h1>;
      <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" width={100} height={100}></img><br></br>
      <a href="https://www.amazon.in/"><Buttoncomponent>click me </Buttoncomponent><br></br></a>
      <Heading1></Heading1>
      <Heading2></Heading2>
      <Heading3></Heading3> 
     <ul>
        <li>hlo</li>
        <li>srinidhi</li>
      </ul>
      <ol>
        <li>
          iam
        </li>
        <li>from</li>
        <li>hyderabad</li>
      </ol>
    </div>
  );
};
export default App;


























