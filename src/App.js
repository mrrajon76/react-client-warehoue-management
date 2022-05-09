import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ManageInventories from './Pages/Inventory/ManageInventories';
import ManageStock from './Pages/Inventory/ManageStock/ManageStock';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/User/Login/Login';
import Register from './Pages/User/Register/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/User/RequireAuth/RequireAuth';
import MyItems from './Pages/Inventory/MyItems/MyItems';
import AddNewItem from './Pages/Inventory/AddNewItem/AddNewItem';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/manage-inventories/inventory/:id' element={
          <RequireAuth>
            <ManageStock></ManageStock>
          </RequireAuth>}>
        </Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ManageStock></ManageStock>
          </RequireAuth>}>
        </Route>
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>
        <Route path='/add-new-item' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>}>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
