import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex-1 px-3 max-w-[500px] mx-auto">
        <div className="space-y-4 mb-3 pl-2 md:flex flex-col items-center">
          <h3 className="capitalize text-2xl font-bold">
            Welcome to Ekatvam Innovations
          </h3>
          <p className="space-x-2">
            <span>Already Have an account?</span>
            <Link to="/home">
              <span className="text-primary">LogIn Now</span>
            </Link>
          </p>

          {/* google sign in button */}
          <button className="btn bg-primary flex items-center justify-center rounded-lg mx-auto hover:bg-opacity-80 transition-all duration-300 w-full text-base md:text-lg space-x-2">
            <FcGoogle size={20} />
            <p className="text-center">Continue With Google</p>
          </button>

          <p className="text-center">or</p>
        </div>

        <form className="space-y-6 max-w-[500px] mx-auto">
          {/* email */}
          <div>
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('email', {
                required: 'required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please provide correct email address.',
                },
              })}
              placeholder="Email"
              type="email"
            />

            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>

          {/* password */}
          <div>
            <input
              type="password"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('password', {
                required: 'required',
                pattern: {
                  value: /(?=.*[!@#$&%^*])/,
                  message:
                    'please provide atleast one special charaters (@, # etc.)',
                },
                minLength: {
                  value: 6,
                  message: 'Your password should be at least 6 characters',
                },
              })}
              placeholder="Password"
            />

            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          {/* reEnter Pass */}
          <div>
            <input
              type="password"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('password', {
                required: 'required',
                pattern: {
                  value: /(?=.*[!@#$&%^*])/,
                  message:
                    'please provide atleast one special charaters (@, # etc.)',
                },
                minLength: {
                  value: 6,
                  message: 'Your password should be at least 6 characters',
                },
              })}
              placeholder="Re-type Password"
            />

            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>

          {/* submit button */}
          <input
            className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
            type="submit"
            value="Register with Email"
          />
        </form>
      </div>

      <div className="hidden md:block w-full md:w-1/2 px-3 pt-24 pointer-events-none">
        <div className="w-fit mx-auto">
          <img src="https://i.ibb.co/XSRMs5b/register.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
