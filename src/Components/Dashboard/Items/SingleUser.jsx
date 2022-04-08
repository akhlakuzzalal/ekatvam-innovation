import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [id]);
  console.log(user);
  return (
    <div className="h-full">
      <div className="h-1/4 bg-slate-200 w-full"></div>
      <div className="w-11/12 mx-auto -mt-20 bg-white">
        {/* banner */}
        <div>
          <div className="flex items-center space-x-48 px-6">
            <div className="flex items-center space-x-2">
              <img
                className="w-24 h-24 rounded-t-full"
                src="https://thumbs.dreamstime.com/b/user-icon-flat-style-person-icon-user-icon-web-site-user-icon-vector-illustration-user-icon-flat-style-person-icon-user-131140097.jpg"
                alt="user iamge"
              />
              <div>
                <h6>{user?.name}</h6>
                <h6 className="text-zinc-500">#d4d{user?.id}</h6>
              </div>
            </div>
            <div>
              <h6>{user?.company?.name}</h6>
              <p>{user?.phone}</p>
            </div>
          </div>
          <div className="flex items-center space-x-16 py-4 pl-6 bg-zinc-300">
            <h6>About</h6>
            <h6>Company</h6>
            <h6>Team</h6>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-7">
          {/* personal Information */}
          <div className="col-span-1 border-[1px] border-zinc-300">
            <h6 className="py-3 bg-zinc-200 pl-5">Personal Information</h6>
            <div className="py-2 border-y-[1px] border-zinc-300 pl-4">
              <p className="font-bold text-zinc-500">Name</p>
              <p className="font-semibold text-zinc-700">{user?.name}</p>
            </div>
            <div className="py-2 border-y-[1px] border-zinc-300 pl-4">
              <p className="font-bold text-zinc-500">User Name</p>
              <p className="font-semibold text-zinc-700">{user?.username}</p>
            </div>
            <div className="py-2 border-y-[1px] border-zinc-300 pl-4">
              <p className="font-bold text-zinc-500">Email</p>
              <p className="font-semibold text-zinc-700">{user?.email}</p>
            </div>
            <div className="py-2 border-y-[1px] border-zinc-300 pl-4">
              <p className="font-bold text-zinc-500">Phone No</p>
              <p className="font-semibold text-zinc-700">{user?.phone}</p>
            </div>
            <div className="py-2 border-y-[1px] border-zinc-300 pl-4">
              <p className="font-bold text-zinc-500">Website</p>
              <p className="font-semibold text-zinc-700">{user?.website}</p>
            </div>
          </div>
          {/* company & address */}
          <div className="col-span-2 space-y-3">
            <div className="border-[1px] border-zinc-300">
              <h6 className="py-3 bg-zinc-200 pl-5">Company Details</h6>
              <div className="pl-4 py-5">
                <HiInformationCircle size={20} />
                <h3 className="text-2xl">{user?.company?.name}</h3>
                <h6 className="pl-4">{user?.company?.bs}</h6>
                <h6 className="pl-4">{user?.company?.catchPhrase}</h6>
              </div>
            </div>
            <div className="border-[1px] border-zinc-300">
              <h6 className="py-3 bg-zinc-200 pl-5">Address</h6>
              <div className="pl-4 py-5">
                <div className="flex items-center">
                  <MdLocationOn size={20} />
                  <h6>{`${user?.address?.street}, ${user?.address?.city}`}</h6>
                </div>
                <h6 className="pl-4">Zipcode: {user?.address?.zipcode}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
