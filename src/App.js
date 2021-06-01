import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/utils/TopBar";
import BottomBar from "./components/utils/BottomBar";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Mypage from "./pages/Mypage";
import Post from "./pages/Post";
import Pay from "./pages/Pay";

import NotFound from "./pages/NotFound";

import "./css/Styles.css";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/post" component={Post} />
          <Route path="/pay" component={Pay} />
          <Route path="*" component={NotFound} />
        </Switch>
        <BottomBar />
      </Router>
    </>
  );
}

export default App;
