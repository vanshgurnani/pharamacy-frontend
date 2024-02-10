import logo from './logo.svg';
import './App.css';
import Navig from './Navig';
import { Home } from './NavRoutes/Home';
import Product from './NavRoutes/Product';
import Add from './NavRoutes/Add';
import Sell from './NavRoutes/Sell';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;

    case "/product":
      component = <Product/>;
      break;

    case "/add":
      component = <Add/>;
      break;
    case "/sell":
      component = <Sell/>;
      break;
    default:
      break;
  }
  return (
    <>
     <Navig/>
     {component}
    </>
  );
}

export default App;
