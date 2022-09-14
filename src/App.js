import Friends from "./components/Friends/Friends";
import Notifications from "./components/Notifications/Notifications";
import Message from "./components/Message/Message";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/message" element={<Message />}></Route>
      </Routes>
    </div>
  );
}

export default App;
