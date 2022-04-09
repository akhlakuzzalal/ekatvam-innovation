import { useState } from 'react';
import { AiOutlineExclamationCircle, AiOutlineMenuFold } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineCreate } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../firebase/useAuth';

const Dashboard = () => {
  const { logOut } = useAuth();
  const [menu, setMenu] = useState('allusers');
  return (
    <div id="dashboard" className="grid grid-cols-6">
      <div
        id="dash-menu"
        className="col-span-1 h-[100vh] pl-6 py-5 bg-[#f2f5f9]"
      >
        {/* menu items */}
        <div className="flex flex-col items-start justify-between h-full">
          <div className="space-y-6 w-full">
            <div className="flex items-center justify-between mr-2">
              <img className="h-12 w-12" src={logo} alt="" />
              <AiOutlineMenuFold size={25} />
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setMenu('allusers')}
                  className={`flex items-center space-x-2 ${
                    menu === 'allusers' && 'text-white bg-[#0087c6]'
                  }  hover:text-white hover:bg-[#0087c6] px-3 py-2 rounded-md`}
                >
                  <FaUserFriends size={20} />
                  <h6 className="font-bold">All Users</h6>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/create"
                  onClick={() => setMenu('create')}
                  className={`flex items-center space-x-2 ${
                    menu === 'create' && 'text-white bg-[#0087c6]'
                  }  hover:text-white hover:bg-[#0087c6] px-3 py-2 rounded-md`}
                >
                  <MdOutlineCreate size={20} />
                  <h6 className="font-bold">Create</h6>
                </Link>
              </li>
            </ul>
          </div>
          {/* menu bottom */}
          <div className="w-full">
            <button
              onClick={logOut}
              className="w-11/12 py-2 mx-auto my-2 bg-fuchsia-600 text-white rounded-lg"
            >
              Log Out
            </button>
            <span className="flex items-center space-x-2 pb-5 border-b-[1px] border-gray-400">
              <AiOutlineExclamationCircle size={20} />
              <h6>Help</h6>
            </span>
          </div>
        </div>
      </div>
      <div
        id="dash-item"
        className="col-span-5 h-screen overflow-y-scroll overflow-x-hidden"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
