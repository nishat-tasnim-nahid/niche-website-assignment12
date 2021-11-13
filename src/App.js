import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import MoreProduct from './Pages/Home/MoreProduct/MoreProduct';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Login/Register/Register';
import AllProducts from './Pages/Home/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path='/purchase'>
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path='/allProducts'>
            <AllProducts></AllProducts>
          </PrivateRoute>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/register">
            <Register></Register>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
