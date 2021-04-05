import './App.css';
import Footer from './component/footer';
import NavBar from './component/navBar';
import Catalog from './component/catalog';
import Home from './component/home';
import About from './component/about';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/catalog" exact component={Catalog}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>


    <Footer></Footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
