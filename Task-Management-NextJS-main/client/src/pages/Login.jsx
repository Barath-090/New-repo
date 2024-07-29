import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const navigateTo = useNavigate();
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);
    const backgroundImageUrl = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 

  console.log("loginError from login page:", loginError);

  const handleChange = (e) => {
    updateLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(e);
      navigateTo("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
    module.exports = {
      theme: {
        extend: {
          borderRadius: {
            'custom-lg': '60rem', // Example custom radius
          }
        }
      }
    }
  };

  return (
    <div
    className="min-h-screen flex items-center justify-center bg-gray-200 sm:px-6 lg:px-8"
    style={{ 
      backgroundImage: `url(${backgroundImageUrl})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
    }}
  >
      <div className="max-w-md w-full space-y-8 bg-white px-9 border py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '50px' }} >
        <div>
        <h2 className="mt-6 text-center text-3xl font-black text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
  Login
</h2>

        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
          <label className="block text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
  Email address
</label>

<input
  type="email"
  name="email"
  id="email"
  autoComplete="email"
  required
  className="mt-2 p-2 border border-white-300 rounded-md w-full bg-transparent text-gray-900 font-bold placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  style={{
    backgroundColor: 'transparent',
    borderColor: '#d1d5db', // Light gray border color (Tailwind's gray-300)
  }}
  value={loginInfo?.email}
  onChange={handleChange}
/>
            {loginError?.email && (
              <p className="text-red-500 text-xs italic">{loginError.email}</p>
            )}
          </div>
          <div>
          <label className="block text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              Password
            </label>
            <input
  type="password"
  name="password"
  id="password"
  autoComplete="current-password"
  required
  className="mt-2 p-2 border border-gray-300 rounded-md w-full bg-transparent text-gray-900 font-bold placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  style={{
    backgroundColor: 'transparent',
    borderColor: '#d1d5db', // Light gray border color
  }}
  value={loginInfo?.password}
  onChange={handleChange}
/>

            {loginError?.password && (
              <p className="text-red-500 text-xs italic">
                {loginError.password}
              </p>
            )}
          </div>
          <div>
          <button
  type="submit"
  className="w-full py-3 px-6 border border-transparent rounded-md shadow-lg text-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"style={{borderRadius: '50px'}}
  disabled={isLoginLoading}
>
  {isLoginLoading ? "Logging in..." : "Login"}
</button>


          </div>
        </form>

        <div className="mt-4 grid justify-center items-center">
          {loginError && (
            <p className="text-red-500 mt-2">{loginError.message}</p>
          )}
          <span className="mt-4">
          <span className="font-bold text-white">Don't have an account?</span>{" "}
            <span className="text-blue-500 ml-3">
              <Link to="/register">Register</Link>
            </span>{" "}
          </span>
        </div>
        <div className="bg-gray-100 px-5 py-2">
          <p>Email: taufiq@gmail.com</p>
          <p>Password: Diu123456789@</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
