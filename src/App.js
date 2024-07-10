import Forms from "./components/forms/forms.js";
import Table from "./components/table/table.js";

const App = () => {
  return (
    <div>
      <center>
        <form>
          <br />
          <label>First Name:</label>
          <input type="text" placeholder="First Name" />
          <br />
          <label>Last Name:</label>
          <input type="text" placeholder="Last Name"/>
          <br />
          <label>Username:</label>
          <input type="text" placeholder="Enter username" required/>
          <br />
          <label>Password:</label>
          <input type="password" placeholder="Enter password" required />
          <br />
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm Password" required />
          <br />
          <button>Submit</button>
        </form>
      </center>
      <br />
      <br />
      <br />
   

    <center>
      <table border={1}> 
        <thead>
          <tr>
            <th>Id's</th>
            <th>Name</th>
            <th>Image</th>
            <th>Type Of Pic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nature Image</td>
            <td><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"width={200}/></td>
            <td>Nature PHotography</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Virat Kohli</td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfz2Qqdg5FGmRMrM1KpmlscG_ldrQMwDCTYQ&s"width={200}/></td>
            <td>cricketer</td>
          </tr>
          <tr>
            <td>3</td>
            <td>INDIANARMY</td>
            <td><img src="https://t3.ftcdn.net/jpg/06/28/11/04/360_F_628110434_LxS7d8mTO1v6T8RDumrFPMRIbyocHFiS.jpg"width={200}/></td>
            <td>COMMANDO'S</td>
          </tr>
        </tbody>
      </table>
      </center>
    </div>
  
  );
};

export default App; 

