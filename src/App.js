import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./components/MenuComponent"

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand>Amit's  Restaurant</NavbarBrand>
      </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
