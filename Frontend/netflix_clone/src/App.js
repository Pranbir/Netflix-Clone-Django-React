import { BrowserRouter, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Components/Login/Login";
import LatestShow from "./Components/Login/LatestShow";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <>
    <BrowserRouter>
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={Login} />
      <Route path="/latest-show" component={LatestShow} />
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
    </>
  );
}

export default App;
