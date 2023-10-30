<<<<<<< HEAD
import Profile from './components/timeline/Profile';
import Sidebar from './components/sidebar/Sidebar';
import Works from './components/profile/Works';
import Registration from './components/login-and-signup/Registration';
import { useState } from 'react';
=======
import Profile from "./components/timeline/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import Works from "./components/profile/Works";
>>>>>>> a4de12db111131e400636668e754ccc4a045fe32

function App() {
  const [loggedIn ,setLoggedIn] = useState(false);



  return (
<<<<<<< HEAD
    <div>

    { loggedIn ?  <div className="App" style={{backgroundColor:"#f5f5f5",display:"flex", justifyContent:"center", flexWrap:"wrap" }}>
    <Sidebar/>
    <Profile/>
    <Works/>
    </div> :
    <Registration/>
  }
=======
    <div
      className="App"
      style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Sidebar />
      <Profile />
      <Works />
>>>>>>> a4de12db111131e400636668e754ccc4a045fe32
    </div>
  );
}

export default App;
