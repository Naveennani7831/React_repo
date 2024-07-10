
praticed day1 & day2 topics

<!-- 
// import Buttoncomponent from "./components/button/button.js";
// import { Heading1,Heading2,Heading3 } from "./components/heading.js";
 import Buttoncomponent from "./components/button/button.js";
import Conditionalrendering from "./components/conditionalrender/conditionalrender.js";

 const App = () => {
  const isLogin = true ;
//     return(
//       <>
//       <h1>good morning</h1>
//       <img src="https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg"width={200}height={200}></img>
//       </>
//     )
//   } else{
//     return(
//       <>
//       <h2>good afternoon</h2>
//       </>
//     )

   return (
        <div>
          {/* { isLogin ? (
             <div>
              <h1>To see the nature photo here</h1>
              <img src="https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg"width={200}height={200}></img>
             </div>
      ) :(
    <h2>good afternoon</h2>

        )  }; */}

         {
          isLogin && (
            <div>
            <h1>To see the nature photo here</h1>
            <img src="https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg"width={200}height={200}></img>
           </div>

          )
         }

        </div>
   );

  };

   

// const App = () =>{
//   return (
//     <div>
//       <h1>hlo iam k.naveen</h1>;
//       <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" width={100} height={100}></img><br></br>
//       <a href="https://www.amazon.in/"><Buttoncomponent>click me </Buttoncomponent><br></br></a>
//       <Heading1></Heading1>
//       <Heading2></Heading2>
//       <Heading3></Heading3> 
//       { [1 ,2].map((num) => console.log(num))
//       }
//       {console.log("num")} 
//      <ul>
//         <li>hlo</li><li>srinidhi</li>
//       </ul>
//       <ol>
//         <li>
//           iam
//         </li>
//         <li>from</li>
//         <li>hyderabad</li>
//         <li>suryapet</li>
//       </ol>
//     </div>
//   );
// };
export default App;  -->