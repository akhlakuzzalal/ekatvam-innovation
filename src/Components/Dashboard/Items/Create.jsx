import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../../redux/Slices/usersSlice';

const Create = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { street, city, zipcode, name, username, email, phone, website } =
      data;
    const address = { street, zipcode, city };
    const body = { address, name, username, email, phone, website };
    axios
      .post('https://jsonplaceholder.typicode.com/users', body)
      .then((res) => dispatch(setUsers(res.data)));
  };
  return (
    <div className="grid grid-cols-2">
      <div className="w-9/12 mx-auto">
        <h3 className="text-center py-5">Fill the Form</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-t-4 border-primary rounded-xl"
          action=""
        >
          <div className="w-11/12 mx-auto py-3 space-y-2">
            <h6 className="text-zinc-700 font-semibold text-center text-lg">
              Personal Information
            </h6>
            <div>
              <p className="font-bold text-zinc-600">Name</p>
              <input
                {...register('name', require)}
                className="focus:outline-0 border-[1px] rounded-md border-zinc-400 w-full py-2 pl-2"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <p className="font-bold text-zinc-600">User name</p>
              <input
                {...register('username', require)}
                className="focus:outline-0 border-[1px] rounded-md border-zinc-400 w-full py-2 pl-2"
                type="text"
                placeholder="User name"
              />
            </div>
            <div>
              <p className="font-bold text-zinc-600">Email Address</p>
              <input
                {...register('email', require)}
                className="focus:outline-0 border-[1px] rounded-md border-zinc-400 w-full py-2 pl-2"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="w-11/12 mx-auto py-3 space-y-2">
            <h6 className="text-zinc-700 font-semibold text-center text-lg">
              Other Information
            </h6>
            <div>
              <p className="font-bold text-zinc-600">Address</p>
              <input
                {...register('street')}
                className="focus:outline-0 border-[1px] rounded-md border-zinc-400 w-full py-2 pl-2"
                type="text"
                placeholder="Street"
              />
              <div className="flex justify-between items-center w-full space-y-2">
                <input
                  {...register('city')}
                  className="focus:outline-0 border-[1px] rounded-md border-zinc-400 py-2 pl-2 w-[48%]"
                  type="text"
                  placeholder="City"
                />
                <input
                  {...register('zipcode')}
                  className="focus:outline-0 border-[1px] rounded-md border-zinc-400 py-2 pl-2 w-[48%]"
                  type="text"
                  placeholder="zipcode"
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-zinc-600">Phone</p>
              <input
                {...register('phone', require)}
                className="focus:outline-0 border-[1px] rounded-md border-zinc-400 w-full py-2 pl-2"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div>
              <p className="font-bold text-zinc-600">Website</p>
              <input
                {...register('website', require)}
                className="focus:outline-0 border-[1px] rounded-md border-zinc-400 w-full py-2 pl-2"
                type="text"
                placeholder="Website"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-11/12 ml-5 py-3 bg-primary rounded-lg"
          />
        </form>
      </div>
      <div className="flex items-center h-full">
        <img
          className="w-full"
          src="https://www.pngitem.com/pimgs/m/196-1961460_fill-up-form-png-clipart-png-download-fill.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Create;
