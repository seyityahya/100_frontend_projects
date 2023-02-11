import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Users from './pages/Users';
import Menu from './components/Menu';
import UsersDetail from './pages/UsersDetail';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='users' element={<Users/>} />
        <Route path='users/:id'element={<UsersDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
