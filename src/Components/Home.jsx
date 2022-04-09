import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from './firebase/useAuth';

const Home = () => {
  const navigate = useNavigate();
  const {
    signInWithGoogle,
    signInWithEmail,
    user,
    logOut,
    loading,
    error,
    setError,
    setUser,
    setLoading,
  } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleEmailPass = (data) => {
    const { email, password } = data;
    signInWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate('/dashboard');
        });
        setLoading(false);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
      });
    reset();
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate('/dashboard');
        });
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ...
        setLoading(false);
      });
  };
  if (error) {
    setTimeout(() => {
      setError('');
    }, 5000);
  }
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        {!user?.email ? (
          <div className="flex-1 px-3 max-w-[500px] mx-auto">
            <div className="space-y-4 mb-3 pl-2 md:flex flex-col items-center">
              <h3 className="capitalize text-2xl font-bold">
                Welcome to Ekatvam Innovations
              </h3>
              <p className="space-x-2">
                <span>Don't Have an account?</span>
                <Link to="/register">
                  <span className="text-primary">Sign up Now</span>
                </Link>
              </p>

              {/* google sign in button */}
              <button
                onClick={handleGoogle}
                className="btn bg-primary flex items-center justify-center rounded-lg mx-auto hover:bg-opacity-80 transition-all duration-300 w-full text-base md:text-lg space-x-2"
              >
                <FcGoogle size={20} />
                <p className="text-center">Continue With Google</p>
              </button>

              <p className="text-center">or</p>
            </div>
            {/* log in with email & pass */}
            <form
              onSubmit={handleSubmit(handleEmailPass)}
              className="space-y-6 max-w-[500px] mx-auto"
            >
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

              {/* submit button */}
              <input
                className={`btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300 ${
                  loading && 'bg-slate-700 cursor-not-allowed'
                }`}
                type="submit"
                disabled={loading && true}
                value={`${loading ? 'Please wait...' : 'Log In with Email'}`}
              />
            </form>
            {error && (
              <p className="text-red-600 font-bold mx-auto py-4">{error}</p>
            )}
          </div>
        ) : (
          <div className="flex-1 px-3 max-w-[500px] mx-auto">
            <p className="py-4 text-xl font-semibold text-zinc-700">
              Already Loged in
            </p>
            <button
              className="px-3 py-2 rounded-lg bg-red-400 text-white"
              onClick={logOut}
            >
              Log Out
            </button>
            {navigate('/dashboard')}
          </div>
        )}
        <div className="hidden md:block w-full md:w-1/2 px-3 pt-24 pointer-events-none">
          <div className="w-fit mx-auto">
            <img
              src="https://stop-gap.in/wp-content/uploads/2020/04/account-log-page_41910-263.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
