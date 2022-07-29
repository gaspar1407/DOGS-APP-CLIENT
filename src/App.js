import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Route path={"/inicio"} component={NavBar} />
      <Route exact path={"/"} component={LandingPage} />
      <Route exact path={"/inicio/home"} component={Home} />
      <Route
        exact
        path={"/inicio/detail/:id"}
        render={({ match }) => {
          return <Detail id={match.params.id} />;
        }}
      />
      <Route exact path={"/inicio/dogCreated"} component={Form} />
    </div>
  );
}

export default App;
