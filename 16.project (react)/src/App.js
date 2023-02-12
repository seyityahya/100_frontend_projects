import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard/Home"
import Contact from './pages/Dashboard/Contact';
import Users from './pages/Dashboard/Users';
import UsersDetail from './pages/Dashboard/UsersDetail';
import Login from './pages/Auth/Login';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import Register from './pages/Auth/Register';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout/>}>
          <Route index element={<Home/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='users' element={<Users/>} />
          <Route path='users/:id'element={<UsersDetail/>} />
        </Route>
        <Route path='auth' element={<AuthLayout/>}>
          <Route index element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
