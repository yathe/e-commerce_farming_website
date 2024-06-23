import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Farm from './components/Farm/Farm';
import Body from './components/body/Body';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import ProductList from './components/ProductList';
import SchemePage from './components/SchemePage';
import Front_loans from './components/Front_loans';
// import ProductService from './components/ProductService';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<><PrivateComponent />
            <Farm />
            <Body />
            <Footer />
          </>}>
          </Route>
          <Route path="/scheme" element={<SchemePage />} />
          <Route path="/home" element={<ProductList />} />
          <Route path="/loans" element={<Front_loans />} />
          {/* <Route path="/add-product" component={<ProductService/>} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
