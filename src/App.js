import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ManageInventories from './Pages/Inventory/ManageInventories';
import ManageStock from './Pages/Inventory/ManageStock/ManageStock';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/User/Login/Login';
import Register from './Pages/User/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/manage-inventories/inventory/:id' element={<ManageStock></ManageStock>}></Route>
        <Route path='/inventory/:id' element={<ManageStock></ManageStock>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;
