import Profile from './components/timeline/Profile';
import Sidebar from './components/sidebar/Sidebar';
import Works from './components/profile/Works';
import Registration from './components/login-and-signup/Registration';
import { useState } from 'react';

function App() {
  const [loggedIn ,setLoggedIn] = useState(false);



  return (
    <div>

    { loggedIn ?  <div className="App" style={{backgroundColor:"#f5f5f5",display:"flex", justifyContent:"center", flexWrap:"wrap" }}>
    <Sidebar/>
    <Profile/>
    <Works/>
    </div> :
    <Registration/>
  }
    </div>
  );
}

export default App;
