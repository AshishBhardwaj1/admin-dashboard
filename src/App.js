import Profile from "./components/timeline/Profile";
import Sidebar from "./components/sidebar/Sidebar";
import Works from "./components/profile/Works";

function App() {
  return (
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
    </div>
  );
}

export default App;
