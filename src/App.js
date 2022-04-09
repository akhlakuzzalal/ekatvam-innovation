import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import AllUsers from './Components/Dashboard/Items/AllUsers';
import Create from './Components/Dashboard/Items/Create';
import SingleUser from './Components/Dashboard/Items/SingleUser';
import PrivateRoute from './Components/firebase/PrivateRoute';
import Home from './Components/Home';
import Register from './Components/Register';
import { fetchAllUsers } from './redux/Slices/usersSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="create" element={<Create />} />
          <Route path="" element={<AllUsers />} />
          <Route path=":id" element={<SingleUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
